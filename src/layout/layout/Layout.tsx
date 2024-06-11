import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout
