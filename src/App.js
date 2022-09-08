import React, { useEffect, useState } from 'react'
import logo from './assets/cjg-logo.jpeg'
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

  const updateLocal = (rankings) => {
    localStorage.setItem("leaderboard", JSON.stringify(rankings));
    const newRanks = [...rankings]
    setRankings(newRanks);
  }

  const addToLeaderboard = (description, calculation) => {
    const entry = {}
    entry.description = description;
    entry.calculation = calculation;
    const leaderboardData = JSON.parse(localStorage.getItem("leaderboard"));
    leaderboardData.push(entry);
    updateLocal(leaderboardData);
    setRankings(leaderboardData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ramp Travel Index Calculator</h1>
      </header>
      <main>
        <Calculation addToLeaderboard={addToLeaderboard} />
        <Leaderboard rankings={rankings} updateLocal={updateLocal} />
      </main>
    </div>
  );
}

export default App;
