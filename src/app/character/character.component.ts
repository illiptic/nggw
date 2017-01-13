import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'

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
    .then((data) => {
      this.professions = data
    })
  }
  getCharacters(): void {
    this.characterService.getCharacters()
      .then((data) => {
        this.characterNames = data
      })
  }

  getCharacter(name: string): Promise<any> {
    if(this.characters[name]) {
      return Promise.resolve()
    } else {
      return this.characterService.getCharacter(name)
        .then((data) => {
          this.characters[name] = data
        })
    }
  }

  displayCharacter(name: string): void {
    this.getCharacter(name)
      .then(() => {
        this.currentCharacter = name
        let currentProfession = this.characters[this.currentCharacter].profession
        this.currentCharacterProfession = this.professions.filter(prof => prof.id === currentProfession)[0]
      })
  }
}
