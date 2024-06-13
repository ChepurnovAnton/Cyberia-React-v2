import Input from '../ui/input/Input'
import Checkbox from '../ui/checkbox/Checkbox'
import Button from '../ui/button/Button'
import styles from './Form.module.scss'
import { inputs } from '../../data/inputs'

const Form = () => {
  return (
    <form className={styles.form}>
      {inputs.map(item => (
        <Input key={item.id} legend={item.legend} />
      ))}
      <div className={styles.checkbox}>
        <Checkbox>Согласие на обработку персональных данных</Checkbox>
      </div>
      <Button value='Обсудить проект' className={styles.button_forms} />
      {/* <SuccessfulForm /> */}
    </form>
  )
}

export default Form
