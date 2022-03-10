var slideIndex = 0;
showSlides();

function plusSlides(n){
    if (n = 1){
        showSlidesRight(slideIndex += n);
        console.log(n)
    }
    if (n = -1){
        showSlidesRight(slideIndex += n);
        console.log(n)
    }
};

function currentSlide(n) {
    showSlidesMan(slideIndex = n);
    console.log(n)
};



function showSlidesRight(n) {
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
    $(slides[slideIndex-1]).show()
    dots[slideIndex-1].className += " active";
    }

