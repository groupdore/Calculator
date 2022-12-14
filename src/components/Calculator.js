import React, {useState} from 'react';

function Calculator() {
	const [value, setValue] = useState(0);
	const [result, setResult] = useState(0);

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setResult(value * 2);
	}


	return (
		<div>
		<div className="calculator">
		<div className="calculator__display">0</div>
		<div className="calculator__keys">
		<button className="calculator__key calculator__key--operator" value="+">+</button>
		<button className="calculator__key calculator__key--operator" value="-">-</button>
		<button className="calculator__key calculator__key--operator" value="*">&times;</button>
		<button className="calculator__key calculator__key--operator" value="/">&divide;</button>
		<button className="calculator__key" value="7">7</button>
		<button className="calculator__key" value="8">8</button>
		<button className="calculator__key" value="9">9</button>
		<button className="calculator__key" value="4">4</button>
		<button className="calculator__key" value="5">5</button>
		<button className="calculator__key" value="6">6</button>
		<button className="calculator__key" value="1">1</button>
		<button className="calculator__key" value="2">2</button>
		<button className="calculator__key" value="3">3</button>
		<button className="calculator__key calculator__key--operator" value="=">=</button>
		<button className="calculator__key" value="0">0</button>
		<button className="calculator__key calculator__key--decimal" value=".">.</button>
		</div>
		</div>
		</div>
	);
}
export default Calculator;
