"use strict"
document.addEventListener("DOMContentLoaded", function (){
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
})