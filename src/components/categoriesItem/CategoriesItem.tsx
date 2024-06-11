import React from 'react'
import styles from './CategoriesItem.module.scss'

interface ICategoriesItemProps {
  value: string
}

const CategoriesItem: React.FC<ICategoriesItemProps> = ({
  value
}): JSX.Element => {
  return <button className={styles.categoryElement}>{value}</button>
}

export default CategoriesItem
