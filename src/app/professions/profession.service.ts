import { Injectable } from '@angular/core';
import { Profession } from './profession.model'
import { ApiService } from '../services/api.service'

const baseUrl = 'https://api.guildwars2.com/'
const key = '5129EB54-8EB1-3941-95FF-BF1826D6309F615A7A1B-52D6-423E-97E7-0450B0C25307'

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
