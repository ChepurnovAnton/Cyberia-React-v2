import styles from './Input.module.scss'

const Input: React.FC = ({ legend }) => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{legend}*</legend>
        <input className={styles.input} />
      </fieldset>
    </>
  )
}

export default Input
