import { useState } from 'react'
import AnswerForm from './AnswerForm'
import styles from './styles.js'
import { useDispatch } from 'react-redux'
import { updateAction } from '../redux/rootReducer'
const Modal = (props) => {
  const [result, setResult] = useState('')
  const dispatch = useDispatch();
  const handleAnswer = (e) => {
    e.preventDefault()
    if (e.target?.answer.value === props.data?.answer) {
      setResult('Правильный ответ')
      dispatch(updateAction(props.data.value));
    } else {
      setResult('Неверно, правильный ответ: ')
      dispatch(updateAction(0));
    }
  }
  return (<div className='modal'>
    <div className='modal-content'>
      {result ? `${result}:${props.data.answer}` : props.data.question}<br />
      {result ? <button className={styles.btn} onClick={props.toggleWindow}>Закрыть</button> :
        <AnswerForm handleAnswer={handleAnswer} toggleWindow={props.toggleWindow} />}
    </div>
  </div >);
}

export default Modal;
