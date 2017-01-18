import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { ApiService } from './services/api.service'
import { AccountService } from './account/account.service'

import { CharacterService } from './character/character.service'
import { ProfessionService } from './professions/profession.service'

import { AppComponent } from './app.component'
import { MenuComponent } from './common/menu/menu.component'

import { AppRoutingModule } from './app-routing.module'
import { CharacterModule } from './character/character.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CharacterModule
  ],
  providers: [ApiService, AccountService, CharacterService, ProfessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
