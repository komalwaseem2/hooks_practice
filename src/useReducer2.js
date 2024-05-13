import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { isOn: !state.isOn };
    default:
      return state;
  }
};

const ToggleButton = () => {
  const [state, dispatch] = useReducer(reducer, {isOn: false});

  return (
    <div>
      <p>The toggle is {state.isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => dispatch({ type: 'toggle' })}>
        {state.isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  );
};

export default ToggleButton;
