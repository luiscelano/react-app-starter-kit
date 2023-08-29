import { createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('counter/increment');
const decrement = createAction('counter/decrement');
const incrementByAmount = createAction('counter/incrementByAmount');

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
