import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { Character } from '../character/character.model'
import { Profession, Specialization, Trait } from '../professions/profession.model'

import { CharacterService } from '../character/character.service'
import { ProfessionService } from '../professions/profession.service'

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  character: Character
  profession: Profession

  professions: {[id: string]: Profession}
  selectedSpecs: {[id: number]: any} = {}
  display: {[id: string]: boolean} = {}

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private professionService: ProfessionService
  ) {}

  ngOnInit(): void {
    this.professionService.getProfessions()
      .subscribe((professions) => {
        this.professions = professions
        this.setProfession()
      })
    this.route.params
      .switchMap((params: Params) => {
        return this.getCharacter(params['id'])
          .map(character => {
            this.character = character
            return character
          })
      })
      .subscribe((char: Character) => {
        this.setSelectedSpecs(char)
        this.setProfession()
      })
  }

  // ngOnChanges(): void {
  //   this.setSelectedSpecs()
  // }

  toggle(name: string): void {
    this.display[name] = !this.display[name]
  }

  setSelectedSpecs(character): void {
    this.selectedSpecs = {}
    if (character.specializations && character.specializations.pve) {
      character.specializations.pve.forEach((spec) => {
        if (spec) {
          this.selectedSpecs[spec.id] = spec
        }
      })
    }
  }

  setProfession(): void {
    if (this.professions && this.character) {
      this.profession = this.professions[this.character.profession]
    }
  }

  getCharacter(name: string): Observable<Character> {
    return this.characterService.getCharacter(name)
  }

  getBackground(specialization: Specialization): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('url('+ specialization.background +')')
  }

  characterSpecSelected(trait: Trait): boolean {
    let spec = this.selectedSpecs[trait.specialization]
    return spec && (trait.slot === 'Minor' || spec.traits.indexOf(trait.id) > -1)
  }
}
