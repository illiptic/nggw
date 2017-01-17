import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profession, Specialization, Trait } from './profession.model'
import { ApiService } from '../services/api.service'

@Injectable()
export class ProfessionService {

  private professions: {[name: string]: Profession} = null

  constructor(private api: ApiService) { }


  getProfessions(): Observable<{[name: string]: Profession}> {
    if (this.professions) {
      return Observable.of<{[id: string]: Profession}>(this.professions)
    }
    return this.api
      .get('professions')
      .map(response => {
        return response as string[]
      })
      .flatMap(ids => {
        return this.api.get('professions?ids=' + ids.join(','))
      })
      .flatMap(professions => {
        return Observable.forkJoin(professions.map(profession => {
          return this.api.get('specializations?ids=' + profession.specializations.join(','))
            .flatMap(specializations => {
              profession.specializations = specializations
              return Observable.forkJoin(specializations.map(specialization => {
                return this.api.get('traits?ids=' + specialization.minor_traits.concat(specialization.major_traits).join(','))
                  .map(traits => {
                    specialization.traits = traits.sort((a, b) => {
                      if (a.tier !== b.tier) {
                        return a.tier - b.tier
                      } else if (a.order !== b.order) {
                        return a.order - b.order
                      }
                      return a.slot === 'Minor' ? -1 : 1
                    }) as Trait[]
                  })
              }))
            })
        }))
        .map(() => {
          this.professions = professions.reduce((map, profession) => {
            map[profession.id] = profession
            return map
          }, {})
          return this.professions
        })
      })
  }
}
