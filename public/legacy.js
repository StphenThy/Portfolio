const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const contactSubmitButton = document.getElementById('contact-submit-button');

if (hamburgerMenu && navLinks) {
  hamburgerMenu.addEventListener('click', () => {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#0D1B2A';
    navLinks.style.padding = '1.5rem';
    navLinks.style.borderBottom = '1px solid rgba(79,195,247,0.15)';
  });
}

if (contactSubmitButton) {
  contactSubmitButton.addEventListener('click', () => {
    window.alert('Thanks for reaching out! Stephen will get back to you shortly.');
  });
}
