import { Component, Input } from '@angular/core';

import { Character } from '../character/character.model'
import { CharacterService } from '../character/character.service'

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {

  @Input() character: Character
  equipment: {[id: string]: any}

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    let char = this.character
    this.characterService.getCharacterItems(char.name)
      .subscribe(equipment => {
        console.log(char.equipment)
        this.equipment = equipment
      })
  }

  equipmentBackground(profession: string): string {
    return 'url(/assets/professions/' + profession.toLowerCase() + '.jpg)'
  }

  getItems(category: string): any {
    return this.slots[category].map((slot) => {
      let piece = this.character.equipment.filter((piece) => {
        return piece.slot === slot
      })[0]
      return piece ? this.equipment[piece.id] : null
    })
  }

  slots: {[category: string]: Array<string>} =  {
    armor: [
      'Helm',
      'Shoulders',
      'Coat',
      'Gloves',
      'Leggings',
      'Boots'
    ],
    accessories: [
      'Amulet',
      'Backpack',
      'Accessory1',
      'Accessory2',
      'Ring1',
      'Ring2'
    ],
    aquatic: [
      'HelmAquatic',
      'WeaponAquaticA',
      'WeaponAquaticB'
    ],
    weapons: [
      'WeaponA1',
      'WeaponA2',
      'WeaponB1',
      'WeaponB2'
    ],
    tools: [
      'Sickle',
      'Axe',
      'Pick'
    ]
  }

}
