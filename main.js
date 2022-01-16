// navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  }
  else {
  navbar.classList.remove("sticky");
  }
}
// nav
document.getElementById("nav-toggle").addEventListener("click", (e)=>{
  e.preventDefault();
      var element = document.getElementById("header")
      element.classList.toggle("mystyle");
       console.log('temptation');
});
// slideshow
var slideIndex = 1;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" sactive", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " sactive";
}
