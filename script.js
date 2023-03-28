const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl = gsap.timeline({ defaults: { duration: 1, stagger: 0.5 } });

tl.fromTo(hero, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(hero, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
  .fromTo(slider, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1")
  .fromTo(logo, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=.5")
  .fromTo(hamburger, { opacity: 0, x: -30 }, { opacity: 1, x: 0 }, "-=.5")
  .fromTo(headline, { opacity: 0, y: "100%" }, { opacity: 1, y: 0 }, "-=.5");
