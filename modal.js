let modal = document.querySelector(".modal-window");
let modalImg = document.querySelector(".modalImg");

function openModal(img) {
  modalImg.src = img.src;
  modal.classList.add("active");
}

function closeModal(img) {
  modal.classList.remove("active");
}
