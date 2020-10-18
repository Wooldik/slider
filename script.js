const right = document.querySelector('.slider__control_right');
const left = document.querySelector('.slider__control_left');
const slides = document.getElementsByClassName('slider__item');




function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;

	} else if (n < 1) {
		slideIndex = slides.length

	}

	for (let slide of slides) {
		console.log(slide);
		slide.style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
	console.log(slideIndex);
}

