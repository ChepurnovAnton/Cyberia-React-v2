import Button from '../ui/button/Button'
import styles from './FormMobile.module.scss'
import InputMobile from '../ui/inputMobile/InputMobile'

const FormMobile = () => {
  return (
    <form className={styles.form}>
      <InputMobile />
      <InputMobile />
      <InputMobile />
      <InputMobile />
      <Button value='Отправить' className={styles.button_forms_mobile} /> 
      <p className={styles.notification}>
        Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
      </p>
      {/* <SuccessfulForm /> */}
    </form>
  )
}

export default FormMobile
