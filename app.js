var slides = document.querySelectorAll('.slide');
var boutons = document.querySelectorAll('.btn')
let currentSlide = 1;

var manualNav = function(manual){
    slides.forEach((slide) =>{
        slide.classList.remove('active')

        boutons.forEach((btn) =>{
            btn.classList.remove('active')
        })
    })

    slides[manual].classList.add('active')
    boutons[manual].classList.add('active')
}

boutons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    })
});