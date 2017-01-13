import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { Character } from '../character/character.model'
import { Profession, Specialization, Trait } from '../professions/profession.model'

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  @Input() character: Character
  @Input() profession: Profession

  selectedSpecs: {[id: number]: any} = {}
  display: {[id: string]: boolean} = {}

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // this.setSelectedSpecs()
  }

  ngOnChanges(): void {
    this.setSelectedSpecs()
  }

  toggle(name: string): void {
    this.display[name] = !this.display[name]
  }

  setSelectedSpecs(): void {
    this.selectedSpecs = {}
    if (this.character.specializations && this.character.specializations.pve) {
      this.character.specializations.pve.forEach((spec) => {
        if (spec) {
          this.selectedSpecs[spec.id] = spec
        }
      })
    }
  }

  getBackground(specialization: Specialization): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('url('+ specialization.background +')')
  }

  characterSpecSelected(trait: Trait): boolean {
    let spec = this.selectedSpecs[trait.specialization]
    return spec && (trait.slot === 'Minor' || spec.traits.indexOf(trait.id) > -1)
  }
}
