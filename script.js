const toggleButton = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (toggleButton && primaryNav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}
