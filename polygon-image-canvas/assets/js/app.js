var uploadingData = null;
var container = document.querySelector(".container");
var canvasContent = document.querySelector(".canvas-content");
var polyContent = document.querySelector("#poly-content");
var zoomContent = document.querySelector("#zoom-content");
let range = document.querySelector("#poly");
let zoom = document.querySelector("#zoom");
var fileViewer = document.querySelector(".file-viewer");
let imgInput = document.getElementById("imageInput");
var polyMin = document.querySelector("#poly-min");
var polyMax = document.querySelector("#poly-max");
var zoomMin = document.querySelector("#zoom-min");
var zoomMax = document.querySelector("#zoom-max");

function setPoly() {
  polyMin.innerHTML = range.getAttribute("min");
  polyMax.innerHTML = range.getAttribute("max");
  document.querySelector("#poly-current").innerHTML = range.value;
  if (uploadingData) {
    createPolygon(uploadingData);
  }
}

function setZoom() {
  zoomMin.innerHTML = zoom.getAttribute("min") * 10;
  zoomMax.innerHTML = zoom.getAttribute("max") * 10;
  document.querySelector("#zoom-current").innerHTML = zoom.value * 10;
  container.style.transform = `scale(${zoom.value})`;
}

imgInput.addEventListener("change", function (e) {
  uploadingData = e;
  createPolygon(uploadingData);
});

function createPolygon(e) {
  canvasContent.style.display = "flex";
  polyContent.style.display = "flex";
  zoomContent.style.display = "flex";
  if (e.target.files) {
    let imageFile = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function (e) {
      fileViewer.src = e.target.result;
      fileViewer.style.display = "block";
      imgInput.style.display = "none";

      var myImage = new Image();
      myImage.src = e.target.result;
      myImage.onload = function (ev) {
        canvasContent.innerHTML = "";
        for (var i = 0; i < range.value; i++) {
          addCanvas({ img: myImage, index: i });
        }
      };
    };
  }
}

function addCanvas(e) {
  var imgWidth = e.img.width;
  var imgHeight = e.img.height;
  var widthSize = imgWidth / range.value;
  var heightSize = imgHeight;

  if (imgWidth > imgHeight) {
    widthSize = 700 / range.value;
    heightSize = 700 / (imgWidth / imgHeight);
  } else {
    widthSize = 700 / (imgHeight / imgWidth) / range.value;
    heightSize = 700;
  }

  const newCanvas = document.createElement("canvas");
  newCanvas.classList.add(`canvas-${e.index}`);
  newCanvas.width = widthSize.toFixed();
  newCanvas.height = heightSize.toFixed();
  canvasContent.style.width = `${widthSize}px`;
  canvasContent.style.height = `${heightSize}px`;

  var translateZ = 0;
  if (range.value == 3) {
    translateZ = widthSize / 2 / Math.sqrt(3);
  } else if (range.value == 4) {
    translateZ = widthSize / 2;
  } else if (range.value == 5) {
    translateZ = widthSize / 2 / Math.tan((36 * Math.PI) / 180);
  } else if (range.value == 6) {
    translateZ = (widthSize / 2 / Math.sqrt(3)) * 3;
  } else if (range.value == 7) {
    console.log("bir açı değeri : ", (128 * 4) / 7 / 2);
    console.log("A açı değeri : ", 90 - (128 * 4) / 7 / 2);
    console.log(
      "tan A değeri : ",
      Math.cos(((90 - (128 * 4) / 7 / 2) * Math.PI) / 180)
    );
    translateZ =
      (widthSize / 2) * Math.cos(((90 - (128 * 4) / 7 / 2) * Math.PI) / 180);
  }

  newCanvas.style.transform = `rotateY(${
    e.index * (360 / range.value)
  }deg) translateZ(${translateZ}px)`;

  var myContext = newCanvas.getContext("2d");

  myContext.drawImage(
    e.img,
    (e.index * imgWidth) / range.value,
    0,
    imgWidth / range.value,
    imgHeight,
    0,
    0,
    widthSize,
    heightSize
  );
  let imgData = newCanvas.toDataURL("image/jpeg");

  canvasContent.appendChild(newCanvas);
}

setPoly();
setZoom();
