// gsap.from(".anim1", {
//   opacity: 0,
//   duration: 1,
//   y: -50,
//   ease: "Power2.easeInOut",
//   stagger: 0.6,
// });
// gsap.to("span", { "--scale": "0", duration: 1 });
// gsap.from(".swirl", { opacity: 0, y: 30, ease: "elastic", delay: 0.5 });
// gsap.from("aside", {
//   opacity: 0,
//   duration: 1,
//   backgroundPosition: "200px 0px",
// });

var tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".anim1", {
  opacity: 0,
  y: -50,
  ease: "Power2.easeInOut",
  stagger: 0.6,
});
tl.to("span", { "--scale": "0" }, "-=2.2");
tl.from("aside", { opacity: 0, backgroundPosition: "200px 0px" }, "-=1.5");
tl.from(".swirl", { opacity: 0, y: 30, ease: "elastic" }, "-=.5");

document.getElementById("cta").addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});
