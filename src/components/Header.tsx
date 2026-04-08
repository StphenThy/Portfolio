import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav>
      <span className="nav-logo">ST</span>
      <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#educational-experience" onClick={closeMenu}>
            Educational Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
      <a
        href="/Tohoy-Resume.pdf"
        download="Stephen-Tohoy-Resume.pdf"
        className="nav-cta"
      >
        Download CV
      </a>
      <button
        type="button"
        className="hamburger"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Header
