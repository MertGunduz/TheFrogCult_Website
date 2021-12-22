// Modal Close & Open Buttons
const openModalButton = document.querySelector(".hamburger-button-img");
const closeModalButton = document.querySelector(".close-modal-span");

// Modal Related Stuff
const modalBackground = document.querySelector(".modal-background-div");

// Blur Parts
const navbarPart = document.querySelector(".top-navbar");
const indexHeaderPart = document.querySelector(".index-header")
const indexMainPart = document.querySelector(".index-main");
const informationFooterPart = document.querySelector(".information-footer");

// Fixed Song Button
const songButton = document.querySelector(".music-play-div");

openModalButton.addEventListener("click", function() {
      modalBackground.style.visibility = "visible";

      songButton.style.visibility = "hidden";

      navbarPart.style.filter = "blur(5px)";
      indexHeaderPart.style.filter = "blur(5px)";
      indexMainPart.style.filter = "blur(5px)";
      informationFooterPart.style.filter = "blur(5px)";
});

closeModalButton.addEventListener("click", function() {
      modalBackground.style.visibility = "hidden";

      navbarPart.style.filter = "blur(0px)";
      indexHeaderPart.style.filter = "blur(0px)";
      indexMainPart.style.filter = "blur(0px)";
      informationFooterPart.style.filter = "blur(0px)";
});