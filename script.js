// 10 QUERSTIONS / GAME
// X TIME / QUESTION
// RANDOMISE ORDER OF QUESTIONS
// CORRECT/TRUE ANSWER -> BACKGROUND GREEN
// WRONG/FALSE ANSWER -> BACKGROUND RED AND THEN CORRECT IN GREEN
// AUTOMATIC MOVE TO NEXT QUESTION
// X SECONDS DELAY BETWEEN ANSWER AND NEW QUESTION
// QUIZ QUESTION BLUEPRINT - CLASS
// INJECT CLASS INTO HTML
// LOOP THROUGH QUESTIONS
// CLICK EVENT ON ANSWERS AND 'PLAY AGAIN'
// END OF GAME -> DISPLAY NUMBER OF CORRECT ANSWERS -> SOME MESSAGE AND PLAY AGAIN OPTION
// CLEAN SWEEP -> TIME/SPEED TO COMPLETE -> A CELEBRATION(ANIMATION) AND PLAY AGAIN OPTION

console.dir(document);

const quizQuestionCard = document.querySelector(".quizQuestionCard");

const startBtn = document.querySelector(".start-game");

class QuizQuestionCard {
  constructor(
    image,
    caption,
    answerA,
    answerB,
    answerC,
    answerD,
    correctAnswer
  ) {
    (this.image = image),
      (this.caption = caption),
      (this.answerA = answerA),
      (this.answerB = answerB),
      (this.answerC = answerC),
      (this.answerD = answerD),
      (this.correctAnswer = correctAnswer);
    // this.answers = [{
    //   answer: "Sydney",
    //   isCorrect: true,
    // }]
  }

  renderQuestionHTML() {
    return `  
      <h4 class="score">Score <span class="score__num">${score}</span></h4>  
      <figure class="quizQuestionCard__question">
        <img class="quizQuestionCard__img" src=${this.image} alt="" />
        <p class="quizQuestionCard__caption">${this.caption}</p>
      </figure>

      <div class="quizQuestionCard__answerBtn">
        <p class="quizQuestionCard__option">A</p>
        <p class="quizQuestionCard__answer">${this.answerA}</p>
      </div>

      <div class="quizQuestionCard__answerBtn">
        <p class="quizQuestionCard__option">B</p>
        <p class="quizQuestionCard__answer">${this.answerB}</p>
      </div>

      <div class="quizQuestionCard__answerBtn">
        <p class="quizQuestionCard__option">C</p>
        <p class="quizQuestionCard__answer">${this.answerC}</p>
      </div>

      <div class="quizQuestionCard__answerBtn">
        <p class="quizQuestionCard__option">D</p>
        <p class="quizQuestionCard__answer">${this.answerD}</p>
      </div>      
  `;
  }
}

const questionArr = [];

const buildQuestionArr = () => {
  const question1 = new QuizQuestionCard(
    "./images/question-1.png",
    "What is the capital of New Zealand?",
    "Christchurch",
    "Auckland",
    "Wellington",
    "Hamilton",
    "Wellington"
  ); // Wellington
  const question2 = new QuizQuestionCard(
    "./images/king-henry-viii.png",
    "How many of Henry VIII’s wives were called Catherine?",
    "2",
    "3",
    "4",
    "5",
    "3"
  ); // 3
  const question3 = new QuizQuestionCard(
    "./images/baker's-dozen.jpg",
    "What number is a baker’s dozen?",
    "6",
    "11",
    "12",
    "13",
    "13"
  ); // 13
  const question4 = new QuizQuestionCard(
    "./images/olympic-flag.jpg",
    "Which city hosted the 2000 Summer Olympics?",
    "Athens",
    "Atlanta",
    "Beijing",
    "Sydney",
    "Sydney"
  ); // Sydney
  const question5 = new QuizQuestionCard(
    "./images/madonna.jpg",
    "In what decade was pop icon Madonna born?",
    "1940s",
    "1950s",
    "1960s",
    "1970s",
    "1950s"
  ); // 1950s
  const question6 = new QuizQuestionCard(
    "./images/scandinavian-flag.png",
    "Which country is NOT part of Scandinavia?",
    "Denmark",
    "Finland",
    "Norway",
    "Sweden",
    "Finland"
  ); // Finland
  const question7 = new QuizQuestionCard(
    "./images/Belle_disney.png",
    "Name the Disney Princess",
    "Cinderella",
    "Aurora",
    "Snow White",
    "Belle",
    "Belle"
  ); //Belle

  questionArr.push(
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7
  );
  console.log(questionArr);
  questionArr.sort(() => Math.random() - 0.5);
  console.log(questionArr);
};

const displayCurrentQuestion = (question) => {
  quizQuestionCard.innerHTML = question.renderQuestionHTML();
};

const startGame = () => {
  buildQuestionArr();
  // const randomNum = Math.random() * questionArr.Math.floor(Mlength);
  // console.log(questionArr[randomNum]);

  displayCurrentQuestion(questionArr[0]);

  startBtn.innerHTML = "Next Question";
  startBtn.removeAttribute("onclick");
  startBtn.setAttribute("onclick", "nextQuestion()");

  checkAnswer();
};

//scoreDisplay = 0;
//console.log(scoreDisplay);
let score = 0;

const checkAnswer = () => {
  const answerButtons = document.querySelectorAll(
    ".quizQuestionCard__answerBtn"
  );

  answerButtons.forEach((answerButton) => {
    answerButton.addEventListener("click", () => {
      console.log(answerButton.childNodes[3].innerHTML);
      console.log(questionArr[0].correctAnswer);

      if (
        questionArr[0].correctAnswer === answerButton.childNodes[3].innerHTML
      ) {
        answerButton.style.backgroundColor = "green";
        console.log(score);
        score += 1;
        console.log(score);
        let scoreDisplay = document.querySelector(".score__num");
        scoreDisplay.innerHTML = score;
      } else {
        answerButton.style.backgroundColor = "red";
      }
    });
  });
};

const nextQuestion = () => {
  questionArr.shift();
  console.log(questionArr);
  if (questionArr.length === 0) {
    quizQuestionCard.innerHTML = `<h1 class="quizQuestionCard__gameOver">GAME OVER</h1>`;
    startBtn.innerHTML = "Play Again";
    startBtn.removeAttribute("onclick"); // I AM REPEATING AND CONSCIOUS OF DRY?
    startBtn.setAttribute("onclick", "startGame()");
  } else {
    displayCurrentQuestion(questionArr[0]);
    checkAnswer();
  }
};
