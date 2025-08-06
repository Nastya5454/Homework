const quantityControl = document.querySelector(".quantity-control");
const minusButton = quantityControl.querySelector(".minus");
const plusButton = quantityControl.querySelector(".plus");
const quantityInput = quantityControl.querySelector(".quantity-input");

// Функция для обновления состояния кнопки "минус"
function updateMinusButtonState() {
  let currentValue = parseInt(quantityInput.value);
  let minValue = parseInt(quantityInput.min);

  if (currentValue > minValue) {
    minusButton.classList.remove("disabled");
    minusButton.disabled = false; // Раскомментируйте эту строку, чтобы кнопка стала активной
  } else {
    minusButton.classList.add("disabled");
    minusButton.disabled = true; // Раскомментируйте эту строку, чтобы кнопка стала неактивной
  }
}

minusButton.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  let minValue = parseInt(quantityInput.min);

  if (currentValue > minValue) {
    quantityInput.value = currentValue - 1;
  }
  updateMinusButtonState(); // Обновляем состояние кнопки после клика
});

plusButton.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
  updateMinusButtonState(); // Обновляем состояние кнопки после клика
});

// Дополнительная обработка для ввода с клавиатуры, чтобы ограничить значение
quantityInput.addEventListener("input", () => {
  let value = parseInt(quantityInput.value);
  let minValue = parseInt(quantityInput.min);

  if (isNaN(value) || value < minValue) {
    quantityInput.value = minValue;
  }
  updateMinusButtonState(); // Обновляем состояние кнопки после изменения значения
});

document.addEventListener("DOMContentLoaded", function () {
  const upButton = document.querySelector(".product__dallery__row-top");
  const downButton = document.querySelector(".product__dallery__row");
  const imageList = document.querySelector(".product__gallery-carousel__list");
  const imageListContainer = document.querySelector(
    ".product__gallery-carousel__inner"
  );
  const listItemHeight = 114;
  let currentPosition = 0;
  const fadeOutTop = document.querySelector(
    ".product__gallery-carousel__fade-out-top"
  );
  const fadeOutBottom = document.querySelector(
    ".product__gallery-carousel__fade-out"
  );

  // Функция для обновления видимости fade-out элементов
  function updateFadeOutVisibility() {
    const maxScroll = -(
      imageList.scrollHeight - imageListContainer.clientHeight
    );

    // Верхний fade-out: показывать, если currentPosition < 0, иначе скрыть
    if (currentPosition < 0) {
      fadeOutTop.style.opacity = "1";
      upButton.classList.remove("disabled");
    } else {
      fadeOutTop.style.opacity = "0";
      upButton.classList.add("disabled");
    }

    // Нижний fade-out: показывать, если есть что прокручивать вниз, иначе скрыть
    if (
      imageList.scrollHeight > imageListContainer.clientHeight &&
      currentPosition > maxScroll
    ) {
      fadeOutBottom.style.opacity = "1";
      downButton.classList.remove("disabled");
    } else {
      fadeOutBottom.style.opacity = "0";
      downButton.classList.add("disabled");
    }
  }

  upButton.addEventListener("click", function () {
    if (currentPosition < 0) {
      currentPosition = Math.min(0, currentPosition + listItemHeight);
      imageList.style.transform = `translateY(${currentPosition}px)`;
      updateFadeOutVisibility();
    }
  });

  downButton.addEventListener("click", function () {
    const maxScroll = -(
      imageList.scrollHeight - imageListContainer.clientHeight
    );
    if (currentPosition > maxScroll) {
      currentPosition = Math.max(maxScroll, currentPosition - listItemHeight);
      imageList.style.transform = `translateY(${currentPosition}px)`;
      updateFadeOutVisibility();
    }
  });

  // Инициализация видимости fade-out
  updateFadeOutVisibility();
  // initial setup after DOM is ready
  currentPosition = 0;
  imageList.style.transform = `translateY(${currentPosition}px)`;
  updateFadeOutVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  const largeImage = document.getElementById("largeImage");
  const thumbnails = document.querySelectorAll(
    ".product__gallery-carousel__item img"
  );

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const newImageSrc = this.getAttribute("data-large");

      // 1. Добавляем класс fade-out
      largeImage.classList.add("fade-out");

      // 2. Ждем окончания transition
      setTimeout(() => {
        // 3. Меняем src
        largeImage.src = newImageSrc;

        // 4. Удаляем класс fade-out (восстанавливаем видимость)
        largeImage.classList.remove("fade-out");
      }, 300); // 300 мс - время transition (должно совпадать с CSS)
    });
  });
});

const heartIcon = document.querySelector(".product__gallery__heart-icon");

heartIcon.addEventListener("click", (event) => {
  event.preventDefault(); // Предотвращаем переход по ссылке '#' (если это ссылка)
  heartIcon.classList.toggle("active"); // Добавляем/удаляем класс 'active'
});


document.addEventListener('DOMContentLoaded', function() {
  // Получаем все элементы с классом 'img-hover__carousel'
  const images = document.querySelectorAll('.img-hover__carousel');

  // Перебираем каждый элемент
  images.forEach(image => {
    // Сохраняем исходный источник изображения
    const originalImage = image.src;

    // Добавляем обработчик наведения курсора
    image.addEventListener('mouseover', function() {
      image.src = this.dataset.mouseover;
    });

    // Добавляем обработчик ухода курсора
    image.addEventListener('mouseout', function() {
      image.src = originalImage; // Возвращаемся к исходному изображению
    });
  });
});

// ====== слайдеры ======

