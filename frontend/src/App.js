import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import EnterPlayersNames from "./components/EnterPlayersNames";
import GameTable from './components/GameTable'
import { Route } from 'react-router-dom'
import Accounts from "./components/Accounts";
function App() {
  const [teams, setTeams] = useState({})
  useEffect(() => { console.log('From App.js', teams) }, [teams])
  return (
    <div>
      <Header teams={teams} />
      {teams && teams.team1 ?
        <Route exact path='/' component={() =>
          <GameTable teamsHandler={setTeams} />} /> :
        <Route exact path='/' component={() =>
          <EnterPlayersNames teamsHandler={setTeams} />} />
      }
      <Route path='/accounts' component={() =>
        <Accounts teams={teams} />} />
    </div>
  );
}
export default App;
