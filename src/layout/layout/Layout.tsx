import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss'
import HeaderMobile from '../headerMobile/HeaderMobile'
import BurgerMenu from '../../components/burgerMenu/BurgerMenu'
import { useState } from 'react'

const Layout = ({ children }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  return (
    <div className={styles.layout}>
      {isActiveMenu && <BurgerMenu setIsActiveMenu={setIsActiveMenu} />}
      <Header />
      <HeaderMobile setIsActiveMenu={setIsActiveMenu} />
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
