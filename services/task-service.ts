import { Task, TaskAdd } from "models/task"
import { URL_TASK, axiosCookie } from "../constants/axios-cookie"

export class TaskService {
  static getById(id: number) {
    return axiosCookie.get<Task>(URL_TASK + id)
  }

  static add(task: TaskAdd) {
    return axiosCookie.post<void>(URL_TASK, task)
  }

  static update(id: number, task: TaskAdd) {
    return axiosCookie.put<void>(URL_TASK + id, task)
  }

  static delete(id: number) {
    return axiosCookie.delete<void>(URL_TASK + id)
  }
}
