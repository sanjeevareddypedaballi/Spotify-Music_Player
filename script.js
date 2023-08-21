window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Enjoy Snju's playlist";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/b025.png)";
            bannerImage.setAttribute("src", "images/b025.png");
            bannerHeading.textContent = "Every Night In My Dreams";
            bannerText.textContent = "Celine dion";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b026.png)";
            bannerImage.setAttribute("src", "images/b026.png");
            bannerHeading.textContent = "Kannulatho Chooseve";
            bannerText.textContent = "Ar Rahman";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b012.png)";
            bannerImage.setAttribute("src", "images/b012.png");
            bannerHeading.textContent = "Yedhane Koyyake";
            bannerText.textContent = "Krish,Bhargavi";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b022.png)";
            bannerImage.setAttribute("src", "images/b013.jpg");
            bannerHeading.textContent = "Naalona Pongenu";
            bannerText.textContent = "Harish Raghavendra,Devan";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b020.png)";
            bannerImage.setAttribute("src", "images/b020.png");
            bannerHeading.textContent = "Yegasi Yegasi";
            bannerText.textContent = "Benny Dayal,Naresh Iyer";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b018.png)";
            bannerImage.setAttribute("src", "images/b018.png");
            bannerHeading.textContent = "Monna Kanipinchavu";
            bannerText.textContent = "Naresh Iyer,Prashanthini";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b016.png)";
            bannerImage.setAttribute("src", "images/b016.png");
            bannerHeading.textContent = "O Shanthi Shanthi";
            bannerText.textContent = "Krish,S.P.B.Charan";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b014.png)";
            bannerImage.setAttribute("src", "images/b014.png");
            bannerHeading.textContent = "Adhey Nannu";
            bannerText.textContent = "Karthik,V.Prasanna";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b013.png)";
            bannerImage.setAttribute("src", "images/b013.png");
            bannerHeading.textContent = "Nidhare Kala";
            bannerText.textContent = "Sudha Raghunathan";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.png)";
            bannerImage.setAttribute("src", "images/b010.png");
            bannerHeading.textContent = "Hukum";
            bannerText.textContent = "Anirudh Ravichander";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}