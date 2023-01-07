$(document).ready(function() {
	// Burger Menu JS
	$(".burger-menu").click(function () {
		// Burger Menu JS
		$(this).toggleClass("active");
		// Header JS
		$(".bg-header-desktop").toggleClass("active");
		// Sidebar JS
		$(".fixed-sidebar").toggleClass("active");
		// Wrapper JS
		$(".wrapper").toggleClass("active");
	});
	// Sidebar Menu Close JS (Mobile)
	$(".fixed-sidebar-heading > i").click(function() {
		// Burger Menu JS
		$(".burger-menu").removeClass("active");
		// Sidebar JS
		$(".fixed-sidebar").removeClass("active");
	});
	// Sidebar Menu JS
	$(".sidebar-menu-listing > li > a").click(function() {
		$(this).parent().parent().find('ul').slideUp(700);
		$(".sidebar-menu-listing > li > a").parent().removeClass("active");
		$(this).parent().addClass("active");
		if(!$(this).next().is(":visible")) {
			$(this).next().slideDown(700);
			$(this).parent().addClass("active");
		}
	});
	// Header Menu JS
	$(".header-sub-menu-listing").slideUp(700);
	$(".header-menu-listing > li > a.profile").click(function(event) {
		event.preventDefault();
		$(".header-sub-menu-listing").slideToggle(700);
	});
	$("#example_length").children().children().addClass("form-control");
	// Simple SumoSelect JS
	$(".sumoselect.search").SumoSelect({
		search: true,
		searchText: "Search"
	});
	// SumoSelect City JS
	$(".sumoselect.city").SumoSelect({
		search: true,
		searchText: "Search",
		clearAll: true
	});
	// Input Mask
  altair_form_adv.masked_inputs();
});
// masked_inputs
altair_form_adv = {
	masked_inputs: function() {
		$maskedInput = $('.masked_input');
		if($maskedInput.length) {
				$maskedInput.inputmask();
		}
	}
}