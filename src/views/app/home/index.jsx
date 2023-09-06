import React from 'react';
import { useDispatch } from 'react-redux';
import * as counterActions from '../../../redux/counter/actions';
import withExampleContent from '../../../containers/withExampleContent';

function Home(props) {
  console.log('Home props:', props);
  const dispatch = useDispatch();

  return (
    <>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(counterActions.incrementCounter())}
      >
        Increment
      </button>
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(counterActions.decrementCounter())}
      >
        Decrement
      </button>
      <button
        aria-label='IncrementByAmount value'
        onClick={() => dispatch(counterActions.incrementCounterByAmount(2))}
      >
        Increment by amount of 2
      </button>
    </>
  );
}

export default withExampleContent(Home);