document.addEventListener('DOMContentLoaded', function() {
    const sliderMenuList = document.querySelector('.sliders__menu__list');
    const tabButtons = document.querySelectorAll('.tab-button');

    if (!sliderMenuList) {
        console.error('Не найден элемент с классом "sliders__menu__list"');
        return;
    }

    if (!tabButtons || tabButtons.length === 0) {
        console.error('Не найдены элементы с классом "tab-button"');
        return;
    }

    function activateTab(tabId) {
        // Скрываем все панели и удаляем inline-стили
        const tabPanels = document.querySelectorAll('.sliders__menu-panel');
        tabPanels.forEach(panel => {
            panel.style.visibility = '';
            panel.style.position = '';
            panel.style.opacity = '';
            panel.classList.remove('active');
        });

        // Находим нужную панель и делаем ее активной
        const tabPanel = document.getElementById(tabId);
        if (tabPanel) {
            tabPanel.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            // Удаляем класс 'active' со всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем класс 'active' только к текущей кнопке
            this.classList.add('active');

            // Активируем нужную панель
            const tabId = this.dataset.tab;
            activateTab(tabId);

            // === Код для прокрутки ===
            if (window.innerWidth < 1300) { // Проверяем ширину экрана
                const listItem = this.closest('.sliders__menu__item');
                if (listItem) {
                    const scrollPosition = listItem.offsetLeft;
                    sliderMenuList.scrollTo({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Инициализация первой вкладки и кнопки
    if (tabButtons.length > 0) {
        activateTab(tabButtons[0].dataset.tab);
        tabButtons[0].classList.add('active');
    }
});

// ======== аккордион =========

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-list__item');

  accordionItems.forEach(item => {
    const control = item.querySelector('.accordion-list__control');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-list__open-icon');
    const contentInner = item.querySelector('.accordion-content-inner');

    // Закрываем все элементы и удаляем класс active у иконок при загрузке страницы
    item.classList.remove('accordion-list__item--opened'); // Убираем класс opened
    icon.classList.remove('active'); // Убираем класс active

    control.addEventListener('click', function(e) {
      e.preventDefault();

      // Переключаем класс 'active' у иконки
      icon.classList.toggle('active');

      // Получаем высоту внутреннего контента
      const contentHeight = contentInner.scrollHeight;

      // Переключаем класс 'accordion-list__item--opened'
      if (item.classList.contains('accordion-list__item--opened')) {
        item.classList.remove('accordion-list__item--opened');
        content.style.height = '0'; // Сворачиваем аккордеон
      } else {
        item.classList.add('accordion-list__item--opened');
        content.style.height = contentHeight + 'px'; // Разворачиваем аккордеон
      }
    });
  });
});

// ========= карточки товаров ==========

document.addEventListener('DOMContentLoaded', function() {
  const showMoreButton = document.querySelector('.similar__button-more');
  const secondRow = document.querySelector('.cards-row-2');
  const cardsContainer = document.querySelector('.cards-container'); // Получаем контейнер

  if (showMoreButton && secondRow) {
    showMoreButton.addEventListener('click', function() {
      secondRow.classList.add('visible'); // Используем класс для показа
      showMoreButton.style.display = 'none'; // Скрываем кнопку
    });

    secondRow.style.transition = 'all 0.5s ease';
  }
});

// ===== кнопка минус/плюс нижняя =====

document.addEventListener("DOMContentLoaded", function() {
  // Находим ВСЕ элементы с классом .s-quantity-control
  const allQuantityControls = document.querySelectorAll(".s-quantity-control");

  if (allQuantityControls.length === 0) {
    console.error("Не найден ни один элемент с классом .s-quantity-control");
    return; // Если нет ни одного, выходим
  }

  // Проходим по каждому найденному блоку счетчика
  allQuantityControls.forEach(productQuantityControl => {
    // Внутри каждого блока находим нужные элементы
    const minusButton = productQuantityControl.querySelector(".s-quantity-button.s-minus"); // Класс minus был добавлен к s-quantity-button
    const plusButton = productQuantityControl.querySelector(".s-quantity-button.s-plus");   // Класс plus был добавлен к s-quantity-button
    const quantityInput = productQuantityControl.querySelector(".s-quantity-input");

    // Проверяем, что все элементы найдены внутри текущего productQuantityControl
    if (!minusButton || !plusButton || !quantityInput) {
      console.error("Не найден один или несколько элементов внутри .s-quantity-control:", productQuantityControl);
      return; // Если не нашли внутри этого блока, переходим к следующему
    }

    // Функция для обновления состояния кнопки "минус"
    function updateProductMinusButtonState() {
      let currentValue = parseInt(quantityInput.value);
      let minValue = parseInt(quantityInput.min);

      if (currentValue > minValue) {
        minusButton.classList.remove("disabled");
        minusButton.disabled = false;
      } else {
        minusButton.classList.add("disabled");
        minusButton.disabled = true;
      }
    }

    // Инициализация состояния кнопки при загрузке страницы для каждого элемента
    updateProductMinusButtonState();

    // Обработчик для кнопки "минус"
    minusButton.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      let minValue = parseInt(quantityInput.min);

      if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
      }
      updateProductMinusButtonState(); // Обновляем состояние кнопки после клика
    });

    // Обработчик для кнопки "плюс"
    plusButton.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
      updateProductMinusButtonState(); // Обновляем состояние кнопки после клика
    });

    // Обработчик для поля ввода (при ручном вводе)
    quantityInput.addEventListener("input", () => {
      let value = parseInt(quantityInput.value);
      let minValue = parseInt(quantityInput.min);

      if (isNaN(value) || value < minValue) {
        quantityInput.value = minValue;
      }
      updateProductMinusButtonState(); // Обновляем состояние кнопки после изменения значения
    });
  });
});