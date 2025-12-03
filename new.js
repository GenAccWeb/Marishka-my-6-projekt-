
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const currentElement = document.getElementById('current');
const totalElement = document.getElementById('total');


const totalSlides = slides.length;


totalElement.textContent = totalSlides;


let currentSlide = 0;


function updateSlider() {
    
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    
    currentElement.textContent = currentSlide + 1;
    
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}


function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0; 
    }
    updateSlider();
}


function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; 
    }
    updateSlider();
}


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


updateSlider();