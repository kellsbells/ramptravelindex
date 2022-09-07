import React, { useState } from 'react'
import logo from './cjg-logo.jpeg';
import './App.css';

function App() {

  const [ distance, setDistance ] = useState(0);
  const [ wheelbase, setWheelbase ] = useState(0);
  const [ calculation, setCalculation ] = useState(0);

  const handleInput = (event) => {
    let theDistance = distance;
    let theWheelbase = wheelbase;


    if (event.target.name === 'distance'){
      theDistance = event.target.value;
      setDistance(theDistance)
    }
    if(event.target.name === 'wheelbase'){
      theWheelbase = event.target.value;
      setWheelbase(theWheelbase);
    }
    
    if(distance && wheelbase){
      setCalculation(Math.floor(theDistance / theWheelbase * 1000));
    }
  }

  const clearInput = (event) => {
    if (event.target.name === 'distance') {
      setDistance('')
    }
    if (event.target.name === 'wheelbase') {
      setWheelbase('')
    }
    setCalculation(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ramp Travel Index Calculator</h1>
      </header>
      <main>
        <form className="App-form">
          <label>
            Wheelbase (in):
            <input type="number" name="wheelbase" value={wheelbase} onSelect={clearInput} onChange={handleInput} />
          </label>
          <label>
            Distance (in):
            <input type="number" name="distance" value={distance} onSelect={clearInput} onChange={handleInput}/>
          </label>
        </form>
        <div className="App-calc">
          {calculation > 0 &&
            <>
              <h2>{calculation}</h2>
              <small>Your RTI score based on a 20 degree ramp</small>
            </>
          }
          {calculation === 0 &&
            <h3>Fill out form to retrieve RTI calculation</h3>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
