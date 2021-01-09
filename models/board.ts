export interface Board {
  id: number
  name: string
  isPrivate: boolean
  userId: number
}

export interface BoardAdd {
  name: string
  isPrivate: boolean
}