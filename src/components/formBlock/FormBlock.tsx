import Form from '../form/Form'
import styles from './FormBlock.module.scss'

const Forms = () => {
  return (
    <section className={styles.forms}>
      <div className={styles.title_wripper}>
        <img
          className={styles.icon}
          src='public\img\icon-forms.svg'
          alt='мобильная иконка в поле формы'
          width={76}
        />
        <h2 className={styles.title}>
          Расскажите <br /> о вашем проекте
        </h2>
      </div>
      <Form />
    </section>
  )
}

export default Forms
