var slideIndex = 1;
showSlidesMan();
// Next/previous controls
function plusSlides(n) {
    showSlidesMan(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
 showSlidesMan(slideIndex = n);
}
  
function showSlidesMan(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
$('#Test').show()