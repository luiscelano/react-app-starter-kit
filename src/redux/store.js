import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
