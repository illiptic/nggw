import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service'
import { Character } from './character.model'

@Injectable()
export class CharacterService {

  private characters: {[name: string]: Character} = {}

  constructor(private api: ApiService) { }

  getCharacters(): Observable<string[]> {
    return this.api
      .get('characters')
      .map(response => {
        return response as string[]
      })
  }

  getCharacter(name: string): Observable<Character> {
    if (this.characters[name]) {
      return Observable.of<Character>(this.characters[name])
    } else {
      return this.api
        .get('characters/' + name)
        .map(response => {
          let char = response as Character
          this.characters[name] = char
          return char
        })
    }
  }
}
