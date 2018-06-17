// $(document).ready(function() {





//HAVE NOT INCLUDED TIMER/WINS/LOSSES YET


var gameQuestions = [
  {
    question: "What is the secret identity of the fictional superhero Batman?",
    answer: ["Bruce Wayne", "Ryan Reynolds", "Seth Rogen", "Christian Bale"],
    correctAnswer: "0"
  },
  {
    question: "What type of beans are chickpeas known as?",
    answer: ["Limabean", "Garbanzo", "Black Bean", "Tiny Bean"],
    correctAnswer: "1"
  },
  {
    question: "What holiday is celebrated on December 26th in Canada?",
    answer: ["Boxing Day", "Hannukah", "Ramadan", "Flag Day"],
    correctAnswer: "0"
  },
  {
    question: "What is a bee's main job?",
    answer: ["Population", "Pollination", "Precipitation", "Programming"],
    correctAnswer: "1"
  },
  {
    question: "Where is Dusseldorf?",
    answer: ["Poland", "Germany", "France", "China"],
    correctAnswer: "1"
  },
  {
    question: "Who is the boy mouse in Disney?",
    answer: ["Mickey Mouse", "Minnie Mouse", "Donald Mouse", "Peter Mouse"],
    correctAnswer: "0"
  },
  {
    question:
      "Which name refers to an organism that can swim against the current?",
    answer: ["Prokaryote", "Diatom", "Plankton", "Nekton"],
    correctAnswer: "3"
  },
  {
    question: "What sport is NOT a racket sport?",
    answer: ["Tennis", "Wall Ball", "Badmitten", "Racketball"],
    correctAnswer: "1"
  },
  {
    question: "What did Clara Barton do?",
    answer: [
      "She was a nurse in the Civil War",
      "She was a President's Wife",
      "She was a scientist",
      "She was an angel"
    ],
    correctAnswer: "0"
  },
  {
    question: "Which one is not a Mario Party character?",
    answer: ["Yoshi", "Princess Peach", "Tasmanian Devil", "Luigi"],
    correctAnswer: "2"
  }
];

console.log(gameQuestions);

var correctResponses = 0;
var incorrectResponses = 0;
var timeout;
var time = 10;
var secondsLeft = 0;


function clearDiv() {
  $("#answer-div").empty();
  createQuestion();
}

function startTimer() {
    return setTimeout(clearDiv, 10000);
  }
  
  function stopTimer(timer) {
    clearTimeout(timer);
  }


// function correct() {
//   correctResponses++;
//   clearDiv();
// }

// function incorrect() {
//   incorrectResponses++;
//   clearDiv();
// }

// function countdown() {
//   secondsLeft++;
//   $("#time-remaining").text(time - secondsLeft);
//   if (secondsLeft >= time || completeQuiz) {
//     clearTimeout(timer);
//     results();
//   }
// }
// function results() {
//   $("#timer").hide();
//   $("#currentQuestion").hide();

  // for (var i=0; i < correct.length; i++) {
  //     var index = i + 1;
  //     if (correctAnswer == answerKey[i]) {
  //         correctResponses++;
  //     } else {
  //         incorrectResponses++;
  //     }
  //     }
// }



function checkAnswer(index, question) {
  if (index === +question.correctAnswer) {
    score += 1;
  }
  clearDiv();
}

function createQuestion() {
  let currentQuestion = gameQuestions.pop();
  console.log(currentQuestion);
  $("#question-div").text(currentQuestion.question);
  const questionTimer = startTimer();
  for (i = 0; i < currentQuestion.answer.length; i++) {
    let currentAnswer = document.createElement("button");
    currentAnswer.innerText = currentQuestion.answer[i];
    currentAnswer.dataset.answerChoice = i;

    // $("#correct-answers").text("Correct: " + correctResponses++);

    // $("#incorrect-answers").text("Incorrect: " + incorrectResponses++); 

    currentAnswer.onclick = () => {
      stopTimer(questionTimer);
      checkAnswer(i, currentQuestion);
    };
    $("#answer-div").append(currentAnswer);

  }
}
$("#start-button").click(createQuestion);

