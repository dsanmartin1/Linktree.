const images = document.querySelectorAll(".grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
