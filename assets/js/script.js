'use strict';

/**
 * toogle active class on header
 * when clcked nav-toggle-btn
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");
const menuBtn = document.querySelectorAll("[data-menu-btn]");

navToggleBtn.addEventListener("click", function(){
    header.classList.toggle("active");
});

/**
 * toggle ctx-menu when click on card-menu-btn
 */

for(let i = 0; i < menuBtn.length; i++){
    menuBtn[i].addEventListener("click", function(){
        this.nextElementSibling.classList.toggle("active");
    });
}

/**
 * load more btn loading spin toggle
 */

const loadMoreBtn = document.querySelector("[data-load-more]");

loadMoreBtn.addEventListener("click", function(){
    this.classList.toggle("active");
});