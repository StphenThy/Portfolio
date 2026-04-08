import { useState } from 'react'
import type { WheelEvent } from 'react'

const aboutSlides = [
  {
    title: 'Educational Background',
    content: (
      <>
        <div className="edu-item">
          <div className="edu-dot"></div>
          <div>
            <h4>Bachelor of Science in Information Technology</h4>
            <p>University of the Immaculate Conception, 2023 - Present</p>
          </div>
        </div>
        <div className="edu-item">
          <div className="edu-dot"></div>
          <div>
            <h4>Science, Technology, Engineering & Mathematics (STEM)</h4>
            <p>Holy Cross College of Davao, 2021 - 2023</p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Mission & Vision',
    content: (
      <p>
        <strong>Mission:</strong> To empower businesses and entrepreneurs by
        delivering reliable, tech-forward virtual support that eliminates
        operational friction and creates space for growth.
        <br />
        <br />
        <strong>Vision:</strong> To be a trusted remote partner known for
        combining deep technical expertise with exceptional communication -
        bridging the gap between IT and business operations.
      </p>
    ),
  },
  {
    title: 'Goals & Motivation',
    content: (
      <p>
        My short-term goal is to build a strong track record as a Virtual
        Assistant, leveraging my cloud engineering background to offer clients
        more than standard VA support. Long-term, I aim to lead a remote
        operations team that delivers integrated technical and administrative
        solutions. I'm motivated by problem-solving, continuous learning, and
        the satisfaction of helping others achieve their goals efficiently.
      </p>
    ),
  },
  {
    title: 'Key Achievements',
    content: (
      <ul className="achievement-list">
        <li>Best Capstone in Senior High School</li>
        <li>
          Successfully deployed a cloud-based solution for a local library
          system, resulting in a 30% increase in operational efficiency
        </li>
        <li>
          Implemented cost-optimization strategies reducing cloud resource spend
          while improving performance
        </li>
        <li>
          Currently pursuing BSIT at the University of the Immaculate
          Conception alongside professional career
        </li>
      </ul>
    ),
  },
]

function About() {
  const [activeSlide, setActiveSlide] = useState(0)

  const showNext = () => {
    setActiveSlide((prev) => (prev + 1) % aboutSlides.length)
  }

  const showPrevious = () => {
    setActiveSlide((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length)
  }

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) < 15) {
      return
    }

    event.preventDefault()
    if (event.deltaY > 0) {
      showNext()
      return
    }
    showPrevious()
  }

  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-label">About Me</div>
        <h2 className="section-title">
          Who I <span>Am</span>
        </h2>
        <div className="about-card about-full">
          <h3>Background</h3>
          <p>
            I'm <strong>Stephen Tohoy</strong>, an IT student and Cloud
            Engineering proficient based in Davao City with a passion for
            building reliable, scalable, and efficient systems.
          </p>
        </div>

        <div className="about-carousel-shell">
          <div className="about-carousel-viewport" onWheel={handleWheel}>
            <div
              className="about-carousel-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {aboutSlides.map((slide) => (
                <article className="about-card about-carousel-slide" key={slide.title}>
                  <h3>{slide.title}</h3>
                  {slide.content}
                </article>
              ))}
            </div>
          </div>

          <div className="about-carousel-controls">
            <button type="button" className="about-nav-btn" onClick={showPrevious}>
              Previous
            </button>
            <p className="about-carousel-counter">
              {activeSlide + 1} / {aboutSlides.length}
            </p>
            <button type="button" className="about-nav-btn" onClick={showNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
