import { useState, useEffect } from 'react';
import styles from './styles'
const Accounts = ({ teams }) => {
  const [content, setContent] = useState()

  useEffect(() => {
    (async () => {
      const req = await fetch('http://localhost:3001/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ team1: teams.team1, team2: teams.team2 })
      });
      const res = await req.json();
      setContent(res)
    })();
  }, [])

  return (
    <div>
      <a href='/'><button className={styles.btn + ' w-full'}>Выйти</button></a>
      <div className=' mx-8 p-4 grid grid-cols-2 text-xl'>
        <div className='bg-indigo-700 p-4 mx-1 text-center'>
          <h2 className='font-bold'>Команда 1: {content?.team1?.name}</h2>
          <p className='text-yellow-200 font-bold'>Количество баллов: {content?.team1?.rating}</p>
          {content?.team1?.rounds.map((el, ind) =>
            <div className='border-2 border-indigo-900 rounded-md my-2 hover:bg-indigo-500'>
              <li key={`1_${ind}`}>Соперник: {el.enemy}</li>
          Рейтинг данной команды: {el.myRating} <br />
          Рейтинг соперника: {el.enemyRating}
            </div>
          )}
        </div>
        <div className='bg-indigo-700 p-4 mx-1 text-center'>
          <h2 className='font-bold'>Команда 2: {content?.team2?.name}</h2>
          <p className='text-yellow-200 font-bold'>Количество баллов: {content?.team2?.rating}</p>
          {content?.team2?.rounds.map((el, ind) =>
            <div className='border-2 border-indigo-900 rounded-md my-2 hover:bg-indigo-500'>
              <li key={`2_${ind}`}>Соперник: {el.enemy}</li>
          Рейтинг данной команды: {el.myRating} <br />
          Рейтинг соперника: {el.enemyRating}
            </div>
          )}
        </div>
      </div>
    </div >

  );
}

export default Accounts;
