let highScore = 500;
let myScore = 499;

if (myScore < highScore) {
    message = "you loose the game"
} else if ( myScore == highScore){
    message = "its a tie"
} else {
    message = "you crossed the high score"
}

console.log(message);
