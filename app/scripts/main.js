$(function () {
	$('.tlt').show().textillate();

});

// Simple elevator usage.
            var elementButton = document.querySelector('.elevator');
            //var targetDiv = document.querySelector('.current');
            var elevator = new Elevator({
                element: elementButton,
                //targetElement: targetDiv,
                duration: 29600,
                mainAudio: 'songs/motherearth.mp3', // Music from http://www.bensound.com/
                endAudio:  'songs/sound.mp3',
                startCallback: function() {
                  //$('div.current').removeClass('current');
                  //$(this).addClass



                },
                endCallback: function() {
                  $('.tlt').delay(4000).fadeTo('slow', 0.33);
                  $('.book2').fadeIn(500);
                  $('#intro').delay(5500).fadeTo('slow', 0.30);
                  $('.links').delay(7000).fadeTo('slow', 0.20);
                }
            });

function openNav() {
    	document.getElementById('mySidenav').style.width = '250px';
    	//document.getElementById('mainContainer').style.marginLeft = '250px';
    	//document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
	document.getElementById('mainContainer').style.marginLeft = '0';
	//document.body.style.backgroundColor = "white";
}

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});