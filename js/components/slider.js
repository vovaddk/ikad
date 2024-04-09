export default function initSlider(
  content,
  buttonNext,
  buttonPrev,
  container,
  dots = null,
  itemHeight = null
) {
  const sliderSlides = document.querySelectorAll(`${content}`);
  const btnNext = document.querySelector(`${buttonNext}`);
  const btnPrev = document.querySelector(`${buttonPrev}`);
  const sliderContainer = document.querySelector(`${container}`);
  const itemHeightBox = document.querySelectorAll(`${itemHeight}`);
  let touchStartX = 0;
  let touchEndX = 0;
  let curSlide = 0;

  const maxSlides = sliderSlides.length;
  const dotContainer = document.querySelector(`${dots}`);
  function handleResize() {
    if (window.innerWidth < 768) {
      goToSlide(0);
    } else {
      sliderContainer.style.height = "";
    }
  }
  window.addEventListener("resize", handleResize);
  function createDots(maxSlides) {
    if (dotContainer) {
      for (let i = 0; i < maxSlides; i++) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      }
    }
  }
  createDots(maxSlides);

  function activateDot(slide) {
    if (dotContainer) {
      dotContainer
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));
      dotContainer
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    }
  }
  activateDot(0);

  function goToSlide(slide) {
    if (window.innerWidth < 768) {
      if (itemHeight !== null) {
        itemHeightBox.forEach((item, i) => {
          sliderContainer.style.height =
            itemHeightBox[slide].offsetHeight + 96 + "px";
        });
      }
    }
    sliderSlides.forEach((s, i) => {
      s.style.left = `${
        (s.naturalWidth === undefined
          ? s.clientWidth + 24
          : s.naturalWidth + 24) *
        (i - slide)
      }px`;
    });
    if (dotContainer) {
      dotContainer.querySelectorAll(".dots__dot").forEach((dot, i) => {
        dot.style.left = `${16 * (i - slide)}px`;
      });
    }
    slide !== 0
      ? btnPrev.classList.add("active")
      : btnPrev.classList.remove("active");

    slide !== maxSlides - 1
      ? btnNext.classList.add("active")
      : btnNext.classList.remove("active");
  }
  goToSlide(0);

  function nextSlide() {
    curSlide === maxSlides - 1 ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide, 1);
    activateDot(curSlide);
  }

  function prevSlide() {
    curSlide === 0 ? (curSlide = maxSlides - 1) : curSlide--;
    goToSlide(curSlide, 0);
    activateDot(curSlide);
  }

  sliderContainer.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
  });

  sliderContainer.addEventListener("touchmove", (event) => {
    touchEndX = event.touches[0].clientX;
  });

  sliderContainer.addEventListener("touchend", (event) => {
    const touchDifference = touchStartX - touchEndX;
    if (touchDifference > 50) {
      nextSlide("furniture");
    } else if (touchDifference < -50) {
      prevSlide("furniture");
    }
  });

  btnNext.addEventListener("click", () => nextSlide());
  btnPrev.addEventListener("click", () => prevSlide());

  document.addEventListener("keydown", function (e) {});
  dotContainer &&
    dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(Number(slide), 1);
        activateDot(Number(slide));
      }
    });
}
