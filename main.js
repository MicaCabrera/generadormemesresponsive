const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let linkUrl = $("#url");
let putImage = $("#img-meme");

linkUrl.addEventListener("input", (event) => {
  let imageSrc = event.target.value;
  putImage.src = imageSrc;
});

let inputColor = $("#color");
let backgroundMeme = $("#contain-img");
let hexaBackImg = $(".hexa-color-background");
let inputColorValue = inputColor.value;
hexaBackImg.innerHTML = `${inputColorValue}`;

inputColor.addEventListener("change", (event) => {
  let color = event.target.value;
  backgroundMeme.style.backgroundColor = color;
  inputColorValue = color;
  hexaBackImg.innerHTML = `${inputColorValue}`;
});

let containImgMeme = $("#img-meme");
let inputBrigthness = $("#brigthness");
let inputOpacity = $("#opacityInput");
let inputContrast = $("#contraste");
let inputBlur = $("#blur");
let inputGrayScale = $("#gray-scale");
let inputSepia = $("#sepia");
let inputHue = $("#hue");
let inputSaturate = $("#saturate");
let inputNegative = $("#negative");

let changeFilters = () => {
  containImgMeme.style.filter = `brightness(${inputBrigthness.value}) contrast(${inputContrast.value}%) grayscale(${inputGrayScale.value}%)
  sepia(${inputSepia.value}%) hue-rotate(${inputHue.value}deg) saturate(${inputSaturate.value}%) invert(${inputNegative.value}%) opacity(${inputOpacity.value}%)
  blur(${inputBlur.value}px)`;
};

inputBrigthness.addEventListener("change", changeFilters);
inputContrast.addEventListener("change", changeFilters);
inputGrayScale.addEventListener("change", changeFilters);
inputSepia.addEventListener("change", changeFilters);
inputHue.addEventListener("change", changeFilters);
inputSaturate.addEventListener("change", changeFilters);
inputNegative.addEventListener("change", changeFilters);
inputOpacity.addEventListener("change", changeFilters);
inputBlur.addEventListener("change", changeFilters);

let restartFilters = (event) => {
  inputBrigthness.value = 1;
  inputContrast.value = 100;
  inputGrayScale.value = 0;
  inputSepia.value = 0;
  inputHue.value = 0;
  inputSaturate.value = 100;
  inputNegative.value = 0;
  inputOpacity.value = 100;
  inputBlur.value = 0;

  changeFilters();
};

let btnRestart = $("#restart");
btnRestart.addEventListener("click", restartFilters);
let memardo = $("#memeId");
let btnDownload = $("#btn-download");

const nameQuestion = () => prompt("Ponele un nombre a tu memaso:");

const downloadMemardo = () => {
  domtoimage.toBlob(memardo).then(function (blob) {
    saveAs(blob, nameQuestion());
  });
};

btnDownload.addEventListener("click", downloadMemardo);

let superiorText = $("#superior-text");
let bottomText = $("#inferior-text");
let topText = $("#top-text");
let inferiorText = $("#bottom-text");

superiorText.addEventListener("input", (event) => {
  topText.innerText = event.target.value;
});

bottomText.addEventListener("input", (event) => {
  inferiorText.innerText = event.target.value;
});

let checkTextSuperior = $("#check-top");
let checkTextInferior = $("#check-bottom");

checkTextSuperior.addEventListener("click", (event) => {
  if (checkTextSuperior.checked) {
    topText.style.display = "none";
  } else {
    topText.style.display = "block";
  }
});

checkTextInferior.addEventListener("click", (event) => {
  if (checkTextInferior.checked) {
    inferiorText.style.display = "none";
  } else {
    inferiorText.style.display = "block";
  }
});

let selectText = $("#select-fonts");

topText.style.fontFamily = "Impact";
inferiorText.style.fontFamily = "Impact";

selectText.addEventListener("change", (event) => {
  let indexFont = event.target.selectedIndex;

  console.log(indexFont);
  switch (indexFont) {
    case 0:
      topText.style.fontFamily = "Impact";
      inferiorText.style.fontFamily = "Impact";
      break;
    case 1:
      topText.style.fontFamily = "Arial";
      inferiorText.style.fontFamily = "Arial";
      break;
    case 2:
      topText.style.fontFamily = "Arial Black";
      inferiorText.style.fontFamily = "Arial Black";
      break;
    case 3:
      topText.style.fontFamily = "American Typewriter";
      inferiorText.style.fontFamily = "American Typewriter";
      break;
    case 4:
      topText.style.fontFamily = "Andale Mono,AndaleMono,monospace";
      inferiorText.style.fontFamily = "Andale Mono,AndaleMono,monospace";
      break;
    case 5:
      topText.style.fontFamily = "Comic Sans MS";
      inferiorText.style.fontFamily = "Comic Sans MS";
      break;
    case 6:
      topText.style.fontFamily = "Helvetica";
      inferiorText.style.fontFamily = "Helvetica";
      break;
    case 7:
      topText.style.fontFamily = "Verdana";
      inferiorText.style.fontFamily = "Verdana";
      break;
    case 8:
      topText.style.fontFamily = "Times New Roman";
      inferiorText.style.fontFamily = "Times New Roman";
      break;
  }
});

let sizeInput = $("#number-fonts");

sizeInput.addEventListener("input", (event) => {
  sizeFonts = event.target.value;
  topText.style.fontSize = `${sizeFonts}px`;
  inferiorText.style.fontSize = `${sizeFonts}px`;
});

