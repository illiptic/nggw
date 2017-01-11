import { Injectable } from '@angular/core';
import { Skill } from './skill.model'
import { ApiService } from '../services/api.service'

@Injectable()
export class SkillService {

  constructor(private api: ApiService) { }

  getSkills(): Promise<Skill[]> {
    return this.api
      .get('skills')
      .then(response => {
        return response as string[]
      })
      .then(ids => {
        return this.api.get('skills?ids=' + ids.join(','))
      })
      .then(skills => {
        return skills as Skill[]
      })
  }
}
