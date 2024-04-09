import { leaveReviewModal, calculatePriсeModal } from "../main.js";

export default function initBurger() {
  const burgerElement = document.querySelector(".burger");
  const navContainer = document.querySelector(".nav__burger");
  let isOpen = false;

  const calcPriceBtn = document.querySelector(".nav__link.calculate-price");
  const leaveReviewBtn = document.querySelector(".nav__link.leave-review");

  function openNav() {
    navContainer.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    navContainer.classList.remove("active");
    document.body.style.overflow = "";
  }

  function goToLink(isExpanded, btn) {
    closeNav();
    if (btn === "calc-price") {
      calculatePriсeModal.openModal();
    }
    if (btn === "leave-review") {
      leaveReviewModal.openModal();
    }

    burgerElement.setAttribute("aria-expanded", !isExpanded);
    isOpen = !isOpen;
  }

  burgerElement.addEventListener("click", () => {
    const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
    burgerElement.setAttribute("aria-expanded", !isExpanded);
    console.log(isExpanded);
    isOpen = !isOpen;
    if (isOpen) {
      openNav();
    } else {
      closeNav();
    }
  });
  leaveReviewBtn.addEventListener("click", () =>
    goToLink(isOpen, "leave-review")
  );
  calcPriceBtn.addEventListener("click", () => goToLink(isOpen, "calc-price"));
}
