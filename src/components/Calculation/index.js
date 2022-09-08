import React, { useState } from 'react'
import logo from '../../cjg-logo.jpeg';
import './index.css';

export function Calculation ({addToLeaderboard}) {

  const [ distance, setDistance ] = useState(0);
  const [ wheelbase, setWheelbase ] = useState(0);
  const [ description, setDescription ] = useState('');
  const [ calculation, setCalculation ] = useState(0);

  const handleSubmit = (e) => {
    addToLeaderboard(description, calculation);
    emptyForm();
  }

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

  const emptyForm = () => {
    setDistance(0)
    setWheelbase(0)
    setDescription('');
    setCalculation(0);
  }

  const clearInput = (event) => {
    if (event.target.name === 'distance') {
      setDistance('')
    }
    if (event.target.name === 'wheelbase') {
      setWheelbase('')
    }
  }


  return (
    <div className="Calculation">

      <div className="Calculation-display">
        {calculation > 0 &&
          <>
            <h2>{calculation}</h2>
            <small>RTI score based on a 20 degree ramp</small>
          </>
        }

        {calculation === 0 &&
          <h3>Fill out form to retrieve RTI calculation</h3>
        }     
      </div>

      <div>
          <div className="Calculation-input">
            <label htmlFor="description">Vehicle Description:</label>
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value) }/>
          </div>

          <div className="Calculation-input">
            <label htmlFor="wheelbase">Wheelbase (in):</label>
            <input type="number" name="wheelbase" value={wheelbase} onSelect={clearInput} onChange={handleInput}/>
          </div>

          <div className="Calculation-input">
            <label htmlFor="distance">Distance (in):</label>
            <input type="number" name="distance" value={distance} onSelect={clearInput} onChange={handleInput}/>
          </div>
          
          <button onClick={handleSubmit} disabled={calculation === 0}>Submit to Leaderboard</button>
      </div>
    </div>
  );
}