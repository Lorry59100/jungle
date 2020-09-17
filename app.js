


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
var tween = TweenMax.to("#raptor", 1, {left:1200, ease: Power4.easeIn})

var tween2 = TweenMax.to("#Trex", 1, {left:-100, ease: Power4.easeIn})

/* Scene ScrollMagic */
var scene = new ScrollMagic.Scene({triggerElement: "#animate1", offset: 400})
                                  /*  quand le triggerhook va passer à l'endroit du trigger element cela va lancer l'animation */
                                  .triggerHook(0.4)
                                  /* Ajout du curseur repère pour trigger */
                                  .addIndicators({name: "vélociraptor", colorTrigger: "red", indent: 200})
                                  /* Liaison à Greensock */
                                  .setTween(tween)
                                  /* Reverse false pour que l'anim ne se rejoue pas */
                                  .reverse(false)
                                  /* Ajout de la scène au controlleur */
                                  .addTo(controller)
