import styles from './Navigation.module.scss'
import { navigations } from '../../data/navigation'
import { Link } from 'react-router-dom'

const Navigation: React.FC = (): JSX.Element => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {navigations.map(nav => (
          <li key={nav.id}>
            <Link to={nav.pathName} className={styles.navigation_element}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
