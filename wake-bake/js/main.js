document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.burger-icon');
  const nav = document.querySelector('.nav');
  const body = document.body;
  const navLinks = document.querySelectorAll('.nav__link');

  if (burgerIcon && nav && body && navLinks.length > 0) {

    burgerIcon.addEventListener('click', (event) => {
      event.preventDefault();
      burgerIcon.classList.toggle('active');
      nav.classList.toggle('active');
      body.classList.toggle('body--opened-menu');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);

        if (targetId) {
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

            burgerIcon.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('body--opened-menu');
          }
        }
      });
    });
  } 
});