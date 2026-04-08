function Contact() {
  const handleSubmit = () => {
    window.alert('Thanks for reaching out! Stephen will get back to you shortly.')
  }

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-label">Let's Work Together</div>
        <h2 className="section-title">
          Get in <span>Touch</span>
        </h2>
        <div className="contact-inner">
          <div>
            <p className="contact-intro">
              I'm open to Virtual Assistant opportunities, freelance projects,
              and long-term remote collaborations. Feel free to reach out via
              any of the channels below.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:09055195213">09055195112</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:stephentohoy@gmail.com">
                    stephentohoy@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Davao City, Philippines</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div>
                  <h4>Social Links</h4>
                  <div className="contact-links-buttons" aria-label="Social links">
                    <a
                      href="https://facebook.com/your-profile"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social-btn"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M14.5 8H16V5h-1.8C11.7 5 10 6.5 10 9.2V11H8v3h2v5h3v-5h2.2l.8-3H13V9.5c0-.9.3-1.5 1.5-1.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com/your-profile"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social-btn"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.3 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.8a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Z"
                          fill="currentColor"
                        />
                      </svg>
                      Instagram
                    </a>
                    <a
                      href="https://linkedin.com/in/stephentohoy"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-social-btn"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M6.1 8.6a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM4.6 19.5h3V10h-3v9.5Zm5.2 0h3v-4.8c0-1.3.2-2.5 1.8-2.5s1.6 1.5 1.6 2.6v4.7h3v-5.3c0-2.6-.6-4.6-3.7-4.6-1.5 0-2.4.8-2.8 1.6h-.1V10h-2.8v9.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-resume-wrap">
              <a
                href="/Tohoy-Resume.pdf"
                download="Stephen-Tohoy-Resume.pdf"
                className="btn-primary btn-inline"
              >
                ↓ Download Resume PDF
              </a>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" placeholder="Jane Smith" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="jane@company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="VA Opportunity - Project Inquiry"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            <button className="btn-primary" type="button" onClick={handleSubmit}>
              Send Message {'->'}
            </button>
          </div>
        </div>

        <footer>
          <p>
            © 2025 Stephen Tohoy. Davao City,
            PH.
          </p>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#educational-experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
