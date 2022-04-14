$(document).ready(function() {

    var showHeaderAt = 150;

    var win = $(window),
        body = $('body');
    if (win.width() > 400) {
        win.on('scroll', function(e) {

            if (win.scrollTop() > showHeaderAt) {
                body.addClass('fixed');
            } else {
                body.removeClass('fixed');
            }
        });

    }

});

var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 0;
var i = 0;

autoSlides()

function plusSlides(n) {
    showSlides(slideIndex += n);

}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoSlides() {
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    showSlides(slideIndex);
    setTimeout(autoSlides, 5000); // Change image every 2 seconds
}






var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("pagination");
    if (n > slides2.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active2", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active2";
}