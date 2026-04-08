import type { MouseEvent } from 'react'

import aiChatbotImage from '../assets/AI.jpg'
import orbitImage from '../assets/orbit.jpg'
import solarbuddyImage from '../assets/solarbuddy1.jpg'

const projectGallery = [
  {
    title: 'AI chatbot',
    description:
      'A chatbot built with modern AI technologies.',
        tools: ['ChatGPT (OpenAI)', 'VITE', 'React', 'Tailwind CSS'],
    image: aiChatbotImage,
        link: 'https://pipaipoy.web.app/',
  },
  {
    title: 'SolarBuddy',
    description:
      'A mobile-based system that is connected to solar panel and data based from weather forecasts.',
    tools: ['Flutter', 'React Native', 'Firebase'],
    image: solarbuddyImage,
      link: 'https://solarbuddy-16093.web.app//',
  },
  {
    title: 'ORBIT',
    description:
      'A Library management system for UIC library digitalization.',
    tools: ['Interactive Web App', 'Community', 'School Project'],
    image: orbitImage,
    link: 'https://orbit.uic.edu.ph/',
  },
]

function Projects() {
  const handleCardMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    const rotateY = (px - 0.5) * 10
    const rotateX = (0.5 - py) * 8

    card.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`)
    card.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`)
    card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }

  const handleCardLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    const card = event.currentTarget
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
    card.style.setProperty('--mx', '50%')
    card.style.setProperty('--my', '50%')
  }

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="projects-heading-wrap">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            A focused selection of three projects. Click a project card to open
            it.
          </p>
        </div>

        <div className="projects-grid" aria-label="Featured project collection">
          {projectGallery.map((project, index) => (
            <a
              key={`${project.link}-${index}`}
              className="project-card project-link-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
            >
              <span className="project-card-number">{`0${index + 1}`}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-thumbnail">
                <img
                  className="project-thumb-image"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="project-tools">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
