import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import setupStore from './redux/store'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import globalStyles from 'src/config/globalStyles'
import theme from 'src/config/theme'

const store = setupStore()

const GlobalStyle = createGlobalStyle`${globalStyles}`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
