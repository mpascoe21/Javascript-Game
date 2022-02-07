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

const quizQuestionCard = document.querySelector(".quizQuestionCard");
const answers = document.querySelectorAll(".quizQuestionCard__answerBtn");
const startBtn = document.querySelector(".start-game");
// const quizImg = document.querySelector(".quizQuestionCard__img");
// const quizCaption = document.querySelector(".quizQuestionCard__caption");
// const quizAnswerA = document.querySelector(".quizQuestionCard__answer-a");
// const quizAnswerB = document.querySelector(".quizQuestionCard__answer-b");
// const quizAnswerC = document.querySelector(".quizQuestionCard__answer-c");
// const quizAnswerD = document.querySelector(".quizQuestionCard__answer-d");

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
  // question() {
  //   quizImg.src = this.image;
  //   quizCaption.innerHTML = this.caption;
  //   quizAnswerA.innerHTML = this.answerA;
  //   quizAnswerB.innerHTML = this.answerB;
  //   quizAnswerC.innerHTML = this.answerC;
  //   quizAnswerD.innerHTML = this.answerD;

  //   return question();
  // }

  renderQuestionHTML() {
    return `    
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

// const answers = document.querySelectorAll(".quizQuestionCard__answerBtn");

// console.log(answers);

// answers.forEach((answer) => {
//   answer.addEventListener("click", (event) => {
//     // if answer === true -> background green -> move to next question

//     event.style.backgroundColor = "green";
//     // if answer === false -> background red -> show correct answer in green -> move to next question
//   })
// });

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

  // const randomNum = ath.random() * questionArr.Math.floor(Mlength);
  // console.log(questionArr[randomNum]);

  displayCurrentQuestion(questionArr[0]);

  startBtn.innerHTML = "Next Question";
  startBtn.removeAttribute("onclick");
  startBtn.setAttribute("onclick", "nextQuestion()");
  // startBtn.addEventListener("click", () => {
  //   nextQuestion();
  // });
};

const nextQuestion = () => {
  questionArr.shift();
  console.log(questionArr);
  if (questionArr.length === 0) {
    quizQuestionCard.innerHTML = "Game Over";
  } else {
    displayCurrentQuestion(questionArr[0]);
  }
};

const correctAnswer = this.correctAnswer;

answers.forEach((answer) => {
  answer.addEventListener("click", (event) => {
    // if answer === true -> background green -> move to next question
    if (event.target === true) {
      answer.style.backgroundColor = "green";
    } else if (correctAnswer === false) {
      (answer.style.backgroundColor = "red"),
        (this.correctAnswer.style.backgroundColor = "green");
    }
    // if answer === false -> background red -> show correct answer in green -> move to next question
  });
  return answers;
});

//console.dir(quizQuestionCard);
