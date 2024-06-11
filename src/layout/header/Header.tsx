import Navigation from '../../components/navigation/Navigation'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src='public\img\icon.svg' alt='иконка' className={styles.logo}/>
      {/* <img
        // onClick={() => setIsActiveMenu(true)}
        className={styles.burger}
        src='public/img/Menu-burger.svg'
        alt='бургер меню'
      /> */}
      <Navigation />
    </header>
  )
}

export default Header
