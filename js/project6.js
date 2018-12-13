console.log('here');
var slideIndex = 1;
showSlides(slideIndex); //first call to set up the 1st big img and small img

// This function is called by the arrows to go left or right by adding 1 or minusing 1. At the same time, it is calling for the showslides function.
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// This function is used when clicking small img, big img comes up by calling the showSlides function.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Set varibles slides, dots, captionText for big img, small img, and caption
// Slides and dots are arrays because they are class names
// First if statement checks for if n is greater than 6( the slides length), then slideIndex =1 meaning the big img will circulate back to the first big img
// Second if statements checks for if n  is less than 1, then slideIndex = slideLength(6) meaning that big img will circulate back to the last big img.
// First for loop set var i =0, , condition is less than slides.length(6), increment increasing by 1 for each cycle. This loop is hiding all the big images
// Second for loop set var i=0, condition is less than dot.slength(6), increment increasing by 1 for each cycle. This loop is replacing all the active class to nothing
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}//circulate pictures
  if (n < 1) {slideIndex = slides.length}//circulate the other way
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //  Access the current picture we clicked on and display in block style
  dots[slideIndex-1].className += " active"; // Adding another class called active class to current small img
  captionText.innerHTML = dots[slideIndex-1].alt; // Get alt from the current image and print it out on captionText area.
}
