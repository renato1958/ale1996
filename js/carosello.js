$(document).ready(function() 
    {$('div#carousel').CloudCarousel(
		{
		    xPos: 420,
				yPos: 100,
				titleBox: $('div.titolo'),
				buttonLeft: $('div.left-button'),
				buttonRight: $('div.right-button'),
				xRadius: 420,
				yRadius: 100,
				minScale: .33,
				reflHeight: 80,
				reflGap: 5, 
				FPS: 30,
				autoRotate: 'no'
		});
		});
