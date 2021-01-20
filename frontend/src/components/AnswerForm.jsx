import styles from './styles.js'
const AnswerForm = (props) => {
  return (
    <form onSubmit={props.handleAnswer}>
      <input type='text' name='answer' className={styles.input} /> <br />
      <button className={styles.btn}>Ответить</button>
      <button onClick={props.toggleWindow} className={styles.btn}>Пропустить</button>
    </form>
  );
}

export default AnswerForm;
