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
  spaceBetween: 0,
  slidesPerGroup: 2,

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