let btnLeft = $("#btn-left");
let btnCenter = $("#btn-center");
let btnRight = $("#btn-right");

btnLeft.addEventListener("click", (event) => {
  topText.style.textAlign = "left";
  inferiorText.style.textAlign = "left";
});

btnCenter.addEventListener("click", (event) => {
  topText.style.textAlign = "center";
  inferiorText.style.textAlign = "center";
});

btnRight.addEventListener("click", (event) => {
  topText.style.textAlign = "right";
  inferiorText.style.textAlign = "right";
});

let backgroundTxt = $(".spacing-text-sup");
let backgroundTxtB = $(".spacing-text-inf");
let colorText = $("#input-color-text");
let colorBackText = $("#input-color-fondo");
let hexaColor = $(".hexa-color-text");
let hexaBack = $(".hexa-color-back");

let hexaValueColor = colorText.value;
hexaColor.innerHTML = `${hexaValueColor}`;

let hexaValueBack = colorBackText.value;
hexaBack.innerHTML = `${hexaValueBack}`;

const colorTextChange = (event) => {
  const colorTextMeme = event.target.value;
  topText.style.color = colorTextMeme;
  inferiorText.style.color = colorTextMeme;
  hexaValueColor = colorTextMeme;
  hexaColor.innerHTML = `${hexaValueColor}`;
};

const backgroundColorText = (event) => {
  const colorBackgroundMeme = event.target.value;
  backgroundTxt.style.backgroundColor = colorBackgroundMeme;
  backgroundTxtB.style.backgroundColor = colorBackgroundMeme;
  hexaValueBack = colorBackgroundMeme;
  hexaBack.innerHTML = `${hexaValueBack}`;
};

colorText.addEventListener("input", colorTextChange);
colorBackText.addEventListener("input", backgroundColorText);

let transparentBackground = $("#check-transparent");

transparentBackground.addEventListener("click", (event) => {
  if (transparentBackground.checked) {
    console.log("marcado");
    backgroundTxt.style.backgroundColor = "transparent";
    backgroundTxtB.style.backgroundColor = "transparent";
  } else {
    backgroundTxt.style.backgroundColor = colorBackText.value;
    backgroundTxtB.style.backgroundColor = colorBackText.value;
  }
});

const outlineNone = $("#btn-outline-none");
const outlineLight = $("#btn-outline-light");
const outlineDark = $("#btn-outline-dark");

outlineDark.addEventListener("click", (event) => {
  topText.style.textShadow = "3px 3px";
  inferiorText.style.textShadow = "3px 3px";
});

outlineLight.addEventListener("click", (event) => {
  topText.style.textShadow = "2px 2px";
  inferiorText.style.textShadow = "2px 2px";
});

outlineNone.addEventListener("click", (event) => {
  topText.style.textShadow = "0px 0px";
  inferiorText.style.textShadow = "0px 0px";
});

let paddingTextSup = $(".spacing-text-sup");
let paddingTextInf = $(".spacing-text-inf");
const spacingInput = $("#spacing-input");

spacingInput.addEventListener("input", (event) => {
  let valueInput = spacingInput.value;
  paddingTextSup.style.padding = `${valueInput}px`;
});

spacingInput.addEventListener("input", (event) => {
  let valueInput = spacingInput.value;
  paddingTextInf.style.padding = `${valueInput}px`;
});

const lineSpacingInput = $("#line-spacing");

const lineSpacing = () => {
  topText.style.lineHeight = lineSpacingInput.value;
  inferiorText.style.lineHeight = lineSpacingInput.value;
};

lineSpacingInput.addEventListener("change", lineSpacing);

const btnAsideImg = $("#btn-aside-img");
const btnAsideTxt = $("#btn-aside-txt");
let asideImg = $(".section-filters-url");
let asideTxt = $(".aside-text");

const changeAsideImg = () => {
  asideTxt.classList.add("change-aside");
  asideImg.classList.remove("change-aside");
};

const changeAsideTxt = () => {
  asideImg.classList.add("change-aside");
  asideTxt.classList.remove("change-aside");
};

btnAsideImg.addEventListener("click", changeAsideImg);
btnAsideTxt.addEventListener("click", changeAsideTxt);

document
  .getElementById("btn-dark-light")
  .addEventListener("click", function () {
    var body = document.body;
    var header = document.querySelector("header");
    var aside1 = document.querySelector(".section-filters-url");
    var aside2 = document.querySelector(".aside-text");
    var h1 = document.querySelector("h1");
    var fontElements = document.querySelectorAll(".ligthModeFont");
    var btnDarkLight = document.getElementById("btn-dark-light");

    if (body.classList.contains("lightModeBody")) {
      body.classList.remove("lightModeBody");
      header.classList.remove("lightModeHeader");
      aside1.classList.remove("lightModeAside");
      aside2.classList.remove("lightModeAside");
      h1.classList.remove("lightModeTitle");

      fontElements.forEach(function (element) {
        element.classList.remove("ligthModeFont");
      });

      btnDarkLight.innerText = "Modo claro";
    } else {
      body.classList.add("lightModeBody");
      header.classList.add("lightModeHeader");
      aside1.classList.add("lightModeAside");
      aside2.classList.add("lightModeAside");
      h1.classList.add("lightModeTitle");

      fontElements.forEach(function (element) {
        element.classList.add("ligthModeFont");
      });

      btnDarkLight.innerText = "Modo oscuro";
    }
  });
