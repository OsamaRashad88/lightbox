var allimages = Array.from(document.querySelectorAll(".lightbox img"));
var layer = document.querySelector(".layer");
var layerChild = document.querySelector(".layer-child");
var nextBtn = document.querySelector("#nextBtn");
var prevBtn = document.querySelector("#prevBtn");
var closebtn = document.querySelector("#closebtn");

var currentIndex = 0;

for (i = 0; i < allimages.length; i++) {
  allimages[i].addEventListener("click", function (e) {
    var copySrc = e.target.getAttribute("src");
    currentIndex = allimages.indexOf(e.target);
    layer.classList.replace("d-none", "d-flex");
    layerChild.style.backgroundImage = `url(${copySrc})`;
  });
}
closebtn.addEventListener("click", closelayer);
nextBtn.addEventListener("click", nextslide);
prevBtn.addEventListener("click", prevslide);
function closelayer() {
  layer.classList.replace("d-flex", "d-none");
}

function nextslide() {
  currentIndex++;
  if (currentIndex == allimages.length) {
    currentIndex = 0;
  }
  layerChild.style.backgroundImage = `url(${allimages[
    currentIndex
  ].getAttribute("src")}
  )`;
}
function prevslide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = allimages.length - 1;
  }
  layerChild.style.backgroundImage = `url(${allimages[
    currentIndex
  ].getAttribute("src")})`;
}
document.addEventListener("keyup", function (e) {
  if (layer.classList.contains("d-flex")) {
    switch (e.key) {
      case "ArrowLeft":
        prevslide();
        break;
      case "ArrowRight":
        nextslide();
        break;
      case "Escape":
        closelayer();
        break;
    }
  }
});
