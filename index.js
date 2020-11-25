var readLineSync= require('readline-sync');
var userName=readLineSync.question("what's your name? ");
console.log("welcome "+userName+" Do you Know Tanay");
var score=0;
var highestScore=[{
  name:"PVR",
  score:3
},{
  name:"vineeth",
  score:2
}]
var questionOne={
  question:"Where do tanay live: ",
  answer:"Bangalore"
}

var questionTwo={
  question:"Tanay's favorite superhero: ",
  answer:"Batman"
}
var questionThree={
  question:"where do tanay work?: ",
  answer:"Microsoft"
}

var question=[questionOne,questionTwo,questionThree]

//or

 //var question[{
//   question:"Where do tanay live: ",
//   answer:"Bangalore"
// },{
//   question:"Tanay's favorite superhero: ",
//   answer:"Batman"
// },{
//   question:"where do tanay work?: ",
//   answer:"Microsoft"
// }]
//function definition 
function tanay(question,answer){
  var answerByUser=readLineSync.question(question );
  if(answerByUser===answer){
    console.log("Answer is correct");
    score++;   
  }else{
    console.log("Answer is wrong");
  }
  console.log("Current score "+ score);
  console.log("--------");
}

//function calling step
for(var i=0;i<question.length;i++){
  tanay(question[i].question,question[i].answer);
}
console.log("Your Total Score :" + score);
//showing leaderboard scores
console.log("Top Performers ");
for(var i=0;i<highestScore.length;i++){
 console.log(highestScore[i].name +"-"+ highestScore[i].score)
}