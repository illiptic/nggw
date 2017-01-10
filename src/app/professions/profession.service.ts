import { Injectable } from '@angular/core';
import { Profession } from './profession.model'
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
        return professions as Profession[]
      })
  }
}
