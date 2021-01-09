import { Board, BoardAdd } from "models/board"
import { URL_BOARD, axiosCookie } from "../constants/axios-cookie"

export class BoardService {
  static getById(id: number) {
    return axiosCookie.get<Board>(URL_BOARD + id)
  }

  static getPrivate(id: number) {
    return axiosCookie.get<Board>(URL_BOARD + "private/" + id)
  }
  
  static add(board: BoardAdd) {
    return axiosCookie.post<void>(URL_BOARD, board)
  }

  static update(id: number, board: BoardAdd) {
    return axiosCookie.put<void>(URL_BOARD + id, board)
  }

  static delete(id: number) {
    return axiosCookie.delete<void>(URL_BOARD + id)
  }
}
