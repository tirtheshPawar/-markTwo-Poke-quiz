const readlineSync = require("readline-sync");
const chalk = require("chalk");
const userName = readlineSync.question(chalk.red.bgWhite.bold("Hi, How may i address you? \n"))
console.log(chalk.greenBright.bold("\nHello " + chalk.blueBright.underline(userName.toUpperCase()+"..!!")+ " let's begin the Poke Journey\n"));

// highscore data
var highscores = [{
  name: "Tirthesh",
  score: 4
},
{
  name: "Vibhav",
  score: 3
},
{
  name: "Noob101",
  score: 1
}]
// initialising score
let score = 0;
//function to play
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.bold(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.greenBright.bold("Gotcha Pokemon!\n"));
    score++;
  } else {
    console.log(chalk.red.bold("oh " + userName + " you just missed it!!\n"));
  }
  if (score <= 0) {
    score = 0
  }
}

// Q&A array of objects
var qa = [{
  question: "What is primary type of Bulbasaur?\n",
  answer: "Grass"
},
{
  question: "What is primary type of Charmander?\n",
  answer: "fire"
},
{
  question: "What Is The Full Form Of The Word Pokemon?\n",
  answer: "Pocket Monsters"
},
{
  question: "What Was Ash's First Pokemon?\n",
  answer: "Pikachu"
},
{
  question: "Who Gave Ash His First Pokemon?\n",
  answer: "Professor Oak"
}]
// randomization logic from 43-49
let newArray = [];
while (qa.length !== 0) {
  let randomIndex = Math.floor(Math.random() * qa.length);
  newArray.push(qa[randomIndex]);
  qa.splice(randomIndex, 1)
}
qa = newArray;
// for loop to run the play function 
for (i = 0; i < qa.length; i++) {
  let currentQuestion = qa[i]
  play(currentQuestion.question, currentQuestion.answer)
  
}

// To check if user has made a mark to the highest score 
for(i in highscores){
  if(score>=highscores[i].score){
    console.log(chalk.magenta.bold("Yay " + userName.toUpperCase() + " You have a new high score: " + score + "/" + qa.length))
  }else{
    console.log(chalk.magenta.bold("Yay " + userName.toUpperCase() + " You have scored: " + score + "/" + qa.length))
  }
  break
}
// To show leaderboard
console.log(chalk.greenBright.bold("\nCurrent leaderboard"))
for (i in highscores){
      console.log(chalk.blueBright(highscores[i].name), chalk.bold(highscores[i].score))
  }