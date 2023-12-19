function getData(tableName, id) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "admin/includes/CRUD/getDataFromDB.php",
      type: "POST",
      data: {
        id: id,
        tableName: tableName,
      },
      dataType: "json",
      success: function (data) {
        let dataArray = Object.values(data);
        resolve(dataArray);
      },
      error: function (xhr, status, error) {
        console.error("Error:", xhr, status, error);
        reject(error);
      },
    });
  });
}

function stringToImageArray(imageString) {
  return imageString.split(",").map((image) => image.trim());
}

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

//Category items
getData("item").then((response) => {
  response.forEach((event) => {
    event.date = new Date(event.date);
  });

  function compareDates(event1, event2) {
    return event2.date - event1.date;
  }

  response.sort(compareDates);

  let block = $("#category_items").empty();
  const maxCharacters = 100;

  response.forEach((element) => {
    block.append(`
        <div class="popular_item">
        <div class="popular_img">
            <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
            <a href="item.html?id_item=${
              element.id
            }" class="popularButtonTransparent">
                <div class="buttonTransparent">быстрый просмотр</div>
            </a>
        </div>
        <div class="description">
            <div class="title10">
                ${element.tags}
            </div>

            <div class="title16 fw5">
                ${element.title}
            </div>

            <div class="price">
                <div class="title16 fw6">
                    ${element.price}
                </div>
                <div class="title16 fw4 discount">
                    ${element.price_discount}
                </div>
            </div>

            <div class="colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="12" viewBox="0 0 58 12"
                    fill="none">
                    <circle cx="6" cy="6" r="3.95" fill="#EDEDED" stroke="#C4C4C4" stroke-width="0.1" />
                    <circle cx="6" cy="6" r="5.75" stroke="black" stroke-width="0.5" />
                    <circle cx="22" cy="6" r="4" fill="#1B9311" />
                    <circle cx="38" cy="6" r="4" fill="#4D0FD0" />
                    <circle cx="54" cy="6" r="4" fill="black" />
                </svg>
            </div>
        </div>
    </div>
        `);
  });
});

//item
const url_item = new URL(window.location.href);
const queryParams_item = url_item.searchParams;
const id_item = queryParams_item.get("id_item");
if (id_item) {
  getData("item", id_item, "admin").then((response) => {
    $("#this_item_img").append(`
        <img src="admin/img/${
          stringToImageArray(response[12])[0]
        }" alt="" id="item_big_img">
        `);
    $("#item_name").text(response[1]);

    for (let i = 0; i < stringToImageArray(response[12]).length; i++) {
      $("#this_item_images").append(`
            <div class="item_small_img">
                <img src="admin/img/${
                  stringToImageArray(response[12])[i]
                }" alt="" onclick="changeImage('admin/img/${
        stringToImageArray(response[12])[i]
      }')">
            </div>
            `);
    }
    let tags = response[11].split(", ");

    for (let i = 0; i < tags.length; i++) {
      $("#item_tags").append(`
                <div class="itemTagButton">${tags[i]}</div>
            `);
    }

    let colorsName = {
      Фиолетовый: "purple",
      Чёрный: "black",
      Белый: "white",
      Красный: "red",
      Синий: "blue",
      Зелёный: "green",
      Оранжевый: "orange",
      Голубой: "cyan",
      Желтый: "yellow",
      Серый: "gray",
    };

    let colors = response[6].split(", ");
    for (let i = 0; i < colors.length; i++) {
      $("#item_color").append(`
                <div class="itemColorButton" style="background-color: ${
                  colorsName[colors[i]]
                };"></div>
            `);
    }

    let sizes = response[7].split(", ");
    for (let i = 0; i < sizes.length; i++) {
      $("#item_size").append(`
                <div class="sizeButton">${sizes[i]}</div>
            `);
    }
    let selectedColor = "";
    let selectedSize = "";
    $("#item_vendor").text(response[2]);
    $("#item_price").text(response[4] + " ₽");
    $("#item_description").html(response[3]);
    if (response[5] != "") {
      $("#item_price_discount").text(response[5] + " ₽");
    } else {
      $("#item_price_discount").text("");
    }
    $("#item_composition").text(response[9]);
    $("#item_lining").text(response[10]);

    // Заполнение полей для отправки в корзину
    $("#tovar_id").val(response[0]);
    $("#tovar_name").val(response[1]);
    $("#tovar_price").val(response[4]);
    $("#tovar_count").val(1);

    $(".itemButtons").append(`
      <div class="itemButton" id="addToCartButton">Добавить в корзину</div>
      <div class="itemButton" onclick="">Купить в один клик</div>
    `);
  });
}

