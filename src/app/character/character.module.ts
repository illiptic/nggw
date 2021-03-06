import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component'
import { CharacterDetailComponent } from '../character-detail/character-detail.component'
import { EquipmentComponent } from '../equipment/equipment.component'

const routes: Routes = [
  {
    path: 'characters',
    component: CharacterComponent,
    children: [
      {
        path: ':id',
        component: CharacterDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EquipmentComponent,
    CharacterDetailComponent,
    CharacterComponent
  ]
})
export class CharacterModule { }
