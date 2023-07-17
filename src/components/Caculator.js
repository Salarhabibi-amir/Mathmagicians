const Calculator = () => (
  <div className="calc-containner">
    <input type="text" className="inputfield" value={0} />
    <div className="calc-btn-grid">
      <button type="button" className="btn btn-number">AC</button>
      <button type="button" className="btn btn-number">+/-</button>
      <button type="button" className="btn btn-number">%</button>
      <button type="button" className="btn btn-sign">/</button>
      <button type="button" className="btn btn-number">7</button>
      <button type="button" className="btn btn-number">8</button>
      <button type="button" className="btn btn-number">9</button>
      <button type="button" className="btn btn-sign">X</button>
      <button type="button" className="btn btn-number">4</button>
      <button type="button" className="btn btn-number">5</button>
      <button type="button" className="btn btn-number">6</button>
      <button type="button" className="btn btn-sign">-</button>
      <button type="button" className="btn btn-number">1</button>
      <button type="button" className="btn btn-number">2</button>
      <button type="button" className="btn btn-number">3</button>
      <button type="button" className="btn btn-sign">+</button>
      <button type="button" className="btn btn-number btn-zero">0</button>
      <button type="button" className="btn btn-number">.</button>
      <button type="button" className="btn btn-sign">+</button>
    </div>
  </div>
);
export default Calculator;
