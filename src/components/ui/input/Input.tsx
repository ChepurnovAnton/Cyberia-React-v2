import styles from './Input.module.scss'

const Input: React.FC = () => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{'your name'}*</legend>
        <input
          className={styles.input}
          placeholder={'placeholder'}
          />
      </fieldset>
    </>
  )
}

export default Input
