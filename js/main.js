const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const popular_swiper = new Swiper(".popular_swiper", {
  slidesPerView: 4,
  // spaceBetween: 0,
  slidesPerGroup: 1,
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// const popular_items_swiper = new Swiper(".popular_items_slider", {
//   slidesPerView: 4,
//   // spaceBetween: 0,
//   slidesPerGroup: 1,
//   direction: "horizontal",
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// const comment_swiper = new Swiper(".comment_swiper", {
//   slidesPerView: 3,
//   // spaceBetween: 0,
//   slidesPerGroup: 1,
//   direction: "horizontal",
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

var dropdowns = document.querySelectorAll(".dropdown");
var otherElements = document.querySelector(".other-elements");

dropdowns.forEach(function (dropdown) {
  var button = dropdown.querySelector(".dropbtn");
  var content = dropdown.querySelector(".dropdown-content");

  button.addEventListener("click", function () {
    content.classList.toggle("show");
    if (content.classList.contains("show")) {
      otherElements.style.marginTop = content.clientHeight + "px";
    } else {
      otherElements.style.marginTop = "0";
    }
  });

  window.addEventListener("click", function (event) {
    if (
      !event.target.matches(".dropbtn") &&
      !event.target.closest(".dropdown")
    ) {
      content.classList.remove("show");
      otherElements.style.marginTop = "0";
    }
  });
});

function changeImage(newImagePath) {
  var largeImage = document.getElementById("item_big_img");
  largeImage.src = newImagePath;
}

$(document).ready(function () {
  $(".tabs a").click(function (e) {
    e.preventDefault();
    $(".tabs a").removeClass("active");
    $(this).addClass("active");
    $(".itemDescriptionTab").removeClass("active");
    let tabId = $(this).attr("href");
    $(tabId).addClass("active");
  });
});

$(document).ready(function () {
  $(".formBlock input").on("input", function () {
    if ($(this).val().trim() !== "") {
      $(this).addClass("filled").removeClass("error");
    } else {
      $(this).removeClass("filled");
    }
  });

  $("#myForm").submit(function (event) {
    $(".formBlock input").each(function () {
      if ($(this).val().trim() === "") {
        $(this).addClass("error");
      } else {
        $(this).removeClass("error");
      }
    });

    var emailInput = $("input[name='email']");
    var emailValue = emailInput.val().trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      emailInput.addClass("error");
    } else {
      emailInput.removeClass("error");
    }

    // Добавим проверку наличия значения для класса filled
    $(".formBlock input").each(function () {
      if ($(this).val().trim() !== "") {
        $(this).addClass("filled");
      } else {
        $(this).removeClass("filled");
      }
    });

    if ($(".formBlock input.error").length > 0) {
      event.preventDefault();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const itemColor = document.getElementById("item_color");

  itemColor.addEventListener("click", function (event) {
    if (event.target.classList.contains("itemColorButton")) {
      document.querySelectorAll(".itemColorButton").forEach(function (btn) {
        btn.classList.remove("active-color");
      });
      event.target.classList.add("active-color");
      updateProductColor(event.target.style.backgroundColor);
    }
  });

  function updateProductColor(color) {
    selectedColor = color;
    $("#tovar_color").val(selectedColor);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const item_size = document.getElementById("item_size");

  item_size.addEventListener("click", function (event) {
    if (event.target.classList.contains("sizeButton")) {
      document.querySelectorAll(".sizeButton").forEach(function (btn) {
        btn.classList.remove("activeSizeButton");
      });
      event.target.classList.add("activeSizeButton");
      updateProductColor(event.target.innerHTML);
    }
  });

  function updateProductColor(size) {
    selectedSize = size;
    $("#tovar_size").val(selectedSize);
  }
});

// ___________________________________________________________________

// Local storage ________________________________________________________________________________________________

let basket = [];

// function updateCartUI() {
//   const cartItems = document.getElementById("basket");
//   cartItems.innerHTML = "Корзина(" + getCartItemCount() + ")";
// }

function saveToLocalStorage(key, data) {
  try {
    const jsonString = JSON.stringify(data);
    localStorage.setItem(key, jsonString);
    // localStorage.clear()
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

function getFromLocalStorage() {
  let data = localStorage;

  let massCart = [];

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      massCart.push(JSON.parse(data[key]));
    }
  }

  return massCart;
}

$("#countCartDataGet").html(getFromLocalStorage().length);

function deleteFromLocalStorage(id) {
  try {
    localStorage.removeItem(id);
  } catch (error) {
    console.error("Ошибка:", error);
  }

  window.location.reload();
}

let getMassCart = getFromLocalStorage();
$("#basket").html(`Корзина (${getMassCart.length})`);

// console.log("Извлеченная корзина:", getMassCart);

document.addEventListener("DOMContentLoaded", function () {
  let cart = getFromLocalStorage();

  generateCartItems(cart);

  var blocks = document.querySelectorAll(".basketContentItem");
  // console.log(blocks);

  blocks.forEach(function (block) {
    // +
    var changeButtonAdd = block.querySelector(
      ".basketContentItemCountIncrease"
    );

    var changeButtonMin = block.querySelector(
      ".basketContentItemCountDecrease"
    );


    var contentBlock = block.querySelector(".basketContentItemCountValue");
    var priceForCounting = block.querySelector(".priceForCounting");
    var basketContentItemPrice = block.querySelector(
      ".basketContentItemPrice span"
    );

    changeButtonAdd.addEventListener("click", function () {
      let tovar_id = $(this).attr("data_id_tovar");

      var myArray = JSON.parse(localStorage.getItem(tovar_id));

      changeButtonMin.style.pointerEvents = 'auto';
      contentBlock.innerHTML++;

      myArray[5] = contentBlock.innerHTML;

      localStorage.setItem(tovar_id, JSON.stringify(myArray));

      let needPrice = contentBlock.innerHTML * basketContentItemPrice.innerHTML;

      priceForCounting.innerHTML = needPrice;

      let block = $(".priceForCounting");
      let sum = 0;

      for (let i = 0; i < block.length; i++) {
        sum += +block[i].innerHTML;
      }

      $("#fullPriceOnPage").html(sum);
    });

    // -

    changeButtonMin.addEventListener("click", function () {
      let tovar_id = $(this).attr("data_id_tovar");
      var myArray = JSON.parse(localStorage.getItem(tovar_id));

      contentBlock.innerHTML--;

      myArray[5] = contentBlock.innerHTML;

      localStorage.setItem(tovar_id, JSON.stringify(myArray));

      if (contentBlock.innerHTML == 0) {
        changeButtonMin.style.pointerEvents = 'none';
      }

      let needPrice = contentBlock.innerHTML * basketContentItemPrice.innerHTML;

      priceForCounting.innerHTML = needPrice;

      let block = $(".priceForCounting");
      let sum = 0;

      for (let i = 0; i < block.length; i++) {
        sum += +block[i].innerHTML;
      }

      $("#fullPriceOnPage").html(sum);
    });
  });

  function generateCartItems(cart) {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = "";
    let price = 0;

    cart.forEach(function (product) {
      let fullItemPrice = product[5] * product[2];
      const cartItemHTML = `
        <div class="basketContentItem">
          <div class="basketContentItemImage">
              <img src="admin/img/${product[6]}" alt="">
          </div>
          <div class="basketContentItemDescription">
              <div class="basketContentItemDescriptionTitle">
                  <h3>${product[1]}, Цвет: ${product[3]}, Размер: ${product[4]} 
                  </h3>
              </div>
              <div class="basketContentItemPrice">
                  <div class="title28 fw6"><span>${product[2]}</span> ₽</div>
              </div>
              <div class="basketContentItemCount row">
                  <div class="basketContentItemCountDecrease" data_id_tovar="${product[0]}_${product[3]}_${product[4]}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="8" fill="#ECEFF1" fill-opacity="0.72" />
                          <path
                              d="M10.4187 8.14683C10.4187 8.26558 10.4031 8.35308 10.3719 8.40933C10.3437 8.46245 10.3 8.48901 10.2406 8.48901H5.73594C5.67656 8.48901 5.63281 8.46245 5.60469 8.40933C5.57656 8.35308 5.5625 8.26558 5.5625 8.14683C5.5625 8.0312 5.57656 7.94683 5.60469 7.8937C5.63281 7.83745 5.67656 7.80933 5.73594 7.80933H10.2406C10.2687 7.80933 10.2937 7.81714 10.3156 7.83276C10.3406 7.84526 10.3594 7.86558 10.3719 7.8937C10.3875 7.9187 10.3984 7.95308 10.4047 7.99683C10.4141 8.03745 10.4187 8.08745 10.4187 8.14683Z"
                              fill="black" />
                      </svg>
                  </div>
                  <div class="basketContentItemCountValue">${product[5]} </div>
                  <div class="basketContentItemCountIncrease" data_id_tovar="${product[0]}_${product[3]}_${product[4]}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g filter="url(#filter0_d_1_426)">
                        <circle cx="12" cy="8" r="8" fill="#987965"/>
                      </g>
                      <path d="M14.0625 8.09998C14.0625 8.15935 14.0578 8.21091 14.0484 8.25466C14.0391 8.29529 14.0266 8.32966 14.0109 8.35779C13.9953 8.38591 13.9766 8.40623 13.9547 8.41873C13.9328 8.43123 13.9094 8.43748 13.8844 8.43748H12.3469V10.1437C12.3469 10.1687 12.3406 10.1906 12.3281 10.2094C12.3156 10.225 12.2953 10.239 12.2672 10.2515C12.2422 10.264 12.2078 10.275 12.1641 10.2844C12.1203 10.2906 12.0656 10.2937 12 10.2937C11.9375 10.2937 11.8828 10.2906 11.8359 10.2844C11.7922 10.275 11.7563 10.264 11.7281 10.2515C11.7031 10.239 11.6844 10.225 11.6719 10.2094C11.6594 10.1906 11.6531 10.1687 11.6531 10.1437V8.43748H10.1156C10.0875 8.43748 10.0625 8.43123 10.0406 8.41873C10.0219 8.40623 10.0047 8.38591 9.98906 8.35779C9.97344 8.32966 9.96094 8.29529 9.95156 8.25466C9.94219 8.21091 9.9375 8.15935 9.9375 8.09998C9.9375 8.04373 9.94219 7.99529 9.95156 7.95466C9.96094 7.91091 9.97344 7.87498 9.98906 7.84685C10.0047 7.81873 10.0219 7.79841 10.0406 7.78591C10.0625 7.77341 10.0859 7.76716 10.1109 7.76716H11.6531V6.06091C11.6531 6.03591 11.6594 6.01404 11.6719 5.99529C11.6844 5.97341 11.7031 5.95623 11.7281 5.94373C11.7563 5.9281 11.7922 5.91716 11.8359 5.91091C11.8828 5.90154 11.9375 5.89685 12 5.89685C12.0656 5.89685 12.1203 5.90154 12.1641 5.91091C12.2078 5.91716 12.2422 5.9281 12.2672 5.94373C12.2953 5.95623 12.3156 5.97341 12.3281 5.99529C12.3406 6.01404 12.3469 6.03591 12.3469 6.06091V7.76716H13.8891C13.9141 7.76716 13.9359 7.77341 13.9547 7.78591C13.9766 7.79841 13.9953 7.81873 14.0109 7.84685C14.0297 7.87498 14.0422 7.91091 14.0484 7.95466C14.0578 7.99529 14.0625 8.04373 14.0625 8.09998Z" fill="#C4C4C4"/>
                      <defs>
                        <filter id="filter0_d_1_426" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_426"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_426" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
              </div>
              <div class="basketContentItemPriceSum">
                  <div class="title28 fw6"><span class="priceForCounting">${fullItemPrice}</span> ₽</div>
              </div>
              <div class="basketContentItemDelete" onclick="deleteFromLocalStorage('${product[0]}_${product[3]}_${product[4]}')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none">
                      <path d="M9 9H10.5V18H9V9Z" fill="#90A4AE" />
                      <path d="M13.5 9H15V18H13.5V9Z" fill="#90A4AE" />
                      <path
                          d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6Z"
                          fill="#90A4AE" />
                      <path d="M9 1.5H15V3H9V1.5Z" fill="#90A4AE" />
                  </svg>
              </div>
          </div>
        </div>
    `;

      // Вставляем HTML-код в контейнер
      cartContainer.innerHTML += cartItemHTML;
    });
  }

  $(".basketPriceButton").click(function () {
    let block = $(".basketContentItem");

  })
});

document.addEventListener("DOMContentLoaded", function () {
  let block = $(".priceForCounting");
  let sum = 0;

  for (let i = 0; i < block.length; i++) {
    sum += +block[i].innerHTML;
  }

  $("#fullPriceOnPage").html(sum);
});



let massToSend = [];
massToSend.push(getFromLocalStorage());

massForm = [];
// massForm.push(['Алим', 'Джатдоев', 'alimdzhatdoev@mail.ru', '1234567890', 'Россия', 'Черкесск', 'Ленина 1', '369000']);
massToSend.push(massForm);

console.log(massToSend);

// console.log('Имя: ' + massToSend[1][0][0]);
// console.log('Фамилия: ' + massToSend[1][0][1]);
// console.log('--------------------------------------------------------');
// console.log('Заказ:');
// console.log('Товар 1:');
// console.log('Наименование: ' + massToSend[0][0][1] + ' цвет: ' + massToSend[0][0][3] + ' размер: ' + massToSend[0][0][4] + ' Количество: ' + massToSend[0][0][5] + ' Цена: ' + massToSend[0][0][2]);
// console.log('Товар 2:');
// console.log('Наименование: ' + massToSend[0][1][1] + ' цвет: ' + massToSend[0][1][3] + ' размер: ' + massToSend[0][1][4] + ' Количество: ' + massToSend[0][1][5] + ' Цена: ' + massToSend[0][1][2]);

$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault();
var form = [];
    var formData = $(this).serializeArray();
    formData.forEach(function(data){
      form.push(data.value);
    })
    massForm.push(form);
  });
});

$(document).ready(function() {
  // Создаем массив для хранения сообщений о товарах
  var orderMessages = [];

  $('#myForm').submit(function(event) {
    event.preventDefault();
    var form = [];
    var formData = $(this).serializeArray();
    formData.forEach(function(data) {
      form.push(data.value);
    });
    massForm.push(form);

    // Создаем сообщения о товарах и добавляем их в массив
    var orderMessage = 'Заказ:';

    massForm[0].forEach(function(item, index) {
      orderMessage += `\nТовар ${index + 1}:`;
      orderMessage += `\nНаименование: ${item[1]} цвет: ${item[3]} размер: ${item[4]} Количество: ${item[5]} Цена: ${item[2]}`;
    });

    // Добавляем сообщение в массив
    orderMessages.push(orderMessage);
  });

  // Пример: Вывод массива сообщений в консоль
  $('#showMessages').click(function() {
    console.log(orderMessages);
  });
});


// ------------------------------------------------------------------------------------------------


document.getElementById('colorPicker').addEventListener('change', function() {
  let selectedColor = this.value;
  let colorDiv = document.createElement("div");
  colorDiv.className = "itemColorButton";
  colorDiv.style.backgroundColor = selectedColor;
  document.getElementById("item_color").appendChild(colorDiv);
});



