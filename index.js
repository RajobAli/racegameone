var bluecar = document.getElementById("bluecar");
var racecar = document.getElementById("racecar");
var result = document.getElementById("result");

var game = document.getElementById("game");
var buttonleft = document.getElementById("button");
var buttonRight = document.getElementById("buttons");


let displayScore = document.getElementById("score");
const highScoreElement = document.querySelector(".high-score");
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;

function showScore(){
    score++;
    highScore = score>=highScore ? score:highScore;
    localStorage.setItem("high-score",highScore);
    highScoreElement.innerText = `High Score : ${highScore}`;
    
}
showScore();






function mymessage2(){
  var raceCarLeft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"));
  if(raceCarLeft < 260){
    racecar.style.left = (raceCarLeft + 130) + "px";
  }
}

function mymessage1(){
 var raceCarLeft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"));
 if(raceCarLeft > 0){
    racecar.style.left = (raceCarLeft - 130) + "px";

 }


}


var count = 0;


bluecar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    bluecar.style.left = random + "px";
    count++;
    
    displayScore.innerText = `Score   :  ${count}`;   
})






window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){var raceCarLeft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"))
    if(raceCarLeft < 260){racecar.style.left = (raceCarLeft + 130) + "px"}};

    if(e.keyCode == "37"){
        {var raceCarLeft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"))
    if(raceCarLeft > 0){racecar.style.left = (raceCarLeft - 130) + "px"}};

    }
})

setInterval(function Gameover (){
    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));

    if((bluecarLeft === raceCarLeft) && (bluecarTop > 250) && (bluecarTop < 450)){
        result.style.display = "block";
        game.style.display = "none" ;
        buttonRight.style.display = "none";
        buttonleft.style.display = "none";
        score.innerHTML =  `score : ${counter}`;
        counter = 0;       
    }
},10);









