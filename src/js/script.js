$(document).ready(function(){
	var slides = $('#js_slider').find('.slider__slides');
  	slides.slick({
  		prevArrow: $('#js_slider__prev-btn'),
  		nextArrow: $('#js_slider__next-btn')
  	});



  	var showSearchBtn = $('#js_header-search');
  	var searchInput = showSearchBtn.find('input')
  	showSearchBtn.on('click', function(){
  		searchInput.toggleClass('active');
  	})
  	searchInput.on('click', function(e){
  		e.stopPropagation();
  	})
});