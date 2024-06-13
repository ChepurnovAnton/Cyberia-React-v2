import styles from './InputMobile.module.scss'

const InputMobile: React.FC = ({ placeholder }) => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <input className={styles.input} placeholder={placeholder} />
      </fieldset>
    </>
  )
}

export default InputMobile
