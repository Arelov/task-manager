import { Column, ColumnAdd } from "models/column"
import { URL_COLUMN, axiosCookie } from "../constants/axios-cookie"

export class ColumnService {
  static getById(id: number) {
    return axiosCookie.get<Column>(URL_COLUMN + id)
  }

  static add(column: ColumnAdd) {
    return axiosCookie.post<void>(URL_COLUMN, column)
  }

  static update(id: number, column: ColumnAdd) {
    return axiosCookie.put<void>(URL_COLUMN + id, column)
  }

  static delete(id: number) {
    return axiosCookie.delete<void>(URL_COLUMN + id)
  }
}
