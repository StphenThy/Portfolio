import { useEffect, useState } from 'react'

const testimonials = [
  '"Stephen brings calm execution, clear communication, and strong technical thinking to every project."',
  '"Reliable, detail-oriented, and always proactive in solving problems before they escalate."',
  '"Working with Stephen was smooth from start to finish. He communicates clearly and delivers on time."',
  '"He combines technical skill with professional discipline, which makes collaboration easy and productive."',
]

function Testimonials() {
  const [index, setIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const rotateTimer = window.setInterval(() => {
      setIsFading(true)

      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length)
        setIsFading(false)
      }, 280)
    }, 4200)

    return () => window.clearInterval(rotateTimer)
  }, [])

  return (
    <section id="testimonials">
      <div className="section-inner">
        <div className="section-label">Testimonial</div>
        <h2 className="section-title">
          What People <span>Say</span>
        </h2>
        <p className={`section-desc testimonial-quote ${isFading ? 'is-fading' : ''}`} aria-live="polite">
          {testimonials[index]}
        </p>
      </div>
    </section>
  )
}

export default Testimonials
