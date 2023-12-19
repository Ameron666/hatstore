const header = $("header");

// document.addEventListener("DOMContentLoaded", function () {
//   const currentURL = window.location.href;
//   const headerLinks = document.querySelectorAll(".link");
//   headerLinks.forEach((link) => {
//     if (link.href === currentURL) {
//       link.classList.add("active");
//     }
//   });
// });

header.append(`
    <section class="headerSection">
        <a class="main_logo" href="/">
            <div class="title24 purple fw6">SHAPKI</div>
            <div class="title24 black fw4">IDEAL</div>
        </a>
        <div class="header_links">
            <a href="catalog.html?for=Для неё">
                <div class="title16">Женское</div>
            </a>
            <a href="catalog.html?for=Для него">
                <div class="title16">Мужское</div>
            </a>
            <a href="catalog.html?for=Для детей">
                <div class="title16">Детское</div>
            </a>
            <a href="catalog.html">
                <div class="title16">Новинки</div>
            </a>
            <a href="catalog.html">
                <div class="title16 purple fw6">Скидки</div>
            </a>
        </div>
        <div class="header_right">
            <div class="header_login">
                <!-- <a href="login.html"> -->
                <a href="#">
                    <div class="title16">Войти</div>
                </a>
            </div>
            <div class="basket">
                <!-- <img src="" alt=""> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z"
                        stroke="#6A1B9A" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <!-- <div class="title16"></div> -->
                <a href="basket.html">
                    <div class="title16" id="basket" >Корзина (0)</div>
                </a>
            </div>
        </div>
    </section>
`);
