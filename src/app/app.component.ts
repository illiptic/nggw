import { Component } from '@angular/core'

import { Account } from './account/account.model'
import { AccountService } from './account/account.service'

import { Profession } from './professions/profession.model'
import { ProfessionService } from './professions/profession.service'

import { Character } from './characters/character.model'
import { CharacterService } from './characters/character.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private professionService: ProfessionService,
    private accountService: AccountService,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.getProfessions()
    this.getAccount()
    this.getCharacters()
  }

  professions: Profession[]
  username: string
  characterNames: string[]
  characters: {[name: string]: Character} = {}
  currentCharacter: string
  currentCharacterProfession: Profession

  getProfessions(): void {
    this.professionService.getProfessions()
      .then((data) => {
        this.professions = data
      })
  }

  getAccount(): void {
    this.accountService.getAccount()
      .then((data) => {
        this.username = data.name.split('.').shift()
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
