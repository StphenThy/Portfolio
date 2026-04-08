import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import profileImage from '../assets/profile.jpg'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = {
    facebook: 'https://www.facebook.com/pipoy.stephen',
    instagram: 'https://www.instagram.com/thy.stephen/',
    linkedin: 'https://www.linkedin.com/in/stephen-p-tohoy-310654366/',
}

function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let heroTrigger: ScrollTrigger | null = null

    const ctx = gsap.context(() => {
      const introTargets = [
        '.gsap-badge',
        '.gsap-title',
        '.gsap-role',
        '.gsap-subtitle',
        '.gsap-photo-wrap',
      ]

      // Start with hero text and photo hidden, then pop them in.
      gsap.set(introTargets, {
        autoAlpha: 0,
        y: 46,
        scale: 0.94,
      })

      gsap.set('.gsap-photo-wrap', {
        filter: 'blur(10px)',
      })

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.out' },
      })

      tl.from('.gsap-grid', {
        opacity: 0,
        clipPath: 'inset(0 0 100% 0)',
        duration: 1,
      })
        .from(
          ['.gsap-glow-one', '.gsap-glow-two'],
          {
            opacity: 0,
            y: 26,
            duration: 1.1,
            stagger: 0.1,
          },
          '-=0.5',
        )
        .to(
          '.gsap-photo-wrap',
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.25,
            clearProps: 'filter',
            ease: 'power3.out',
          },
          '-=0.45',
        )
        .to(
          [
            '.gsap-badge',
            '.gsap-title',
            '.gsap-role',
            '.gsap-subtitle',
          ],
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            stagger: 0.16,
          },
          '-=0.7',
        )

      requestAnimationFrame(() => {
        tl.play(0)
      })

      if (heroRef.current) {
        heroTrigger = ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top 75%',
          onEnter: () => tl.restart(true),
          onEnterBack: () => tl.restart(true),
        })
      }
    }, heroRef)

    return () => {
      heroTrigger?.kill()
      ctx.revert()
    }
  }, [])

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-grid-bg gsap-grid"></div>
      <div className="hero-glow gsap-glow-one"></div>
      <div className="hero-glow2 gsap-glow-two"></div>
      <div className="hero-content">
        <div>
          <div className="landing-nav gsap-badge">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#educational-experience">Educational Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href="/Tohoy-Resume.pdf"
              download="Stephen-Tohoy-Resume.pdf"
              className="landing-nav-cta"
            >
              Download CV
            </a>
          </div>
          <div className="hero-badge gsap-badge">Available for VA Opportunities</div>
          <h1 className="hero-title gsap-title">
            Stephen
            <br />
            <span>Tohoy</span>
          </h1>
          <p className="hero-role gsap-role">
            Currently a student, Proficient in Cybersecurity and Cloud Computing
          </p>
          <p className="hero-subtitle gsap-subtitle">
            IT student with a few years of experience managing cloud
            infrastructure across AWS, Azure, and Google Cloud - now bringing
            those systems-thinking and technical skills to Virtual Assistance.
          </p>
        </div>
        <div className="hero-photo-wrap gsap-photo-wrap">
          <div className="hero-photo-ring">
            <img
              className="hero-photo"
              src={profileImage}
              alt="Stephen Tohoy portrait"
            />
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="hero-social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M14.5 8H16V5h-1.8C11.7 5 10 6.5 10 9.2V11H8v3h2v5h3v-5h2.2l.8-3H13V9.5c0-.9.3-1.5 1.5-1.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="hero-social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.3 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.8a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hero-social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.1 8.6a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM4.6 19.5h3V10h-3v9.5Zm5.2 0h3v-4.8c0-1.3.2-2.5 1.8-2.5s1.6 1.5 1.6 2.6v4.7h3v-5.3c0-2.6-.6-4.6-3.7-4.6-1.5 0-2.4.8-2.8 1.6h-.1V10h-2.8v9.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
