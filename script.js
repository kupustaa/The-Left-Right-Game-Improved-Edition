var score = 0;
var highScore = 0;
var startGame = function(){
scoreCheck = function(){
if (score > highScore){
       return highScore++;
       
    }
};   

var userChoice = prompt("Choose left or right.","Type your choice here.").toLowerCase();

var choiceLock = function(y){
if(y !== "right" && y !== "left"){
        if(y === null){
        console.log(null);
    }
         else{     
         confirm(y + " is an invalid entry.");
	 startGame();
    }
    }
else {
	compare(userChoice,computerChoice);
}
};

var computerChoice = Math.random();
    if (computerChoice < 0.50){
        computerChoice = "left";
    }
    else {
        computerChoice = "right";
    }

var compare = function(choice1,choice2){
    if (choice1 === choice2){
        if (score === 1){
            if (confirm("You died. You survived "+score+" time. Try again?")){
           
           score = 0;
           startGame();
          
	   }
	    else {
		   alert("Thanks for playing!");
		   score = 0;
	   }
        }
        else{
           if (confirm("You died. You survived "+score+" times. Try again?")){
           
           score = 0;
           startGame();
          
	   }
	    else {
		   alert("Thanks for playing!");
		   score = 0;
	   }
    }
    }
    else {
        if(confirm("You survived...")){
         score++;
         scoreCheck();
         startGame();
         document.getElementById("highScore").innerHTML = highScore;
        }
        else{
            score++;
            alert("You're doing well! You have currently survived "+score+" times, but the computer is still looking for you...");
        }
        
    }
};

choiceLock(userChoice);

};
