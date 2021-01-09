export interface Login {
  email: string
  password: string
}

export interface User {
  id: number
  name: string
  email: string
  isAdmin: boolean
}

export interface UserAdd {
  name: string
  email: string
  password: string
}
