// import styles from './CasesPage.module.scss'
// import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Categories from '../../components/categories/Categories'
import Projects from '../../components/projects/Projects'
// import FormBlock from '../../components/formBlock/FormBlock'
// import { useState } from 'react'

const CasesPage: React.FC = (): JSX.Element => {
  // const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)
  return (
    <>
      {/* <Breadcrumbs /> */}
      <main>
        {/* <h1 className={styles.title}>Кейсы</h1> */}
        <Categories />
        <Projects />
        {/* <FormBlock /> */}
      </main>
    </>
  )
}

export default CasesPage
