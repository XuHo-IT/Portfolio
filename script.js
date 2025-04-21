// Type js
var typed = new Typed('.text',{
    strings:["C# Developer","Web Developer","Fullstack Developer"],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
});

/* SHOW EDUCATION && EXPERIENCE */
let EducationBtn = document.querySelector('.education')
let ExperienceBtn = document.querySelector('.experience')
let show_box = document.querySelectorAll('.show_box')
let hide_box = document.querySelectorAll('.hide_box')

EducationBtn.addEventListener("click",()=>{
    show_box.forEach(SBox =>{
        SBox.style.opacity = '0';
    });
    hide_box.forEach(HBox =>{
        HBox.style.opacity = '1';
    });
})


ExperienceBtn.addEventListener("click",()=>{
    show_box.forEach(SBox =>{
        SBox.style.opacity = '1';
    });
    hide_box.forEach(HBox =>{
        HBox.style.opacity = '0';
    });
})

// MIXITUP JS FILTER
var mixer = mixitup('.project_cards')

// TESTIMONIAL SWIPER SLIDER
var testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
});

// SPOTLIGHT STORIES SWIPER
var swiper = new Swiper('.storiesSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
});
// SHOW MENU
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav')
bar.addEventListener('click',()=>{
    menu.classList.toggle('show_menu');
    menu.classList.toggle('nav_border');
})
