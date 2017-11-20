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
  itemsByCategory: any
  displayDetails: any

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.itemsByCategory = {}
    Object.keys(this.slots).forEach(cat => {
      this.itemsByCategory[cat] = this.slots[cat].map(slot => null)
    })
  }

  ngOnChanges() {
    let char = this.character
    this.characterService.getCharacterItems(char.name)
      .subscribe(equipment => {
        this.equipment = equipment
        Object.keys(this.slots).forEach((cat) => {
          this.itemsByCategory[cat] = this.getItems(cat)
        })
      })
  }

  equipmentBackground(profession: string): string {
    return 'url(/assets/professions/' + profession.toLowerCase() + '.jpg)'
  }

  showDetails(item, e) {
    if (item) {
      this.displayDetails = {
        item,
        x: (e.target.offsetLeft + 60) + 'px',
        y: (e.target.offsetTop) + 'px'
      }
    } else {
      this.displayDetails = null
    }
  }

  hideDetails() {
    this.displayDetails = null
  }

  getItems(category: string): any {
    return this.slots[category].map((slot) => {
      let piece = this.character.equipment.filter((piece) => {
        return piece.slot === slot
      })[0]
      return piece ? Object.assign({}, this.equipment[piece.id], piece) : null
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
