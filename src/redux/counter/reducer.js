import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  counter_decrement,
  counter_increment,
  counter_increment_by_amount,
} from './actionTypes';

const increment = createAction(counter_increment);
const decrement = createAction(counter_decrement);
const incrementByAmount = createAction(counter_increment_by_amount);

const initialState = { value: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, __) => {
      state.value++;
    })
    .addCase(decrement, (state, __) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});

export default counterReducer;
