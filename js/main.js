$(function() {
	$('.main__slider').slick({
		arrows: false,
		fade: true,
  		cssEase: 'linear',
  		dots: true,
  		easing: 'easeInOutBack'
	});

	$('.main__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  		// console.log(currentSlide);

  		if (currentSlide == 0 ) {
  			fitness.setAttribute('style','display:block;');
			walking.setAttribute('style','display:none;');
			diet.setAttribute('style','display:none;');
			meditation.setAttribute('style','display:none;');
			yoga.setAttribute('style','display:none;');
			running.setAttribute('style','display:none;');
  		}
  		if (currentSlide == 1 ) {
  			fitness.setAttribute('style','display:none;');
			walking.setAttribute('style','display:block;');
			diet.setAttribute('style','display:none;');
			meditation.setAttribute('style','display:none;');
			yoga.setAttribute('style','display:none;');
			running.setAttribute('style','display:none;');
  		}
  		if (currentSlide == 2 ) {
  			fitness.setAttribute('style','display:none;');
			walking.setAttribute('style','display:none;');
			diet.setAttribute('style','display:block;');
			meditation.setAttribute('style','display:none;');
			yoga.setAttribute('style','display:none;');
			running.setAttribute('style','display:none;');
  		}
  		if (currentSlide == 3 ) {
  			fitness.setAttribute('style','display:none;');
			walking.setAttribute('style','display:none;');
			diet.setAttribute('style','display:none;');
			meditation.setAttribute('style','display:none;');
			yoga.setAttribute('style','display:block;');
			running.setAttribute('style','display:none;');
  		}
  		if (currentSlide == 4 ) {
  			fitness.setAttribute('style','display:none;');
			walking.setAttribute('style','display:none;');
			diet.setAttribute('style','display:none;');
			meditation.setAttribute('style','display:block;');
			yoga.setAttribute('style','display:none;');
			running.setAttribute('style','display:none;');
  		}
  		if (currentSlide == 5 ) {
  			fitness.setAttribute('style','display:none;');
			walking.setAttribute('style','display:none;');
			diet.setAttribute('style','display:none;');
			meditation.setAttribute('style','display:none;');
			yoga.setAttribute('style','display:none;');
			running.setAttribute('style','display:block;');
  		}
	});

	
});

var fitness = document.querySelector('.fitness');
var walking = document.querySelector('.walking');
var diet = document.querySelector('.diet');
var meditation = document.querySelector('.meditation');
var yoga = document.querySelector('.yoga');
var running = document.querySelector('.running');


// Модальное окно
var go_out = document.querySelector('.go_out');
var container = document.querySelector('.container');
var bg1 =  document.querySelector('.bg1');
var bg2 =  document.querySelector('.bg2');
var overlay = document.querySelector('.overlay');
var contact_us = document.querySelector('.contact_us');
var modal = document.querySelector('.modal-window');
var modal_good = document.querySelector('.modal-window-good');

contact_us.addEventListener('click', function(){
	container.classList.add('dop');
	bg1.classList.add('dop');
	bg2.classList.add('dop');
	go_out.setAttribute('style', 'display: block;');
	overlay.setAttribute('style', 'display: block;');
	contact_us.setAttribute('style', 'display: none;');
	modal.setAttribute('style', 'display: block;');
});
go_out.addEventListener('click', function(){
	container.classList.remove('dop');
	bg1.classList.remove('dop');
	bg2.classList.remove('dop');
	go_out.setAttribute('style', 'display: none;');
	overlay.setAttribute('style', 'display: none;');
	contact_us.setAttribute('style', 'display: block;');
	modal.setAttribute('style', 'display: none;');
	modal_good.setAttribute('style', 'display: none;');
});