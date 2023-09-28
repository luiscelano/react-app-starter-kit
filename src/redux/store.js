import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/reducer'
const setupStore = (preloadedState) => {
  return configureStore({
    reducer: {
      counter: counterReducer
    },
    preloadedState
  })
}

export default setupStore
