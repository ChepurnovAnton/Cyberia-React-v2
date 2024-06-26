import styles from './Cases.module.scss'
import Categories from '../../components/categories/Categories'
import Projects from '../../components/projects/Projects'
import FormBlock from '../../components/formBlock/FormBlock'
const CasesPage: React.FC = (): JSX.Element => {
  return (
    <>
      <main>
        <h1 className={styles.title}>Кейсы</h1>
        <Categories />
        <Projects />
        <FormBlock />
      </main>
    </>
  )
}

export default CasesPage
