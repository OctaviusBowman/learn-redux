import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

function App() {
  const counterReducer = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counterReducer}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
