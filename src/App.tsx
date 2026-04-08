import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    if (window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTargets = gsap.utils.toArray<HTMLElement>(
        'section:not(#hero), footer',
      )

      gsap.set(sectionTargets, {
        autoAlpha: 0,
        y: 44,
        scale: 0.985,
      })

      ScrollTrigger.batch(sectionTargets, {
        start: 'top 88%',
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power2.out',
            stagger: 0.12,
            overwrite: true,
          })
        },
        onEnterBack: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
            stagger: 0.08,
            overwrite: true,
          })
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            autoAlpha: 0,
            y: 28,
            scale: 0.99,
            duration: 0.35,
            stagger: 0.05,
            overwrite: true,
          })
        },
      })

      const blockSelectors = [
        '.about-card',
        '.skill-category',
        '.service-card',
        '.timeline-item',
        '.project-card',
        '.project-photo-item',
        '.contact-item',
      ]

      blockSelectors.forEach((selector) => {
        const elements = gsap.utils.toArray<HTMLElement>(selector)
        if (!elements.length) {
          return
        }

        gsap.set(elements, {
          autoAlpha: 0,
          y: 28,
          scale: 0.98,
        })

        ScrollTrigger.batch(elements, {
          start: 'top 90%',
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.95,
              ease: 'power2.out',
              stagger: 0.1,
              overwrite: true,
            })
          },
          onEnterBack: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power2.out',
              stagger: 0.07,
              overwrite: true,
            })
          },
          onLeaveBack: (batch) => {
            gsap.to(batch, {
              autoAlpha: 0,
              y: 22,
              scale: 0.985,
              duration: 0.3,
              stagger: 0.05,
              overwrite: true,
            })
          },
        })
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
