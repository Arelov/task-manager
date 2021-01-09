import type { AppProps } from "next/app"
import "styles/main.css"
import "styles/bootstrap-reboot.css"
import React from "react"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "reducers/rootReducer"
import { Provider } from "react-redux"
import Head from "next/head"
import { Router } from "components/router"

const store = createStore(rootReducer, composeWithDevTools())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>My page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Router>
        <Component {...pageProps} />
      </Router>
    </Provider>
  )
}

export default MyApp
