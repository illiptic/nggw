import { Component, Input } from '@angular/core'
import { Character } from './character.model'
import { Profession } from '../professions/profession.model'

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent {

  @Input() character: Character
  @Input() profession: Profession

  constructor(
  ) {}

  ngOnInit(): void {

  }

}
