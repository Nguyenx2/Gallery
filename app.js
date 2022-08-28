const images = document.querySelectorAll(".img img")
const gallery = document.querySelector(".gallery")
const galleryImg = document.querySelector(".gallery .gallery-inner img")
const closeBtn = document.querySelector(".close")

const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  })
});

function showGallery() {
  currentIndex == images.length - 1
    ? next.classList.add('hide')
    : next.classList.remove('hide');

  currentIndex == 0
    ? prev.classList.add('hide')
    : prev.classList.remove('hide');

  gallery.classList.add('show');
  galleryImg.src = images[currentIndex].src;
}

closeBtn.onclick = () => {
  gallery.classList.remove('show');
}

next.onclick = () => {
  currentIndex != images.length - 1 ? ++currentIndex : undefined;
  showGallery();
}

prev.addEventListener("click", () => {
  currentIndex != 0 ? currentIndex-- : undefined;
  showGallery();
})