let menu = document.querySelector(".nav");
let bag = document.querySelector(".shopping-bag");

document.querySelector("#menu-btn").onclick = () => {
    menu.classList.add("active");
};

document.querySelector("#close-icon").onclick = () => {
    menu.classList.remove("active");
};

document.querySelector("#shopping-bag").onclick = () => {
    bag.classList.add("active");
};

document.querySelector("#shop-close").onclick = () => {
    bag.classList.remove("active");
};

let search = document.querySelector(".search-list");

document.querySelector("#search-btn").onclick = () => {
    search.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
    search.classList.remove("active");
};

window.onscroll = () => {
    menu.classList.remove("active");

    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    }else {
        document.querySelector(".header").classList.remove("active");
    }
};

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    }else {
        document.querySelector(".header").classList.remove("active");
    }
};

var swiper = new Swiper(".home-slider", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },  
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },  
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});