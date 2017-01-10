import { Injectable } from '@angular/core';
import { Account } from './account.model'
import { ApiService } from '../services/api.service'

@Injectable()
export class AccountService {

  constructor(private api: ApiService) { }

  getAccount(): Promise<Account> {
    return this.api
      .get('account')
      .then(response => {
        return response as Account
      })
  }
}
