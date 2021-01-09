export interface Column {
  id: number
  name: string
  position: number
  boardId: number
}

export interface ColumnAdd {
  name: string
  boardId: number
}