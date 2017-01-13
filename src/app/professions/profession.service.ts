import { Injectable } from '@angular/core';
import { Profession, Specialization, Trait } from './profession.model'
import { ApiService } from '../services/api.service'

@Injectable()
export class ProfessionService {

  constructor(private api: ApiService) { }

  getProfessions(): Promise<Profession[]> {
    return this.api
      .get('professions')
      .then(response => {
        return response as string[]
      })
      .then(ids => {
        return this.api.get('professions?ids=' + ids.join(','))
      })
      .then(professions => {
        return Promise.all(professions.map(profession => {
          return this.api.get('specializations?ids=' + profession.specializations.join(','))
            .then(specializations => {
              profession.specializations = specializations as Specialization
              return profession as Profession
            })
            .then(profession => {
              return Promise.all(profession.specializations.map(specialization => {
                return this.api.get('traits?ids=' + specialization.minor_traits.concat(specialization.major_traits).join(','))
                  .then(traits => {
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
              .then(() => {
                return profession
              })
            })
        }))
      })
      .then(professions => {
        return professions
      })
  }
}
