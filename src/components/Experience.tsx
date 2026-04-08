function Experience() {
  return (
    <section id="educational-experience">
      <div className="section-inner">
        <div className="section-label">Educational History</div>
        <h2 className="section-title">
          Student <span>Experience</span>
        </h2>
        <p className="section-desc">
          Currently pursuing a degree in Information Technology at University of
          the Immaculate Conception, Davao City.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2022 - 2025</div>
            <div className="timeline-role">Information Technology Student</div>
            <div className="timeline-company">
              University of the Immaculate Conception
            </div>
            <div className="timeline-desc">
              I focus on continuously developing my skills in cybersecurity,
              cloud computing, and UI/UX design by studying concepts,
              practicing hands-on projects, and exploring new technologies to
              strengthen my knowledge and prepare for a future career in IT.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2020 - 2022</div>
            <div className="timeline-role">Senior High School Student</div>
            <div className="timeline-company">Holy Cross College of Calinan</div>
            <div className="timeline-desc">
              During my Senior High School, we were awarded the Best Capstone
              Award for developing an innovative hardware-based air quality
              monitoring system designed to detect, display, and help filter
              air pollutants, showcasing our skills in both technology and
              problem-solving while addressing real-world environmental
              concerns.
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2017 - 2021</div>
            <div className="timeline-role">Junior High School Student</div>
            <div className="timeline-company">Holy Cross College of Calinan</div>
            <div className="timeline-desc">
              During my Junior High School, I actively participated in various
              academic and technology-related projects, building foundational
              skills in science, technology, and problem-solving, which helped
              spark my interest in IT and set the stage for my future studies.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
