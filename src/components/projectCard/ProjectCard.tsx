import styles from './ProjectCard.module.scss'

interface IProjectCardProps {
  image: string
  title: string
  description: string
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  image,
  title,
  description
}): JSX.Element => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <img className={styles.card_image} src={image} alt='проект' />
        <div className={styles.decsription}>
          <img
            src='public/img/element-project-card-mobile.svg'
            alt='элемент карточки проекта'
            width={25}
            height={25}
          />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.decsription_mobile}>
          <img
            src='public/img/element-project-card-mobile.svg'
            alt='элемент карточки проекта'
            width={25}
            height={25}
          />
          <h2 className={styles.title_mobile}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
