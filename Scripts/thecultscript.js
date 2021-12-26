// Modal Close & Open Buttons
const openModalButton = document.querySelector(".hamburger-button-img");
const closeModalButton = document.querySelector(".close-modal-span");

// Modal Related Stuff
const modalBackground = document.querySelector(".modal-background-div");

// Blur Parts
const navbarPart = document.querySelector(".top-navbar");
const theCultHeaderPart = document.querySelector(".thecult-header")
const indexMainPart = document.querySelector(".index-main");
const informationFooterPart = document.querySelector(".information-footer");

// Fixed Song Button & Audio Stuff
var i = 0;
const songButton = document.querySelector(".music-play-div");
const musicToPlay = new Audio("Audio/TheFrogCult_Music.wav");
const musicPlayerImage = document.querySelector("#music-player-img");
const modalMusicButton = document.querySelector(".modal-music-button");

openModalButton.addEventListener("click", function() {
      modalBackground.style.visibility = "visible";
      modalBackground.style.opacity = "1";

      songButton.style.visibility = "hidden";

      navbarPart.style.filter = "blur(3px)";
      theCultHeaderPart.style.filter = "blur(3px)";
      indexMainPart.style.filter = "blur(3px)";
      informationFooterPart.style.filter = "blur(3px)";
});

closeModalButton.addEventListener("click", function() {
      modalBackground.style.visibility = "hidden";
      modalBackground.style.opacity = "0";

      navbarPart.style.filter = "blur(0px)";
      theCultHeaderPart.style.filter = "blur(0px)";
      indexMainPart.style.filter = "blur(0px)";
      informationFooterPart.style.filter = "blur(0px)";
});

songButton.addEventListener("click", function() {
      if (i % 2 == 0)
      {
            musicPlayerImage.src = "Images/Icons/TheFrogCult_StopIcon.svg";
            musicToPlay.play();
      }
      else 
      {
            musicPlayerImage.src = "Images/Icons/TheFrogCult_StartIcon.svg";
            musicToPlay.pause();
      }
      
      i++;
});

 modalMusicButton.addEventListener("click", function() {
      if (i % 2 == 0)
      {
            musicPlayerImage.src = "Images/Icons/TheFrogCult_StopIcon.svg";
            musicToPlay.play();
            modalMusicButton.innerHTML = "Stop Music";
      }
      else 
      {
            musicPlayerImage.src = "Images/Icons/TheFrogCult_StartIcon.svg";
            musicToPlay.pause();
            modalMusicButton.innerHTML = "Play Music";
      }
      
      modalBackground.style.visibility = "hidden";

      navbarPart.style.filter = "blur(0px)";
      theCultHeaderPart.style.filter = "blur(0px)";
      indexMainPart.style.filter = "blur(0px)";
      informationFooterPart.style.filter = "blur(0px)";

      i++;
});