import ProjectCard from '../projectCard/ProjectCard'
import styles from './Projects.module.scss'
import { projects } from '../../data/projects'

const Projects: React.FC = (): JSX.Element => {
  return (
    <section className={styles.projects}>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  )
}

export default Projects
