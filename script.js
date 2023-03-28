const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const plane = document.querySelector(".paper-plane");
const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  path: [
    { x: window.innerWidth / 24, y: -20 },
    { x: window.innerWidth / 8, y: 10 },
    { x: window.innerWidth / 4.8, y: 100 },
    { x: window.innerWidth / 3.2, y: -100 },
    { x: window.innerWidth / 6.85, y: -50 },
    { x: window.innerWidth / 4, y: 100 },
    { x: window.innerWidth / 3, y: 0 },
    { x: window.innerWidth / 2, y: 500 },
  ],
};
console.log(window.innerWidth);
//100, 300,500,750,350,600,800
// 10,100,-100,-50,100,0
const tl = gsap.timeline({ defaults: { duration: 1, stagger: 0.5 } });

tl.fromTo(hero, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(hero, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
  .fromTo(slider, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1")
  .fromTo(logo, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=.5")
  .fromTo(hamburger, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, "-=.5")
  .fromTo(headline, { opacity: 0, y: "100%" }, { opacity: 1, y: 0 }, "-=.5");

const planetl = gsap.timeline();

planetl.to(plane, {
  motionPath: flightPath,
  ease: Power2.easeInOut,
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 3000,
  triggerHook: 0,
})
  .setTween(planetl)
  .setPin(".animation")
  .addIndicators({
    name: "mayday",
    indent: 100,
  })
  .addTo(controller);
