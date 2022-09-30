let controller;
let SlideScene;

function animateSlides(){
    //Init Controller
    controller = new ScrollMagic.Controller();
    //Select some things
    const sliders = document.querySelectorAll(".slide");
    const nav = document.querySelector(".nav-header");
    //Loop over each Slide
    sliders.forEach(slide => {
        const revealImg = slide.querySelector(".reveal-img");
        const img = slide.querySelector("img");
        const revealText = slide.querySelector(".reveal-text");
        //GSAP
        const slideTL = gsap.timeline({defaults: {duration: 1, ease: "power2.inOut" }  });
        slideTL.fromTo(revealImg, {x: "0%"}, {x: "100%"});
        slideTL.fromTo(img, {x: "0%"}, {x: "100%"});
        slideTL.fromTo(revealImg, {x: "0%"}, {x: "100%"});
    })
}




animateSlides();