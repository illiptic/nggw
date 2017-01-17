import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service'
import { Character } from './character.model'

@Injectable()
export class CharacterService {

  constructor(private api: ApiService) { }

  getCharacters(): Observable<string[]> {
    return this.api
      .get('characters')
      .map(response => {
        return response as string[]
      })
  }

  getCharacter(name: string): Observable<Character> {
    return this.api
      .get('characters/' + name)
      .map(response => {
        return response as Character
      })
  }
}
