import styles from './Checkbox.module.scss'
import { useState } from 'react'

interface ICheckboxProps {
  children: string
}

const Checkbox: React.FC<ICheckboxProps> = ({ children }): JSX.Element => {
  const [checked, setChecked] = useState(false)
  return (
    <label className={styles.checkbox_wripper}>
      <input
        type='checkbox'
        className={styles.checkbox_element}
        onChange={() => setChecked(!checked)}
      />
      <span
        className={styles.custom_checkbox}
      ></span>
      {checked && (
        <span
          className={styles.custom_checkbox2}
        ></span>
      )}
      <p className={styles.text} >
        {children}
      </p>
    </label>
  )
}

export default Checkbox
