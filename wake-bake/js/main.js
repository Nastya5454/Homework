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

// =======================================================================================

// Табы
document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.program__tab-controls__link');
  const tabContents = document.querySelectorAll('.program__tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем переход по ссылке

      const tabId = this.getAttribute('href'); // Получаем ID из атрибута href

      // Снимаем класс активности со всех ссылок
      tabLinks.forEach(link => {
        link.classList.remove('program__tab-controls__link--active');
      });

      // Скрываем все контенты
      tabContents.forEach(content => {
        content.classList.remove('program__tab-content--show');
      });

      // Добавляем класс активности к текущей ссылке
      this.classList.add('program__tab-controls__link--active');

      // Показываем контент для выбранной вкладки
      const selectedContent = document.getElementById(tabId);
      if (selectedContent) {
        selectedContent.classList.add('program__tab-content--show');
      }
    });
  });

  // Показываем первую вкладку по умолчанию
  if (tabLinks.length > 0) {
    tabLinks[0].click();
  }
});

// Акордеон
// Получаем все элементы аккордиона
const accordionItems = document.querySelectorAll('.accordion-list__item');

// Перебираем каждый элемент аккордиона
accordionItems.forEach(item => {
  // Находим кнопку управления внутри элемента
  const control = item.querySelector('.accordion-list__control');
  // Находим контент внутри элемента
  const content = item.querySelector('.accordion-list__content');

  // Добавляем обработчик события клика на кнопку управления
  control.addEventListener('click', () => {
    // Проверяем, открыт ли элемент
    const isOpen = item.classList.contains('accordion-list__item--opened');

    // Закрываем все открытые элементы
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('accordion-list__item--opened');
        otherItem.querySelector('.accordion-list__content').style.maxHeight = null; // Сбрасываем max-height
      }
    });

    // Переключаем класс "opened" для текущего элемента
    item.classList.toggle('accordion-list__item--opened');

    // Обновляем max-height для контента
    if (isOpen) {
      // Если элемент был открыт, закрываем его
      content.style.maxHeight = null; // Сбрасываем max-height
    } else {
      // Если элемент был закрыт, открываем его
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});