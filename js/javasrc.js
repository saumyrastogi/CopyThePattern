var buttonColors=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var gamePattern=[];
var i=0;
var current=0;
$(".btn").on("click",function(){
  var userChoosenColor= this.id ;
playSound(userChoosenColor);
  userClickedPattern.push(userChoosenColor);
    animatePress(userChoosenColor);
  checkAnswer();

});

  function nextSequence(){
  var randomnumber= Math.floor(Math.random()*100)%4;
  var randomChoosenColor= buttonColors[randomnumber];
  gamePattern.push(randomChoosenColor);
  $("#"+randomChoosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColor);
 var k=i+1;
  $("h1").text("Level "+ k);

}
function checkAnswer()
{
if(userClickedPattern[current]===gamePattern[current])
{
  current=current+1;
  if(current===gamePattern.length)
  {
  userClickedPattern=[];
  current=0;
  setTimeout(function() { nextSequence(); }, 1000);
  i=i+1;
  }
}
else
{
  var audio= new Audio("sounds/wrong.mp3");
  audio.play();
  $("h1").text("Game Over ,press a key to restart!");
  $("body").addClass("game-over");
  setTimeout(function () {
  $("body").removeClass("game-over");}, 100);
  i=0;
  current=0;
  gamePattern=[];
  userClickedPattern=[];
}
}


$("body").keypress(function(){
  if($("h1").text()==="Press A Key to Start" || $("h1").text()==="Game Over ,press a key to restart!"){
     nextSequence();
    }

});


function animatePress(currentcolor){
  $("#"+currentcolor).addClass("pressed");
  setTimeout(function () {
  $("#"+currentcolor).removeClass("pressed");}, 100);
}
function playSound(name){
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}
