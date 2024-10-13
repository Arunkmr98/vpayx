//Header
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('site-navbar').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('site-navbar').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
}); 
// Hero Typed.js for typing effect
 var typed = new Typed('#typed-output', {
    strings: ["travel", "shopping", "lifestyle"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
//block switch
const blocks = document.querySelectorAll('.block');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const middleContent = document.getElementById('middle-content');
const sectionContainer = document.getElementById('thirdSection');
const mainTitle = document.getElementById('main-title');
let currentIndex = 0;

const titles = ["Cards", "Musanid", "Sadad"];
const mainTitles = ["Your card, Your Style", "Your Labors Salary, in one place", "All your services in 1 dashboard"];
//const bgColors = ["#F5F5F5", "#E5F5F5", "#F5E5E5"];
const buttonColors = ["#F4AC31", "#233A48", "#C91229"];

function showBlock(index) {
    blocks.forEach(block => block.classList.remove('active'));
    blocks[index].classList.add('active');
    middleContent.textContent = titles[index]; // Update middle content
    mainTitle.style.opacity = 0; // Fade out title

    setTimeout(() => {
        mainTitle.textContent = mainTitles[index]; // Change main title
        mainTitle.style.opacity = 1; // Fade in new title
    }, 100); // Delay for smooth transition

    // Update background color and button color
   // sectionContainer.style.backgroundColor = bgColors[index];
    leftBtn.style.backgroundColor = buttonColors[index];
    rightBtn.style.backgroundColor = buttonColors[index];
}

rightBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % blocks.length;
    showBlock(currentIndex);
});

leftBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + blocks.length) % blocks.length;
    showBlock(currentIndex);
});
// swipper hero slides
var heroswiper = new Swiper('.heroslider', {
    loop: true,                         //loop
    autoplay: {                         //autoplay
        delay: 2000,
    },
    pagination: {                       //pagination(dots)
        el: '.swiper-pagination',
    },
    navigation: {                       //navigation(arrows)
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
/*var heroswiper = new Swiper('.heroslider', {
    loop: false, // Disable loop to ensure only 3 dots for 3 slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet', // Normal bullet class
        bulletActiveClass: 'swiper-pagination-bullet-active', // Active bullet class with animation
        renderBullet: function (index, className) {
            // Ensures only 3 dots are displayed
            if (index < 3) {
                return '<span class="' + className + '"></span>';
            }
        },
    },
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1, // Only one slide visible at a time
    on: {
        slideChangeTransitionEnd: function () {
            // Rotate the phone image 360 degrees on slide change
            const phoneImage = document.querySelector('.main-image');
            phoneImage.style.transition = 'transform 1s ease-in-out';
            phoneImage.style.transform += 'rotate(360deg)';
        }
    }
});*/


// swipper slider panorama
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
     
 /*pagination: {
     el: ".swiper-pagination",
     clickable: true,
 },*/
 navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
     
 },
    autoplay: {
        delay: 1000, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
    },
});
 // Flip the card when the plus icon is clicked
 const flipCard = document.getElementById('flipCard');
 const closeCard = document.getElementById('closeCard');

 flipCard.addEventListener('click', function () {
     flipCard.classList.add('active');
 });

 // Close the card when the close icon is clicked
 closeCard.addEventListener('click', function (e) {
     e.stopPropagation(); // Prevent triggering the flip when clicking close
     flipCard.classList.remove('active');
 });