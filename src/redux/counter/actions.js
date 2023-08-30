import {
  counter_decrement,
  counter_increment,
  counter_increment_by_amount,
} from './actionTypes';

export const incrementCounter = () => ({
  type: counter_increment,
});

export const decrementCounter = () => ({
  type: counter_decrement,
});

export const incrementCounterByAmount = (value) => ({
  type: counter_increment_by_amount,
  payload: value,
});
