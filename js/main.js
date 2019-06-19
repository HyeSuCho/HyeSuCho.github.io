$(document).ready(function() {
  
	window.scrollTo(0, 1);
	
	$('.js #menu-toggle').click(function (e) {
		$('body').toggleClass('active');
		e.preventDefault();
    });
    
    
});