// modal params
export default function initModalWindow(
  modalContainer,
  btnOpenModal,
  btnCloseModal,
  modalOverlay,
  isMultipleBtns = false
) {
  const modal = document.querySelector(`${modalContainer}`);
  const btnOpen = isMultipleBtns
    ? document.querySelectorAll(`${btnOpenModal}`)
    : document.querySelector(`${btnOpenModal}`);
  const btnClose = document.querySelector(`${btnCloseModal}`);
  const overlay = document.querySelector(`${modalOverlay}`);

  function openModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeModal(e) {
    e.preventDefault();
    modal.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
  isMultipleBtns
    ? btnOpen.forEach((btn) => btn.addEventListener("click", openModal))
    : btnOpen.addEventListener("click", openModal);
  btnClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  if (!modal) {
    throw new Error(`No element found with selector ${modalContainer}`);
  }
  return { openModal, closeModal };
}
$(document).ready(function () {
  $(".modal-input-label").on("input", function () {
    if ($(this).val()) {
      $(this).addClass("filled");
    } else {
      $(this).removeClass("filled");
    }
  });
});
