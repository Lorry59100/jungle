


/*** LOOP AUDIO ***/  

var myAudio = new Audio('https://freesound.org/data/previews/344/344204_5922762-lq.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();


/*** SCROLL MAGIC ***/

/* Controller */
var controller = new ScrollMagic.Controller();

/* Tween */
var tween = TweenMax.to("#raptor", 1, {left:800, ease: Power4.easeIn});
