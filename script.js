

// const header = document.querySelector(".header");
// const btns = header.querySelectorAll(".btn_1, .btn_2, .btn_3, .btn_4 ");



// for (const btn of btns ) {
    
        
//         btn.addEventListener("click", function changeBackground(e) {
//             console.log(e);
//             e.preventDefault();
//             btn.classList.toggle("active");
            
//         });
        
// }

var header = document.querySelector(".header");
var btns = header.querySelectorAll(".btn_1, .btn_2, .btn_3, .btn_4 ");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}





















// let slides = [...document.getElementsByClassName("slider__slide")];
// let navlinks = document.getElementsByClassName("slider__navlink");

// let currentSlide = 0;

// document.getElementById("nav-button--next").addEventListener("click", () => {
//     changeSlide(currentSlide + 1);
// });

// document.getElementById("nav-button--prev").addEventListener("click", () => {
//     changeSlide(currentSlide - 1);
// });

// function changeSlide(moveTo) {
//     if (moveTo >= slides.length) {
//         moveTo = 0;
//     }
//     if (moveTo < 0) {
//         moveTo = slides.length - 1;
//     }

//     slides[currentSlide].classList.toggle("active");
//     navlinks[currentSlide].classList.toggle("active");
//     slides[moveTo].classList.toggle("active");
//     navlinks[moveTo].classList.toggle("active");

//     currentSlide = moveTo;
// }

// document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
//     bullet.addEventListener('click', () => {
//         if (currentSlide !== bulletIndex) {
//             changeSlide(bulletIndex);
//         }
//     });
// });


// let slideLinks = [
//     "https://pawelwlo.github.io/ski/",
//     "https://pawelwlo.github.io/bean/",
//     "https://pawelwlo.github.io/weather_app/",
//     "https://pawelwlo.github.io/meme_app/",
//     "https://web-store-pawelwlo.vercel.app/",
//     "https://pawelwlo.github.io/food-app/"
// ];


// slides.forEach((slide, index) => {
//     let slideLink = slideLinks[index];
//     let imageLink = slide.querySelector("img");



//     let anchorTag = document.createElement("a");
    
    
    
//     anchorTag.href = slideLink;
    
//     anchorTag.appendChild(imageLink);
   
//     slide.innerHTML = "";
//     slide.appendChild(anchorTag);
//     console.log(anchorTag);
//     anchorTag.addEventListener("click", (event) => {
//         event.preventDefault(); // Prevent the default link behavior
//         window.open(slideLink); // Open the URL in a new tab/window
//     });
// });