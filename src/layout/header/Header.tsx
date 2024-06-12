import Navigation from '../../components/navigation/Navigation'
import Logo from '../../icons/Logo'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
