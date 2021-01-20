import React, { useEffect } from 'react';
import Square from './Square'
import styles from './styles';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadGameAction, restartGameAction } from '../redux/rootReducer'

const GameTable = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const reactTeams = useSelector((state) => state)
  useEffect(() => {
    (async () => {
      const req = await fetch('http://localhost:3001/gameJson');
      const fetchedGame = await req.json();
      dispatch(loadGameAction(fetchedGame))
    })()
  }, [])
  const finishGame = async () => {
    fetch('http://localhost:3001/finish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reactTeams)
    }).then((data) => {
      dispatch(restartGameAction())
      history.push('/accounts')
    })
  }

  return (
    <div>
      {reactTeams.game?.map((theme, index) => {
        return (
          <div key={index} className={styles.grid}>
            <div className={styles.square}
              key={`t_${index}`}>{theme.collectionTitle}</div>
            {theme.questions.map((el, ind) => {
              if (!reactTeams.activated?.includes(el._id)) {
                return (<div key={`s_${ind}`} >
                  <Square data={el} active={true} />
                </div>)
              }
              return (<div key={`s_${ind}`} >
                <Square data={el} active={false} />
              </div>)
            })}
          </div>)
      })}
      <button className={styles.btn + ' w-full'} onClick={finishGame}>Finish game</button>
    </div>
  );
}


export default GameTable;
