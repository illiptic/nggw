import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService } from './services/api.service'
import { AccountService } from './account/account.service'
import { CharacterService } from './characters/character.service'
import { ProfessionService } from './professions/profession.service';

import { AppComponent } from './app.component';
import { CharacterComponent } from './characters/character.component'
import { MenuComponent } from './common/menu/menu.component'

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    MenuComponent
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
