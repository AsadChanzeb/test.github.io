
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': false,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})