const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".social-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalText.textContent = img.dataset.info;
    modalLink.href = img.dataset.link;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
