import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { APP_USER } from "actions/actionTypes"
import { axiosCookie, URL_USER } from "constants/axios-cookie"
import { AuthorizationPage } from "pages/authorization"
import { IAppState } from "reducers/appReducer"
import { IState } from "reducers/rootReducer"

export function Router({ children }: any) {
  const dispatch = useDispatch()
  let allowed = true
  const router = useRouter()
  const appState = useSelector<IState, IAppState>((e) => e.app)

  if (
    appState.user === null &&
    (router.pathname.startsWith("/task") ||
      router.pathname.startsWith("/admin") ||
      router.pathname.startsWith("/cabinet") ||
      router.pathname.startsWith("/partners") ||
      router.pathname.startsWith("/tasks") ||
      router.pathname.startsWith("/history") ||
      router.pathname === "/" ||
      router.pathname.startsWith("/deposits"))
  ) {
    allowed = false
  }

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const { data: user } = await axiosCookie.get(URL_USER)
        dispatch({ type: APP_USER, payload: user })
      } catch (err) {}
    }
    asyncFunc()
  }, [])
  return allowed ? children : <AuthorizationPage />
}
