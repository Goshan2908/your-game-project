import React, { useState, useEffect } from 'react';
import styles from './styles'
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { updateGameAction } from '../redux/rootReducer'

const Square = ({ data, active }) => {
  useEffect(() => {
    if (!active) {
      setStyle(styles.checked);
      setAvailable(active);
    }
  }, [])
  const [available, setAvailable] = useState(active)
  const [style, setStyle] = useState(styles.active)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch();

  const toggleWindow = () => {
    setShowModal(false)
  }
  const handleClick = (id) => {
    setShowModal(true);
    setAvailable(active);
    dispatch(updateGameAction(id))
    setStyle(styles.checked);
  }

  return (<div className={style} onClick={available ? () => { handleClick(data._id) } : (() => { })}>
    {data.value}
    {showModal ? <Modal toggleWindow={toggleWindow} data={data} /> : ''}
  </div>);
}

export default Square;
