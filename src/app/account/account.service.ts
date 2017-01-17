import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account.model'
import { ApiService } from '../services/api.service'

@Injectable()
export class AccountService {

  constructor(private api: ApiService) { }

  getAccount(): Observable<Account> {
    return this.api
      .get('account')
      .map(response => {
        return response as Account
      })
  }
}
