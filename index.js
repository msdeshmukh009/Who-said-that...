var readlinesync = require("readline-sync");
const chalk = require("chalk");
const log = console.log;
var score = 0;
//welcome
var userName = readlinesync.question("Hey!! what should I call you?: ")
var userResponse = readlinesync.question("Nice to meet you "+userName+". You ready to play 'Who said that?' (y/n): ");
log("-----")
if(userResponse.toUpperCase() == "Y"){
  //highscore_list
  var highScores =[
    {
      name:"Mangesh",
      score:6
    }
    ,
    {
      name:"Shubham",
      score:5
    }
    ,
    {
      name:"pankaj",
      score:4
    }
  ]

//question_list
var questions = [
  {
    question:"1)Who said“Stay Hungry, Stay foolish”\na:Elon Musk\nb:Steve Jobs\nc:Bob Marley\n",
    ans:"B",
    fact:"In 2005, during his famous commencement speech at Stanford University, Steve Jobs quoted the farewell message placed on the back cover of the 1974 edition of the Whole Earth Catalog: Stay hungry. Stay foolish."
  } 
  ,
  {
    question:"2)Who said “I came, I saw, I conquered.”\na:Julius Caesar\nb:Marcus Aurelius\nc:Alexander the Great\n",
    ans:"A",
    fact:"When Julius Caesar fought Pharnaces II of Pontus and quickly defeated him at the Battle of Zela in Asia Minor, he allegedly wrote these famous words in a letter to the Roman Senate.The year was roughly 47 B.C., and the words were written in Latin as “Veni, vidi, vici.”"
  }
  ,
  {
    question:"3)Who said “Wise man speak because they have something to say;Fools because they have to say something .”\na:Plato\nb:Socrates\nc:Chanakya\n",
    ans:"A",
    fact:"Plato was an Athenian philosopher during the Classical period in Ancient Greece, founder of the Platonist school of thought and the Academy, the first institution of higher learning in the Western world."
  }
  ,
  {
    question:"4)Who said “You cant cross the sea merely by standing and staring at the water.”\na:Ratan Tata\nb:Rabindranath Tagore\nc:Swami Vivekananda\n",
    ans:"B",
    fact:"Rabindranath Tagore FRAS was a Bengali polymath – poet, writer, playwright, composer, philosopher, social reformer and painter. He reshaped Bengali literature and music as well as Indian art with Contextual Modernism in the late 19th and early 20th centuries."
  }
  ,
  {
    question:"5)Who said “The gratest enemy of knowledge is not ignorance, It is illusion of knowledge”\na:Stephen Hawking\nb:Neil deGrasse Tyson\nc:Michio Kaku.\n",
    ans:"A",
    fact:"Famous quotes of Stephen Hawking from his famous book a brief history of time."
  }
  ,
  {
    question:"6)Who said “If you want to annoy a poet, explain his poetry.”\na:Eric Weinstein\nb:Nassim Taleb\nc:Alan Watts\n",
    ans:"B",
    fact:"Famous quote from Nassim taleb's book The Bed of Procrustes: Philosophical and Practical Aphorisms is a philosophy book written in the aphoristic style."
  }
  ,
  {
    question:"7)Who said “The tools for lerning are abundant, Its the desire to learn that's scarce.”\na:Steve Jobs\nb:Larry page\nc:Naval Ravikant\n",
    ans:"C",
    fact:"Famous quote form naval ravikant's tweet storm on education system"
  }
  ,
  {
    question:"8)Who said “And if you think tough men are dangerous, wait until you see what weak men are capable of.”\na:Jorden peterson\nb:B.F.Skinner\nc:J cole\n",
    ans:"A",
    fact:"Said Jordan B. Peterson in his famous book 12 Rules for Life: An Antidote to Chaos."
  }
]
//function_1
function quiz(question,answer){
   var userAnswer = readlinesync.question(question);
  if( userAnswer.toUpperCase() == answer ){
    log(chalk.black.bgGreen("correct!"));
    score++;
  }else{
    log(chalk.black.bgRed("Nope!!"));
  }
  log(questions[i].fact);
  log("Current Score: "+score);
  log("-----")
}
//function_2
    function highscorer(currentscore){
    if(highScores[0].score<=currentscore){
      log("Your score was "+score+"/8 & it looks like you have achieved high score.  Please send me screenshot of ths we seem to have lot common reading interests:)  ")
      }else if(highScores[1].score==currentscore){
        log("Your score was "+score+"/8 you are 2nd highest scorer please send me screenshot of this , Thank you!! for taking this quiz");
      }else if(highScores[2].score==currentscore){
        log("Your score was "+score+"/8 you are 3rd highest scorer please send me screenshot of this, Thank you!! for taking this quiz")
      }else{
        log(" Your score was "+score+"/8 looks like you didnt make into top 3 but Thanks for taking this quiz")
      }
      log("Below are current top 3 highest scores. )");
    log("-----")

  //loop_for_highScores
  for(var i =0;i<highScores.length;i++){
    log(highScores[i].name+" ==> "+ highScores[i].score)
  }
  }

//function_call_1
for(var i=0;i<questions.length;i++){
  currentQuestion=questions[i];
  quiz(currentQuestion.question,currentQuestion.ans);
}
//function_call_2
highscorer(score);

//(y/n)==n
}else{
  log("Ok take your time comeback when your ready...");
}