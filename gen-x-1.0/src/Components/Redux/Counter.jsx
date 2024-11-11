// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count); // Access state
  const dispatch = useDispatch(); // Get dispatch function

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
