//Isotope active js code:
//************************

// Active isotope with jQuery code:

$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows',
	masonry: {
  columnWidth: 100,
  fitWidth: true
}
});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('activee');
	$(this).addClass('activee');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});
