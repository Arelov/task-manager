import { APP_USER } from "actions/actionTypes"

interface IAction {
  type: string
  payload: any
}

export interface IUser {
  id: number
  name: string
  email: string
  money: number
  admin: boolean
  agitatorId: number
  date: string
}

export interface IAppState {
  user: IUser | null
}

const initialState = {
  user: null
}

const appReducer = (state: IAppState = initialState, action: IAction) => {
  switch (action.type) {
    case APP_USER:
      return { ...state, user: action.payload }
    default:
      return initialState
  }
}

export { appReducer }
