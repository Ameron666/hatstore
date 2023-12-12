const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  const popular_swiper = new Swiper('.popular_swiper', {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 2,

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// JavaScript для обработки событий нажатия на кнопку

// Получаем все элементы с классом "dropdown"
var dropdowns = document.querySelectorAll('.dropdown');
var otherElements = document.querySelector('.other-elements');

// Добавляем обработчик события для каждого элемента
dropdowns.forEach(function(dropdown) {
  var button = dropdown.querySelector('.dropbtn');
  var content = dropdown.querySelector('.dropdown-content');

  // Обработчик события для нажатия на кнопку
  button.addEventListener('click', function() {
    // Переключаем видимость контейнера со ссылками
    content.classList.toggle('show');

    // Устанавливаем margin-top для other-elements в зависимости от высоты dropdown-content
    if (content.classList.contains('show')) {
      otherElements.style.marginTop = content.clientHeight + 'px';
    } else {
      otherElements.style.marginTop = '0';
    }
  });

  // Закрываем контейнер со ссылками, если клик произошел вне элемента
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
      content.classList.remove('show');
      otherElements.style.marginTop = '0';
    }
  });
});