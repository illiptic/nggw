import { Component } from '@angular/core'

import { Profession } from './professions/profession.model'
import { ProfessionService } from './professions/profession.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private professionService: ProfessionService) {}

  ngOnInit(): void {
    console.log('init!')
    this.getProfessions()
  }

  title = 'app works!';
  professions: Profession[] = null

  getProfessions(): void {
    this.professionService.getProfessions()
      .then((data) => {
        console.log(data)
        this.professions = data
      })
  }
}
