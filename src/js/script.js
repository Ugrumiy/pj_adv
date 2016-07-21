$(document).ready(function(){
	var slides = $('#js_slider').find('.slider__slides');
  	slides.slick({
  		prevArrow: $('#js_slider__prev-btn'),
  		nextArrow: $('#js_slider__next-btn')
  	});

  	var tabs = $('#js_tabs');
  	var tabItems= tabs.find('.js_tab-item');
  	var tabBodies = tabs.find('.js_tab-body');
  	tabItems.on('click', function(){
  		if (!$(this).hasClass('active')){
  			tabItems.removeClass('active');
  			$(this).addClass('active');
  			tabBodies.slideUp(300);
  			$(this).find('.js_tab-body').slideDown(300);
  		}
  	})



  	var showSearchBtn = $('#js_header-search');
  	var searchInput = showSearchBtn.find('input')
  	showSearchBtn.on('click', function(){
  		searchInput.toggleClass('active');
  	})
  	searchInput.on('click', function(e){
  		e.stopPropagation();
  	})
});