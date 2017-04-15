$(function () {
	$('.tlt').show().textillate();


});

$( "h1" ).click(function() {
  $( this ).fadeTo( "slow", 0.33 );
});

// Simple elevator usage.
            var elementButton = document.querySelector('.elevator');
            //var targetDiv = document.querySelector('.current');
            var elevator = new Elevator({
                element: elementButton,
                //targetElement: targetDiv,
                duration: 15000,
                mainAudio: 'songs/motherearth.mp3', // Music from http://www.bensound.com/
                endAudio:  'songs/sound.mp3',
                startCallback: function() {
                  //$('div.current').removeClass('current');
                  //$(this).addClass



                },
                endCallback: function() {
                  $(".tlt").fadeTo("slow", 0.33);

                }
            });

function openNav() {
    	document.getElementById("mySidenav").style.width = "250px";
    	document.getElementById("mainContainer").style.marginLeft = "250px";
    	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
    	document.getElementById("mySidenav").style.width = "0";
    	document.getElementById("mainContainer").style.marginLeft = "0";
    	document.body.style.backgroundColor = "white";
    }