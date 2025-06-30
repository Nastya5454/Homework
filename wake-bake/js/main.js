document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.querySelector(".burger-icon");
  const nav = document.querySelector(".nav");
  const body = document.body;
  const navLinks = document.querySelectorAll(".nav__link");

  if (burgerIcon && nav && body && navLinks.length > 0) {
    burgerIcon.addEventListener("click", (event) => {
      event.preventDefault();
      burgerIcon.classList.toggle("active");
      nav.classList.toggle("active");
      body.classList.toggle("body--opened-menu");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);

        if (targetId) {
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

            burgerIcon.classList.remove("active");
            nav.classList.remove("active");
            body.classList.remove("body--opened-menu");
          }
        }
      });
    });
  }
});

// ====================================================================================== //

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const closeModalButton = document.querySelector('.modal__cancel');
  const body = document.querySelector('body');
  const openModalButtons = document.querySelectorAll('.open-modal-button');

  function openModal() {
    body.classList.add('body--opened--modal');
  }

  function closeModal() {
    body.classList.remove('body--opened--modal');
  }

  closeModalButton.addEventListener('click', function(event) {
    event.preventDefault();
    closeModal();
  });

  openModalButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      openModal();
    });
  });

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && body.classList.contains('body--opened--modal')) {
      closeModal();
    }
  });
});