export class Profession {
  id: string
  name: string
  specializations: Specialization[]
}

export class Specialization {
  id: string
  name: string
  profession: string
  elite: boolean
  icon: string
  background: string
  traits: Trait[]
}

export class Trait {
  id: string
  name: string
  icon: string
  description: string
  tier: number
  order: number
  slot: string
  specialization: number
}
