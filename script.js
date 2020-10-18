const right = document.querySelector('.slider__control_right');
const left = document.querySelector('.slider__control_left');
const slides = document.getElementsByClassName('slider__item');

let slideIndex = 1;
showSlides(slideIndex);

right.addEventListener('click', () => {
	showSlides(++slideIndex);
})

left.addEventListener('click', () => {
	showSlides(--slideIndex);
})


function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n === 0) {
		slideIndex = slides.length;
	}

	for (let slide of slides) {
		slide.style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";


}

