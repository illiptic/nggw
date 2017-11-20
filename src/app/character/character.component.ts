import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

import { Account } from '../account/account.model'
import { AccountService } from '../account/account.service'

import { Character } from './character.model'
import { CharacterService } from './character.service'

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  constructor(
    private router: Router,
    private accountService: AccountService,
    private characterService: CharacterService,
  ) {}

  loading: boolean
  characterNames: string[]

  ngOnInit(): void {
    this.loading = true
    this.getCharacters()
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe((data) => {
        this.loading = false
        this.characterNames = data
      })
  }
}
