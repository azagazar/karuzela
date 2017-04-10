$(function(){
        var carousel = $('.carousel ul');
        
        function changeSlide () {
        	carousel.animate({'marginLeft':-400}, 500, moveFirstSlide);
        }

        setInterval(changeSlide, 3000);
        
		function moveFirstSlide () {

			var firstItem = carousel.find("li:first");
			var lastItem = carousel.find("li:last");

			lastItem.after(firstItem)

			carousel.css({marginLeft:0});
		}

			
	});