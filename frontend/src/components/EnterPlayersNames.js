import { useDispatch } from 'react-redux'
import styles from "./styles";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function EnterPlayersNames(props) {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(true)
  const authHandler = async (e) => {
    e.preventDefault()
    const req = await fetch('http://localhost:3001/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        team1: e.target.team1.value,
        team2: e.target.team2.value,
      })
    });
    const res = await req.json()
    dispatch({
      type: 'AUTH',
      payload: res
    });
    props.teamsHandler(res)
    setAuth(false)
  }
  if (auth) {
    return (
      <form onSubmit={authHandler} className={styles.auth}>
        <input className={styles.input} placeholder="Название первой команды" name="team1" />
        <input className={styles.input} placeholder="Название второй команды" name="team2" />
        <button className={styles.btn}>Войти</button>
      </form>
    );
  } else {
    return (<div className={styles.auth}>
      <NavLink to='/game' className={styles.btn}>Перейти в игру</NavLink>
    </div>
    )
  }
}
export default EnterPlayersNames;
