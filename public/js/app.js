/*** LOOP AUDIO ***/  

/* var myAudio = new Audio('https://freesound.org/data/previews/344/344204_5922762-lq.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play(); 
 */
var raptorAudio = new Audio('https://freesound.org/data/previews/233/233279_4056007-lq.mp3'); 

function RaptorSound() {

raptorAudio.play();  

};

var trexAudio = new Audio('https://freesound.org/data/previews/233/233284_4056007-lq.mp3'); 

function TrexSound() {

trexAudio.play();  

};

/*** SCROLL MAGIC ***/

/* Controller */
var controller = new ScrollMagic.Controller();

/* Tween */
var tween = TweenMax.to("#raptor", 1, {left:850, ease: Power4.easeIn, onComplete : RaptorSound})

var tween2 = TweenMax.to("#Trex", 1, {left:-400, ease: Power4.easeIn, onComplete : TrexSound})



/* Scene ScrollMagic */

var scene = new ScrollMagic.Scene({triggerElement: "#animate1", offset: 500,})
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
                                  

var scene2 = new ScrollMagic.Scene({triggerElement: "#animate2", offset: 100})
                                  /*  quand le triggerhook va passer à l'endroit du trigger element cela va lancer l'animation */
                                  .triggerHook(0.6)
                                  /* Ajout du curseur repère pour trigger */
                                  .addIndicators({name: "trex", colorTrigger: "blue", indent: 500})
                                  /* Liaison à Greensock */
                                  .setTween(tween2)
                                  /* Reverse false pour que l'anim ne se rejoue pas */
                                  .reverse(false)
                                  /* Ajout de la scène au controlleur */
                                  .addTo(controller)
                                  
                                
                                  


                                  




