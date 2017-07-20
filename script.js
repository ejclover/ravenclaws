$(document).ready(function(){
    $('ul li').click(function(){
    // This function will be called every time one of the tabs is clicked
    
    var clicked_tab = $(this);
    
    // TODO Complete the next line to add the active class to the clicked tab: 
    clicked_tab.addClass('active');
    
    // TODO Complete the next line to remove the active class from the rest:
    clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');
});
    
    
    
    
 
 var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}


 


    
    

;(function(){ // Final page transition code
var animation = false,
animationstring = 'animation',
keyframeprefix = '',
domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
pfx = '',
elm = document.createElement('div');

if( elm.style.animationName !== undefined ) { animation = true; } 

if( animation === false ) {
for( var i = 0; i < domPrefixes.length; i++ ) {
if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
pfx = domPrefixes[ i ];
animationstring = pfx + 'Animation';
keyframeprefix = '-' + pfx.toLowerCase() + '-';
animation = true;
break;
}
}
}
var minloadingtime = 50
var maxloadingtime = 3000
var startTime = new Date()
var elapsedTime
var dismissonloadfunc, maxloadingtimer
if (animation && document.documentElement && document.documentElement.classList){
document.documentElement.classList.add('hidescrollbar')
window.addEventListener('load', dismissonloadfunc = function(){ // when page loads
clearTimeout(maxloadingtimer) // cancel dismissal of transition after maxloadingtime time
elapsedTime = new Date() - startTime // get time elapsed once page has loaded
var hidepageloadertimer = (elapsedTime > minloadingtime)? 0 : minloadingtime - elapsedTime
setTimeout(function(){
}, hidepageloadertimer)
setTimeout(function(){
document.documentElement.classList.remove('hidescrollbar')
}, hidepageloadertimer + 100) // 100 is the duration of the fade out effect

}, false)

maxloadingtimer = setTimeout(function(){ // force dismissal of page transition after maxloadingtime time
window.removeEventListener('load', dismissonloadfunc, false) // cancel onload event function call
document.getElementById('pageloader').classList.add('dimissloader') // dismiss transition
setTimeout(function(){
document.documentElement.classList.remove('hidescrollbar')
}, 100) // 100 is the duration of the fade out effect
}, maxloadingtime)
}
else{
document.getElementById('pageloader').style.display = 'none'
}

})();

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});
});