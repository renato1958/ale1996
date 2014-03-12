$(document).ready(function() {
	$('.left-button').mouseover(function() {
		$(this).css({
			'cursor': 'pointer',
			'background': 'url(immagini/arrow-left-hover.gif) top left no-repeat'
			});
	});
	
	$('.left-button').mouseout(function() {
		$(this).css({
			'cursor': 'arrow',
			'background': 'url(immagini/arrow-left.gif) top left no-repeat'
		});
	});

	$('.left-button').mousedown(function() {
		$(this).css({
			'cursor': 'pointer',
			'background': 'url(immagini/arrow-left-pressed.gif) top left no-repeat'
		});
	});

	$('.right-button').mouseover(function() {
		$(this).css({
			'cursor': 'pointer',
			'background': 'url(immagini/arrow-right-hover.gif) top left no-repeat'
			});
	});
	
	$('.right-button').mouseout(function() {
		$(this).css({
			'cursor': 'arrow',
			'background': 'url(immagini/arrow-right.gif) top left no-repeat'
		});
	});

	$('.right-button').mousedown(function() {
		$(this).css({
			'cursor': 'pointer',
			'background': 'url(immagini/arrow-right-pressed.gif) top left no-repeat'
		});
	});
});