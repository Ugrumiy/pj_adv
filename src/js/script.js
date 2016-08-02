$(document).ready(function(){
	var mainSlider = $('#js_main-slider').find('.main-slider__slides');
  	mainSlider.slick({
  		prevArrow: $('#js_main-slider__prev-btn'),
  		nextArrow: $('#js_main-slider__next-btn')
  	});



  var reviewSlider = $('#js_review-slider')
  var reviewSliderDots = $('#js_review-slider__dots')
    reviewSlider.slick({
      arrows: false,
      dots: true,
      appendDots: reviewSliderDots
    });



	var tabs = $('#js_tabs');
	var tabItems= tabs.find('.js_tab-item');
	var tabBodies = tabs.find('.js_tab-body');

  tabItems.filter('.active').find('.js_tab-body').slideDown(300);

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


$('.show-full-pic').on('click', function(){
  console.log(psh)
  $(this).find('.doubler').slideUp(300);
})


function initTabulator(tabulator){
  var tabListItems = tabulator.find('.js_tab-list-item');
  var tabContentItems = tabulator.find('.js_tab-content-item');
    tabListItems.on('click',function(){
      tabListItems.removeClass('active');
      $(this).addClass('active');
      tabContentItems.removeClass('active');
      tabContentItems.eq($(this).index()).addClass('active');
    }) 

}

initTabulator($('#js_tabulator'));

$(".fancybox").fancybox();

$(window).on('scroll',function(){
  if ($(window).scrollTop() > 100){
    $('.progress-bar').addClass('page-loaded')
  }
})

});


