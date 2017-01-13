import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service'
import { Character } from './character.model'

@Injectable()
export class CharacterService {

  constructor(private api: ApiService) { }

  getCharacters(): Promise<string[]> {
    return this.api
      .get('characters')
      .then(response => {
        return response as string[]
      })
  }

  getCharacter(name: string): Promise<Character> {
    return this.api
      .get('characters/' + name)
      .then(response => {
        return response as Character
      })
  }
}
