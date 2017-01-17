import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './skill.model'
import { ApiService } from '../services/api.service'

@Injectable()
export class SkillService {

  constructor(private api: ApiService) { }

  getSkills(): Observable<Skill[]> {
    return this.api
      .get('skills')
      .map(response => {
        return response as string[]
      })
      .flatMap(ids => {
        return this.api.get('skills?ids=' + ids.join(','))
      })
      .map(skills => {
        return skills as Skill[]
      })
  }
}
