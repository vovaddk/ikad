export default function initAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion__header");
  accordionHeaders.forEach((header, index) => {
    header.addEventListener("click", function () {
      const allDescriptionElements = document.querySelectorAll(
        ".description__element"
      );
      const allMobileProcessElements = document.querySelectorAll(
        ".working-process__mobile"
      );
      const allDesktopProcessElements = document.querySelectorAll(
        ".working-process__desktop"
      );
      allDescriptionElements.forEach((element) => {
        element.classList.remove("active");
      });
      allMobileProcessElements.forEach((element) => {
        element.classList.remove("active");
      });
      allDesktopProcessElements.forEach((element) => {
        element.classList.remove("active");
      });
      allDescriptionElements[index].classList.add("active");
      allMobileProcessElements[index].classList.add("active");
      allDesktopProcessElements[index].classList.add("active");
    });
  });
}
