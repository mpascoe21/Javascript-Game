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
  }

  renderQuestionHTML() {
    return `  
      <h4 class="score">Score <span class="score__num">${score}</span></h4>  
      <figure class="quizQuestionCard__question">
        <img class="quizQuestionCard__img" src=${this.image} alt="" />
        <p class="quizQuestionCard__caption">${this.caption}</p>
      </figure>

      <div class="quizQuestionCard__answerBtnContainer">
        <button class="quizQuestionCard__answerBtn">
          <p class="quizQuestionCard__option">A</p>
          <p class="quizQuestionCard__answer">${this.answerA}</p>
        </button>

        <button class="quizQuestionCard__answerBtn">
          <p class="quizQuestionCard__option">B</p>
          <p class="quizQuestionCard__answer">${this.answerB}</p>
        </button>

        <button class="quizQuestionCard__answerBtn">
          <p class="quizQuestionCard__option">C</p>
          <p class="quizQuestionCard__answer">${this.answerC}</p>
        </button>

        <button class="quizQuestionCard__answerBtn">
          <p class="quizQuestionCard__option">D</p>
          <p class="quizQuestionCard__answer">${this.answerD}</p>
        </button>      
      </div>


  `;
  }
}

let questionArr = [];

const buildQuestionArr = () => {
  const question1 = new QuizQuestionCard(
    "./images/q1-new-zealand.png",
    "What is the capital of New Zealand?",
    "Christchurch",
    "Auckland",
    "Wellington",
    "Hamilton",
    "Wellington"
  ); // Wellington
  const question2 = new QuizQuestionCard(
    "./images/q2-henry-viii.jpg",
    "How many of Henry VIII’s wives were called Catherine?",
    "2",
    "3",
    "4",
    "5",
    "3"
  ); // 3
  const question3 = new QuizQuestionCard(
    "./images/q3-baker's-dozen.jpg",
    "What number is a baker’s dozen?",
    "6",
    "11",
    "12",
    "13",
    "13"
  ); // 13
  const question4 = new QuizQuestionCard(
    "./images/q4-olympic-flag.jpg",
    "Which city hosted the 2000 Summer Olympics?",
    "Athens",
    "Atlanta",
    "Beijing",
    "Sydney",
    "Sydney"
  ); // Sydney
  const question5 = new QuizQuestionCard(
    "./images/q5-madonna.jpg",
    "In what decade was pop icon Madonna born?",
    "1940s",
    "1950s",
    "1960s",
    "1970s",
    "1950s"
  ); // 1950s
  const question6 = new QuizQuestionCard(
    "./images/q6-scandinavia.png",
    "Which country is NOT part of Scandinavia?",
    "Denmark",
    "Finland",
    "Norway",
    "Sweden",
    "Finland"
  ); // Finland
  const question7 = new QuizQuestionCard(
    "./images/q7-Belle_disney.png",
    "Name the Disney Princess",
    "Cinderella",
    "Aurora",
    "Snow White",
    "Belle",
    "Belle"
  ); //Belle
  const question8 = new QuizQuestionCard(
    "./images/q8-harry-potter.jpg",
    "What is the name of the fourth book in the Harry Potter series?",
    "Harry Potter and the Half-Blood Prince",
    "Harry Potter and the Prisoner of Azkaban",
    "Harry Potter and the Goblet of Fire",
    "Harry Potter and the Chamber of Secrets",
    "Harry Potter and the Goblet of Fire"
  );
  const question9 = new QuizQuestionCard(
    "./images/q9-wind.jpg",
    "What measurement scale is used to determine wind speed?",
    "Beaufort scale",
    "Richter scale",
    "Synoptic scale",
    "Gusting scale",
    "Beaufort scale"
  );
  const question10 = new QuizQuestionCard(
    "./images/q10-statue-of-liberty.jpg",
    "The Statue of Liberty was a gift to the United States from which European country?",
    "Belgium",
    "Germany",
    "Spain",
    "France",
    "France"
  );
  const question11 = new QuizQuestionCard(
    "./images/q11-human-body-water.png",
    "The human body is made up of approximately how much water?",
    "40%",
    "50%",
    "60%",
    "70%",
    "60%"
  );
  const question12 = new QuizQuestionCard(
    "./images/q12-fastest-bird.png",
    "What is the world’s fastest species of bird?",
    "Golden eagle",
    "Peregrine falcon",
    "Frigatebird",
    "Penguin",
    "Peregrine falcon"
  );
  const question13 = new QuizQuestionCard(
    "./images/q13-van-gogh.jpg",
    "Which artist famously cut off his own ear?",
    "Vincent Van Gogh",
    "Claude Monet",
    "Salvador Dali",
    "Pablo Picasso",
    "Vincent Van Gogh"
  );
  const question14 = new QuizQuestionCard(
    "./images/q14-ferrero-rocher.jpg",
    "What is in the center of a Ferrero Rocher?",
    "A hazelnut",
    "A peanut",
    "Nougat",
    "A pecan",
    "A hazelnut"
  );
  const question15 = new QuizQuestionCard(
    "./images/q15-kiwifruit.jpg",
    "Where do kiwi fruits originate from?",
    "New Zealand",
    "Australia",
    "Peru",
    "China",
    "China"
  );
  const question16 = new QuizQuestionCard(
    "./images/q16-chocolate-meringue.jpg",
    "What common dessert and pie topping is created by beating together egg whites and sugar?",
    "Whipped cream",
    "Glazed icing",
    "Creme Fraiche",
    "Meringue",
    "Meringue"
  );
  const question17 = new QuizQuestionCard(
    "./images/q17-email.png",
    "When was the first email sent?",
    "1974",
    "1971",
    "1977",
    "1981",
    "1971"
  );
  const question18 = new QuizQuestionCard(
    "./images/q18-solar-system.jpg",
    "In the solar system, which planet is known for its rings?",
    "Jupiter",
    "Saturn",
    "Mars",
    "Venus",
    "Saturn"
  );
  const question19 = new QuizQuestionCard(
    "./images/q19-Nile-River.jpg",
    "At a length of 4,132 miles, what is the longest river in the world?",
    "Amazon",
    "Mississippi",
    "Nile",
    "Mekong",
    "Nile"
  );
  const question20 = new QuizQuestionCard(
    "./images/q20-sagittarius1.jpg",
    "Which zodiac sign runs from November 22 to December 21?",
    "Aquarius",
    "Capricorn",
    "Gemini",
    "Sagittarius",
    "Sagittarius"
  );
  const question21 = new QuizQuestionCard(
    "./images/q21-piano-keys.jpg",
    "How many keys does a piano have?",
    "66",
    "77",
    "88",
    "99",
    "88"
  );
  const question22 = new QuizQuestionCard(
    "./images/q22-euro.jpg",
    "Which of these European countries does not use Euro as its official currency?",
    "Spain",
    "The Netherlands",
    "Denmark",
    "Italy",
    "Denmark"
  );

  questionArr.push(
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15,
    question16,
    question17,
    question18,
    question19,
    question20,
    question21,
    question22
  );
  console.log(questionArr);
  questionArr.sort(() => Math.random() - 0.5);
  console.log(questionArr);

  let gameQuestionArr = questionArr.slice(0, 10);
  console.log(gameQuestionArr);

  questionArr = gameQuestionArr;
  console.log(questionArr);
};

