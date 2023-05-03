import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);
  // console.log(color);

  // set user color input

  const [inputColor, setInputColor] = useState();
  // console.log(inputColor);
  const [inputLumi, setInputLumi] = useState();

  const hueColorInput = randomColor({
    hue: inputColor,
    luminosity: inputLumi,
  });
  // console.log('this is a', hueColorInput, 'color from user input!');
  // console.log('input color is: ', inputColor, hueColor.hue);

  // const [userBackgroundColor, setUserBackgroundColor] = useState();

  return (
    <div className="App">
      <div style={{ background: color, position: 'relative' }}>
        <p>{color}</p>
        <div className="inner">
          <button className="btn" onClick={() => setColor(randomColor)}>
            +
          </button>
          <form
            className="form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input
              className="inp"
              style={{
                textAlign: 'center',
                // background: hueColorInput,
              }}
              placeholder="your favorite color"
              value={inputColor}
              onChange={(event) => {
                setInputColor(event.currentTarget.value);
                // console.log('hello');
              }}
            />
          </form>
          <button
            className="btn2"
            onClick={() => {
              setColor(inputColor);
            }}
          >
            check
          </button>
        </div>
      </div>
    </div>
  );
}
