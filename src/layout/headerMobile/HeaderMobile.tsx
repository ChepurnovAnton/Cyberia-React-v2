import Logo from '../../icons/Logo'
import MenuBurger from '../../icons/MenuBurger'
import styles from './HeaderMobile.module.scss'
const HeaderMobile = ({ setIsActiveMenu }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <MenuBurger onClick={() => setIsActiveMenu(true)} />
    </header>
  )
}

export default HeaderMobile
