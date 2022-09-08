import React, { useEffect, useState } from 'react'
import logo from './cjg-logo.jpeg';
import { Calculation } from './components/Calculation';
import { Leaderboard } from './components/Leaderboard';
import './App.css';

function App() {

  const [ rankings, setRankings ] = useState([]);

  useEffect(() => {
    if(!localStorage.getItem("leaderboard")){
      localStorage.setItem("leaderboard", JSON.stringify([]))
    }
    setRankings(JSON.parse(localStorage.getItem("leaderboard")))
  }, []);

  const addToLeaderboard = (description, calculation) => {
    const entry = {}
    entry.description = description;
    entry.calculation = calculation;

    const leaderboardData = JSON.parse(localStorage.getItem("leaderboard"));
    leaderboardData.push(entry);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboardData));

    setRankings(leaderboardData)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Ramp Travel Index Calculator</h1>
      </header>
      <main>
        <Calculation addToLeaderboard={addToLeaderboard} />
        <Leaderboard rankings={rankings} />
      </main>
    </div>
  );
}

export default App;
