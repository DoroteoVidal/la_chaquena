"use strict"
document.addEventListener("DOMContentLoaded", function (){

    window.onscroll = function() {myFunction()};

    let header = document.getElementById("myHeader");
    let sticky = header.offsetTop;

    function myFunction() {
        if(window.innerWidth < 621) {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }


    let hamburger = document.querySelector('#hamburger');
    let homeNavbarList = document.querySelector(".home-navbar");

    hamburger.addEventListener("click", ()=>{
        homeNavbarList.classList.toggle("show");
    })


    const track = document.querySelectorAll('.carousel-track');
    
    track.forEach((item, i) => {
        const slides = Array.from(track[i].children);
        let slideWidth = item.getBoundingClientRect().width;

        let currentIndex = 0;

        function moveToNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            const amountToMove = -slideWidth * currentIndex;
            track[i].style.transform = `translateX(${amountToMove}px)`;
        }

        setInterval(moveToNextSlide, 3000);
    })


    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    const textSlides = document.querySelectorAll('.text-slides li');
    const totalSlides = slides.length;
    const totalTextSlides = textSlides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });

        textSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    setInterval(nextSlide, 5000);
})