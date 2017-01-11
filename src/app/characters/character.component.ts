import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { Character } from './character.model'
import { Profession, Specialization, Trait } from '../professions/profession.model'

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character: Character
  @Input() profession: Profession

  selectedSpecs: {[id: number]: any} = {}

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.character.specializations.pve.forEach((spec) => {
      this.selectedSpecs[spec.id] = spec
    })
  }

  getBackground(specialization: Specialization): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('url('+ specialization.background +')')
  }

  characterSpecSelected(trait: Trait): boolean {
    let spec = this.selectedSpecs[trait.specialization]
    return spec && (trait.slot === 'Minor' || spec.traits.indexOf(trait.id) > -1)
  }
}
