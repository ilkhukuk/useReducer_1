import { useReducer } from 'react';

const initialState = {
  users: [{ name: 'Ahmet' }],
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === 'ARTTIR') {
    return { count: state.count + 1 };
  }

  if (action.type === 'AZALT') {
    return { count: state.count - 1 };
  }

  if (action.type === 'SIFIRLA') {
    return { count: 0 };
  }
};

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'AZALT' })}>Azalt</button>
      <span className="count">{state.count}</span>
      <button onClick={() => dispatch({ type: 'ARTTIR' })}>Arttır</button>
      <button onClick={() => dispatch({ type: 'SIFIRLA' })}>Sıfırla</button>
    </div>
  );
};

export default Counter;
