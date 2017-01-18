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
          char.equipment.map((item) => {
            if (item.stats) {
              item.stats.attributes = Object.keys(item.stats.attributes).map((a) => {
                return {attribute: a, modifier: item.stats.attributes[a]}
              })
            }
            return item
          })
          this.characters[name] = char
          return char
        })
    }
  }

  getCharacterItems(name: string): Observable<any> {
    return this.api
      .get('characters/' + name + '/equipment')
      .flatMap(result => {
        return this.api.get('items?ids=' + result.equipment.map(item => item.id).join(','))
      })
      .map(items => {
        return items.reduce((map, item) => {
          map[item.id] = item
          return map
        }, {})
      })
  }
}
