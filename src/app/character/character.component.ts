import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { Observable } from 'rxjs';

import { Account } from '../account/account.model'
import { AccountService } from '../account/account.service'

import { Profession, Specialization, Trait } from '../professions/profession.model'
import { ProfessionService } from '../professions/profession.service'

import { Character } from './character.model'
import { CharacterService } from './character.service'

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  constructor(
    private professionService: ProfessionService,
    private accountService: AccountService,
    private characterService: CharacterService
  ) {}

  professions: Profession[]
  username: string
  characterNames: string[]
  characters: {[name: string]: Character} = {}
  currentCharacter: string
  currentCharacterProfession: Profession

  ngOnInit(): void {
    this.getProfessions()
    this.getCharacters()
  }

  getProfessions(): void {
    this.professionService.getProfessions()
    .subscribe((data) => {
      this.professions = data
    })
  }
  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe((data) => {
        this.characterNames = data
      })
  }

  getCharacter(name: string): Observable<any> {
    if(this.characters[name]) {
      return Observable.of<any>([])
    } else {
      return this.characterService.getCharacter(name)
        .map((data) => {
          this.characters[name] = data
        })
    }
  }

  displayCharacter(name: string): void {
    this.getCharacter(name)
      .subscribe(() => {
        this.currentCharacter = name
        let currentProfession = this.characters[this.currentCharacter].profession
        this.currentCharacterProfession = this.professions.filter(prof => prof.id === currentProfession)[0]
      })
  }
}
