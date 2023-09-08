window.onload = function () {
  var images = document.querySelectorAll("img:not(#overlay-img)");
  var overlay = document.getElementById("overlay");
  var overlayImg = document.getElementById("overlay-img");
  var overlayText = document.getElementById("overlay-text");
  var closeBtn = document.getElementById("close-btn");
  var nextBtn = document.getElementById("next-btn");
  var prevBtn = document.getElementById("prev-btn");

  // 使用一個變量來追踪當前圖片的index
  var currentImgIndex = 0;

  images.forEach(function (img, index) {
    img.addEventListener("click", function (e) {
      console.log("Image clicked!"); // Added for debugging
      currentImgIndex = index; // 更新當前圖片的index
      overlay.style.display = "flex";
      overlayImg.src = e.target.src;
      overlayText.innerHTML = e.target
        .getAttribute("data-description")
        .replace(/\n/g, "<br>");
    });
  });

  nextBtn.addEventListener("click", function () {
    if (currentImgIndex < images.length - 1) {
      currentImgIndex++;
      overlayImg.src = images[currentImgIndex].src;
      overlayText.innerHTML = images[currentImgIndex]
        .getAttribute("data-description")
        .replace(/\n/g, "<br>");
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentImgIndex > 0) {
      currentImgIndex--;
      overlayImg.src = images[currentImgIndex].src;
      overlayText.innerHTML = images[currentImgIndex]
        .getAttribute("data-description")
        .replace(/\n/g, "<br>");
    }
  });

  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });
};
