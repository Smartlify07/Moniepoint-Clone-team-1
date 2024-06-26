//using gsap for the fake horizontal scroll for the register account in five minutes
gsap.registerPlugin(ScrollTrigger);

const steps = document.querySelector(".steps");

// Check if the screen width is greater than 768px
if (window.innerWidth > 768) {
  let sections = gsap.utils.toArray(".step");

  // For the scrolling animation
  gsap.to(sections, {
    xPercent: -60 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".steps .container",
      pin: true,
      scrub: 1,
      snap: 2 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: `+=300`,
    },
  });
}

const accordionBody = document.querySelectorAll(".accordion-body");
const accordionHeader = document.querySelectorAll(".accordion-element header");
accordionHeader.forEach((header) =>
  header.addEventListener("click", (e) => {
    const accordionBody = e.currentTarget.nextElementSibling;
    accordionBody.classList.toggle("open");

    if (accordionBody.classList.contains("open")) {
      console.log(true);
      e.currentTarget.querySelector("i").style.transform = "rotate(180deg)";
    } else {
      e.currentTarget.querySelector("i").style.transform = "rotate(0deg)";
    }
  })
);

const sliderElement = document.querySelectorAll(".blog-item");
const sliderControlLeft = document.querySelector(".left");
const sliderControlRight = document.querySelector(".right");
let currentSlide = 0;
let maxSlide = sliderElement.length - 1;
sliderControlRight.addEventListener("click", () => {
  sliderElement.forEach((item, index) => {
    item.style.transform = `translateX(${index - currentSlide * 100}%)`;
  });
  if (currentSlide === maxSlide) {
    currentSlide = 0;
    console.log(currentSlide);
  } else {
    currentSlide++;
    console.log(currentSlide);
  }
});
sliderControlLeft.addEventListener("click", () => {
  sliderElement.forEach((item, index) => {
    item.style.transform = `translateX(-${index + currentSlide * 100}%)`;
  });
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
    console.log(currentSlide);
  }
});
