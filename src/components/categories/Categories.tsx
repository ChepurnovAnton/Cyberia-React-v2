import CategoriesItem from '../categoriesItem/CategoriesItem'
import styles from './Categoris.module.scss'
import { categories } from '../../data/categories'

const Categories: React.FC = (): JSX.Element => {
  return (
    <section className={styles.categories}>
      <ul className={styles.categories_list}>
        {categories.map(categoriesItem => (
          <li key={categoriesItem.id}>
            <CategoriesItem value={categoriesItem.name} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categories
