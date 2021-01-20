import styles from "./styles";
import logo from './logo.svg'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
function Header() {
  const reduxState = useSelector((state) => state)
  const [activeClass, setActiveClass] = useState({ team1: '', team2: '' })
  useEffect(() => {
    reduxState.isTeam1Active ? setActiveClass({ team1: 'bg-yellow-600 rounded-md', team2: '' }) : setActiveClass({ team1: '', team2: 'bg-yellow-500 rounded-md' })
  }, [reduxState.isTeam1Active])
  return (
    <div className={styles.header}>
      <NavLink to='/'>{reduxState.team1 ? 'Main' : ''}</NavLink>
      <div className={activeClass.team1}>{reduxState?.team1 ? `${reduxState.team1}  :  ${reduxState.rating1}` : ''}</div>
      <div>
        <img src={logo} className='h-20' alt="" />
      </div>
      <div className={activeClass.team2}>{reduxState?.team2 ? `${reduxState.team2}  :  ${reduxState.rating2}` : ''}</div>
      <NavLink to='/accounts'>{reduxState.team1 ? 'Account' : ''}</NavLink>
    </div>
  );
}
export default Header;
