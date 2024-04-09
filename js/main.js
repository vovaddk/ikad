import initModalWindow from "./components/modal.js";
import initSlider from "./components/slider.js";
import initAccordion from "./components/accordion.js";
// Modal window initialization
const leaveReviewModal = initModalWindow(
  ".modal",
  ".btn-leave-review",
  ".btn-close-modal",
  ".overlay"
);

const calculatePriсeModal = initModalWindow(
  ".modal.modal__calculate",
  ".btn-calculate-price",
  ".btn-close-сalculated",
  ".overlay",
  true
);

// Slider initialization
const gallerySlider = initSlider(
  ".gallery-slide",
  ".gallery__container .gallery-navigation__mobile .btn-next",
  ".gallery__container .gallery-navigation__mobile .btn-prev",
  ".gallery-images"
);
const testimonialSlider = initSlider(
  ".testimonial__item",
  ".testimonials__container .testimonial__navigaion .btn-next",
  ".testimonials__container .testimonial__navigaion .btn-prev",
  ".testimonial__component",
  ".dots__testimonial",
  ".item__box"
);
const furnitureSlider = initSlider(
  ".slide",
  ".furniture__container .btn-next",
  ".furniture__container .btn-prev",
  ".furniture__images",
  ".dots"
);
// Accordion
initAccordion();
var burgerMenu = document.getElementById("burgerMenu");
burgerMenu.addEventListener("click", function () {
  initModalWindow.style.display = "block";
});