const displayCurrentQuestion = (question) => {
  quizQuestionCard.innerHTML = question.renderQuestionHTML();
};

const startGame = () => {
  score = 0;
  buildQuestionArr();
  // const randomNum = Math.random() * questionArr.Math.floor(Mlength);
  // console.log(questionArr[randomNum]);

  displayCurrentQuestion(questionArr[0]);

  startBtn.innerHTML = "Next Question";
  startBtn.removeAttribute("onclick");
  startBtn.setAttribute("onclick", "nextQuestion()");

  checkAnswer();
};

let score = 0;
//let buttonClicked = false;

const checkAnswer = () => {
  const answerButtons = document.querySelectorAll(
    ".quizQuestionCard__answerBtn"
  );

  answerButtons.forEach((answerButton) => {
    answerButton.addEventListener("click", () => {
      console.log(answerButton.childNodes[3].innerHTML);
      console.log(questionArr[0].correctAnswer);

      // if (buttonClicked === true) {
      //   answerButtons.removeEventListener("click", answerButton);
      // }

      if (
        questionArr[0].correctAnswer === answerButton.childNodes[3].innerHTML
      ) {
        answerButton.style.backgroundColor = "#6DAB08";
        buttonClicked = true;
        console.log(score);
        score += 1;
        console.log(score);
        let scoreDisplay = document.querySelector(".score__num");
        scoreDisplay.innerHTML = score;
      } else {
        answerButton.style.backgroundColor = "#CB0813";

        answerButtons.forEach((answerButton) => {
          if (
            questionArr[0].correctAnswer ===
            answerButton.childNodes[3].innerHTML
          ) {
            answerButton.style.backgroundColor = "#6DAB08";
          }
        });
      }
    });
  });
};

const nextQuestion = () => {
  questionArr.shift();
  console.log(questionArr);
  if (questionArr.length === 0 && score !== 1) {
    quizQuestionCard.innerHTML = `
    <h1 class="quizQuestionCard__gameOver">GAME OVER</h1>    
    <h2 class="quizQuestionCard__endOfQuizMessage">You got ${score} answers correct!</h2>
    `;
    startBtn.innerHTML = "Play Again";
    startBtn.removeAttribute("onclick"); // I AM REPEATING AND CONSCIOUS OF DRY?
    startBtn.setAttribute("onclick", "startGame()");
  } else if (questionArr.length === 0 && score === 1) {
    quizQuestionCard.innerHTML = `
    <h1 class="quizQuestionCard__gameOver">GAME OVER</h1>    
    <h2 class="quizQuestionCard__endOfQuizMessage">You got ${score} answer correct!</h2>
    `;
    startBtn.innerHTML = "Play Again";
    startBtn.removeAttribute("onclick"); // I AM REPEATING AND CONSCIOUS OF DRY?
    startBtn.setAttribute("onclick", "startGame()");
  } else {
    displayCurrentQuestion(questionArr[0]);
    checkAnswer();
  }
};
