const slides = document.getElementsByClassName('carousal-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousal-button-prev').addEventListener('click', moveToPrevSlide);
document.getElementById('carousal-button-next').addEventListener('click', moveToNextSlide);

function hideAllSlides() {
    for(let slide of slides){
        slide.classList.remove('carousal-item-visible');
        slide.classList.add('carousal-item-hidden');
    }
}

function moveToPrevSlide(){
    hideAllSlides();

    if(slidePosition === 0){
        slidePosition = totalSlides - 1;
    }else{
        slidePosition--;
    }
    slides[slidePosition].classList.add('carousal-item-visible')
}

function moveToNextSlide(){
    hideAllSlides();

    if(slidePosition === totalSlides - 1){
        slidePosition = 0;
    }else{
        slidePosition++;
    }
    slides[slidePosition].classList.add('carousal-item-visible')
}