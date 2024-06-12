import styles from './InputMobile.module.scss'

const InputMobile: React.FC = () => {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <input className={styles.input} placeholder='Ваше имя*'/>
      </fieldset>
    </>
  )
}

export default InputMobile
