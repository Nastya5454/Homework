// Бургер
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

// ======================================================================================

// Модалка
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const closeModalButton = document.querySelector(".modal__cancel");
  const body = document.querySelector("body");
  const openModalButtons = document.querySelectorAll(".open-modal-button");

  function openModal() {
    body.classList.add("body--opened--modal");
  }

  function closeModal() {
    body.classList.remove("body--opened--modal");
  }

  closeModalButton.addEventListener("click", function (event) {
    event.preventDefault();
    closeModal();
  });

  openModalButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      openModal();
    });
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      body.classList.contains("body--opened--modal")
    ) {
      closeModal();
    }
  });
});

// =======================================================================================

// Табы
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".program__tab-controls__link");
  const tabContents = document.querySelectorAll(".program__tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const tabId = this.getAttribute("href");

      tabLinks.forEach((link) => {
        link.classList.remove("program__tab-controls__link--active");
      });

      tabContents.forEach((content) => {
        content.classList.remove("program__tab-content--show");
      });

      this.classList.add("program__tab-controls__link--active");

      const selectedContent = document.getElementById(tabId);
      if (selectedContent) {
        selectedContent.classList.add("program__tab-content--show");
      }
    });
  });

  if (tabLinks.length > 0) {
    tabLinks[0].click();
  }
});

const accordionItems = document.querySelectorAll(".accordion-list__item");

accordionItems.forEach((item) => {
  const control = item.querySelector(".accordion-list__control");
  const content = item.querySelector(".accordion-list__content");

  control.addEventListener("click", () => {
    const isOpen = item.classList.contains("accordion-list__item--opened");

    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("accordion-list__item--opened");
        otherItem.querySelector(".accordion-list__content").style.maxHeight =
          null;
      }
    });

    item.classList.toggle("accordion-list__item--opened");

    if (isOpen) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Слайдер-галерея
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".gallery__slider", {
    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },

    breakpoints: {
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      },
    },
  });
});
