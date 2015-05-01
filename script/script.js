$(document).ready(function() {

	// /* This is basic - uses default settings */
	
	$("a#singleImage").fancybox();
	
	// // /* Using custom settings */
	
	// // $("a#inline").fancybox({
	// // 	'hideOnContentClick': true
	// // });

	//  Apply fancybox to multiple items 
	
	$("a.multipleImages").fancybox({
		'transitionIn'	:	'none',
		'transitionOut'	:	'none',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true
	});
	
	// var $overlay = $("<div id="overlay"></div>");
	// var $image = $("<img>");
	// var $caption = $("<p></p>");
	
	// $overlay.append($image);
	// $overlay.append($caption);
	// $("body").append($overlay);
	
	// $("projectContent a").click(function() {
	// 	event.preventDefault();
	// 	var imageLocation= $(this).attr("href");
	// 	$image.attr("src", imageLocation);
	// 	$overlay.show();
	// 	var captionText  =$(this).children("img").attr("alt");
	// 	$caption.text(captionText);
	// });
	
	// $overlay.click(function(){
	// 	$overlay.hide();
	// });




});

