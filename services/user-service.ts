import { URL_USER, axiosCookie } from "../constants/axios-cookie"
import { User, UserAdd, Login } from "../models/user"

export class UserService {
  static login(login: Login) {
    return axiosCookie.post<User>(URL_USER + "login", login)
  }

  static logout() {
    return axiosCookie.post<void>(URL_USER + "logout")
  }
  
  static getById(id: number) {
    return axiosCookie.get<User>(URL_USER + id)
  }

  static get() {
    return axiosCookie.get<User>(URL_USER)
  }

  static add(user: UserAdd) {
    return axiosCookie.post<void>(URL_USER, user)
  }

  static update(user: UserAdd) {
    return axiosCookie.put<void>(URL_USER, user)
  }
}
