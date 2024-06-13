import Button from '../ui/button/Button'
import styles from './FormMobile.module.scss'
import InputMobile from '../ui/inputMobile/InputMobile'
import { inputs } from '../../data/inputs'
// import SuccessfulForm from '../ui/successfulForm/SuccessfulForm'

const FormMobile = () => {
  return (
    <form className={styles.form}>
      {inputs.map(item => (
        <InputMobile key={item.id} placeholder={item.placeholder} />
      ))}
      <Button value='Отправить' className={styles.button_forms_mobile} />
      <p className={styles.notification}>
        Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
      </p>
      {/* <SuccessfulForm /> */}
    </form>
  )
}

export default FormMobile

