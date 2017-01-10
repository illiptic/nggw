import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterComponent } from './characters/character.component'

import { ApiService } from './services/api.service'
import { AccountService } from './account/account.service'
import { CharacterService } from './characters/character.service'
import { ProfessionService } from './professions/profession.service'

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, AccountService, CharacterService, ProfessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
