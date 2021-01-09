export interface Task {
  id: number
  name: string
  content: string
  position: number
  columnId: number
}

export interface TaskAdd {
  name: string
  content: string
  position: number
  columnId: number
}