import Input from '../ui/input/Input'
import Checkbox from '../ui/checkbox/Checkbox'
import Button from '../ui/button/Button'
import styles from './Form.module.scss'

const Form = () => {
  return (
    <form className={styles.form}>
      <Input />
      <Input />
      <Input />
      <Input />
      <div className={styles.checkbox}>
        <Checkbox>Согласие на обработку персональных данных</Checkbox>
      </div>

      <Button value='Обсудить проект' className={styles.button_forms} />
      {/* <Button value='Отправить' className={styles.button_forms_mobile} /> */}
      {/* <p className={styles.notification}>
        Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
      </p> */}
      {/* <SuccessfulForm /> */}
    </form>
  )
}

export default Form
