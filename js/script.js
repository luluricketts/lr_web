
$(function() {

	$('#landing-img').hide().fadeIn(1000);
	$('#landing-name').hide().delay(1000).show(1000);
	$('#landing-sub').hide().delay(2000).show(1000);
	$('#landing-nav').hide().delay(3000).fadeIn(1000);
	$('#landing-connect').hide().delay(4000).fadeIn(1000);


	// timeline functionality (resume)
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
		  rect.top >= 0 &&
		  rect.left >= 0 &&
		  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	
	var items = document.querySelectorAll(".timeline li");
	 
	// code for the isElementInViewport function
	 
	function callbackFunc() {
	  for (var i = 0; i < items.length; i++) {
		if (isElementInViewport(items[i])) {
		  items[i].classList.add("in-view");
		}
	  }
	}
	 
	window.addEventListener("load", callbackFunc);
	window.addEventListener("scroll", callbackFunc);

	// about page
	var DS_clicks = 0;
	var SW_clicks = 0;
	var R_clicks = 0;
	$('#about-DS').hide()
	$('#btn-DS').on('click', function() {
		$('#about-DS').slideToggle(1000);
		if (DS_clicks % 2 == 0) {
			$('#inner-DS').css({'height':'100%'});
			$('#btn-DS').delay(1000).html('Close');
		} else {
			$('#inner-DS').delay('1000').queue(function(next) {
				$(this).css({'height': ''});
				$('#inner-DS').css({'height': '200px'});
				$('#btn-DS').delay(1000).html('Learn more');
				next();
			});
		}
		DS_clicks ++;
	});
	$('#about-SW').hide()
	$('#btn-SW').on('click', function() {
		$('#about-SW').slideToggle(1000);
		if (SW_clicks % 2 == 0) {
			$('#inner-SW').css({'height':'100%'});
			$('#btn-SW').delay(1000).html('Close');
		} else {
			$('#inner-SW').delay('1000').queue(function(next) {
				$(this).css({'height': ''});
				$('#inner-SW').css({'height': '200px'});
				$('#btn-SW').delay(1000).html('Learn more');
				next();
			});
		}
		SW_clicks ++;
	});
	$('#about-R').hide()
	$('#btn-R').on('click', function() {
		$('#about-R').slideToggle(1000);
		if (R_clicks % 2 == 0) {
			$('#inner-R').css({'height':'100%'});
			$('#btn-R').delay(1000).html('Close');
		} else {
			$('#inner-R').delay('1000').queue(function(next) {
				$(this).css({'height': ''});
				$('#inner-R').css({'height': '200px'});
				$('#btn-R').delay(1000).html('Learn more');
				next();
			});
		}
		R_clicks ++;
	});
});

