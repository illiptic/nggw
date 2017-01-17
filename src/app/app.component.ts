import { Component } from '@angular/core'

import { Account } from './account/account.model'
import { AccountService } from './account/account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getAccount()
  }

  username: string


  getAccount(): void {
    this.accountService.getAccount()
      .subscribe((data) => {
        this.username = data.name.split('.').shift()
      })
  }
}
