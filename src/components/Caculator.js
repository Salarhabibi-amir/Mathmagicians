import React, { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prop-types
const MyInput = ({ value }) => (
  <input type="text" className="inputfield" value={value} readOnly />
);

// eslint-disable-next-line react/prop-types
const MyBtn = ({ onClick }) => (
  <div className="calc-btn-grid ">
    <button type="button" className="btn btn-number" onClick={() => onClick('AC')}>
      AC
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('+/-')}>
      +/-
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('%')}>
      %
    </button>
    <button type="button" className="btn btn-sign" onClick={() => onClick('/')}>
      /
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('7')}>
      7
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('8')}>
      8
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('9')}>
      9
    </button>
    <button type="button" className="btn btn-sign" onClick={() => onClick('x')}>
      X
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('4')}>
      4
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('5')}>
      5
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('6')}>
      6
    </button>
    <button type="button" className="btn btn-sign" onClick={() => onClick('-')}>
      -
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('1')}>
      1
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('2')}>
      2
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('3')}>
      3
    </button>
    <button type="button" className="btn btn-sign" onClick={() => onClick('+')}>
      +
    </button>
    <button type="button" className="btn btn-number btn-zero" onClick={() => onClick('0')}>
      0
    </button>
    <button type="button" className="btn btn-number" onClick={() => onClick('.')}>
      .
    </button>
    <button type="button" className="btn btn-sign" onClick={() => onClick('=')}>
      =
    </button>
  </div>
);

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="calc-containner">
      <MyInput value={state.next || state.total || '0'} />
      <MyBtn onClick={handleClick} />
    </div>
  );
};

export default Calculator;