$(".itemInfo").on("click", "#addToCartButton", function () {
  let cartMass = [];
  cartMass.push($("#tovar_id").val());
  cartMass.push($("#tovar_name").val());
  cartMass.push($("#tovar_price").val());
  cartMass.push($("#tovar_color").val());
  cartMass.push($("#tovar_size").val());
  cartMass.push($("#tovar_count").val());

  if ($("#tovar_color").val() != "" && $("#tovar_size").val() !== "") {
    saveToLocalStorage(`${$("#tovar_id").val()}_${$("#tovar_color").val()}_${$("#tovar_size").val()}`, cartMass);

    let getMassCart = getFromLocalStorage();
    $("#basket").html(`Корзина (${getMassCart.length})`);
    alert("Товар добавлен в корзину!");
    
  } else {
    alert("Выберите цвет и размер!");
  }
});

//Выгрузка всех новостей на главную
getData("news").then((response) => {
  response.forEach((event) => {
    event.date = new Date(event.date);
  });

  function compareDates(event1, event2) {
    return event2.date - event1.date;
  }

  response.sort(compareDates);

  let block = $("#news_show_main_page").empty();
  const maxCharacters = 100;

  let value = 6;
  let length = response.length;

  if (value > length) {
    value = length;
  }

  for (let i = 0; i < value; i++) {
    block.append(`
            <div class="events_block">
                <div class="events_block__top">
                    <img src="admin/img/${
                      stringToImageArray(response[i].img)[0]
                    }" alt="" />
                </div>
                <div class="events_block__bottom">
                <div class="events_block__bottom___line">
                    <img src="img/forEvent.png" alt="" />
                </div>
                <div class="events_block__bottom___title">
                    ${response[i].title.slice(0, maxCharacters)}...
                </div>
                <div class="events_block__bottom___dops">
                    <div class="events_block__bottom___dops____date">${
                      response[i].date.toISOString().split("T")[0]
                    }</div>
                    <a href="new.html?id_new=${
                      response[i].id
                    }" class="events_block__bottom___dops____readMore">
                        Читать дальше >>
                    </a>
                </div>
                </div>
            </div>
        `);
  }
});

// ---------------------------------------------------------

//выгрузка всех слайдов в слайдер
$(document).ready(function () {
  getData("slider").then((response) => {
    let slides = "";
    response.forEach((element) => {
      slides += `
                    <div class="swiper-slide slider">
                        <div class="slider_left">
                            <img src="admin/img/${
                              stringToImageArray(element.img)[0]
                            }" alt="" />
                        </div>
                        <div class="slider_right">
                            <p class="slider_right__title">
                                ${element.title}
                            </p>
                            <p class="slider_right__desc">
                                ${element.text}
                            </p>
                            <a href="${
                              element.link
                            }" class="slider_right__button">Узнать больше</a>
                        </div>
                    </div>
                `;
    });

    const swiperHtml = `
                <swiper class="mySwiper" pagination="true">
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                    <div class="swiper-pagination"></div>
                </swiper>
            `;

    $("#slider_all_show").html(swiperHtml);

    if ($("#slider_all_show").length) {
      const swiper = new Swiper(".mySwiper", {
        // Опциональные параметры
        direction: "horizontal",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 5000,
        },
      });
    }
  });
});

// ---------------------------------------------------------

//Редактирование услуги
const url_service = new URL(window.location.href);
const queryParams_service = url_service.searchParams;
const id_service = queryParams_service.get("id_service");
if (id_service) {
  getData("services", id_service).then((response) => {
    $("#services_find_service .new_block__title").text(response[1]);
    $("#newName").text(response[1]);
    $("#services_find_service .new_block__nums").html(response[2]);
  });
}
