"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 10 QUERSTIONS / GAME
// X TIME / QUESTION
// RESULT -> CORRECT ANSWERS -> SOME MESSAGE AND PLAY AGAIN OPTION
// CLEAN SWEEP -> TIME/SPEED TO COMPLETE -> A CELEBRATION  AND PLAY AGAIN OPTION
// CORRECT ANSWER -> GREEN
// WRONG ANSWER -> RED AND THEN CORRECT IN GREEN
// X SECONDS DELAY BETWEEN ANSWER AND NEW QUESTION 
// QUIZ QUESTION BLUEPRINT - CLASS
// INJECT CLASS INTO HTML
// LOOP THROUGH QUESTIONS
// RANDOMISE ORDER OF QUESTIONS
// CLICK EVENT ON ANSWERS AND 'PLAY AGAIN'
var quizQuestionCard = document.querySelector(".quizQuestionCard"); // const quizImg = document.querySelector(".quizQuestionCard__img");
// const quizCaption = document.querySelector(".quizQuestionCard__caption");
// const quizAnswerA = document.querySelector(".quizQuestionCard__answer-a");
// const quizAnswerB = document.querySelector(".quizQuestionCard__answer-b");
// const quizAnswerC = document.querySelector(".quizQuestionCard__answer-c");
// const quizAnswerD = document.querySelector(".quizQuestionCard__answer-d");

var QuizQuestionCard =
/*#__PURE__*/
function () {
  function QuizQuestionCard(image, caption, answerA, answerB, answerC, answerD) {
    _classCallCheck(this, QuizQuestionCard);

    this.image = image, this.caption = caption, this.answerA = answerA, this.answerB = answerB, this.answerC = answerC, this.answerD = answerD;
  } // question() {
  //   quizImg.src = this.image;
  //   quizCaption.innerHTML = this.caption;
  //   quizAnswerA.innerHTML = this.answerA;
  //   quizAnswerB.innerHTML = this.answerB;
  //   quizAnswerC.innerHTML = this.answerC;
  //   quizAnswerD.innerHTML = this.answerD;
  //   return question();
  // }  


  _createClass(QuizQuestionCard, [{
    key: "renderQuestionHTML",
    value: function renderQuestionHTML() {
      return "\n    \n      <figure class=\"quizQuestionCard__question\">\n        <img class=\"quizQuestionCard__img\" src=".concat(this.image, " alt=\"\" />\n        <figcaption class=\"quizQuestionCard__caption\">").concat(this.caption, "</figcaption>\n      </figure>\n\n      <div class=\"quizQuestionCard__answerBtn\">\n        <p class=\"quizQuestionCard__option\">A</p>\n        <p class=\"quizQuestionCard__answer-a\">").concat(this.answerA, "</p>\n      </div>\n\n      <div class=\"quizQuestionCard__answerBtn\">\n        <p class=\"quizQuestionCard__option\">B</p>\n        <p class=\"quizQuestionCard__answer-b\">").concat(this.answerB, "</p>\n      </div>\n\n      <div class=\"quizQuestionCard__answerBtn\">\n        <p class=\"quizQuestionCard__option\">C</p>\n        <p class=\"quizQuestionCard__answer-c\">").concat(this.answerC, "</p>\n      </div>\n\n      <div class=\"quizQuestionCard__answerBtn\">\n        <p class=\"quizQuestionCard__option\">D</p>\n        <p class=\"quizQuestionCard__answer-d\">").concat(this.answerD, "</p>\n      </div>  \n    \n  ");
    }
  }]);

  return QuizQuestionCard;
}();

var question1 = new QuizQuestionCard("./images/question-1.png", "What is the capital of New Zealand?", "Christchurch", "Auckland", "Wellington", "Hamilton"); // Wellington

var question2 = new QuizQuestionCard("./images/king-henry-viii.png", "How many of Henry VIII’s wives were called Catherine?", "2", "3", "4", "5"); // 3

var question3 = new QuizQuestionCard("./images/baker's-dozen.jpg", "What number is a baker’s dozen?", "6", "11", "12", "13"); // 13

var question4 = new QuizQuestionCard("./images/olympic-flag.jpg", "Which city hosted the 2000 Summer Olympics?", "Athens", "Atlanta", "Beijing", "Sydney"); // Sydney

var question5 = new QuizQuestionCard("./images/madonna.jpg", "In what decade was pop icon Madonna born?", "1940s", "1950s", "1960s", "1970s"); // 1950s
//console.log(question1);

quizQuestionCard.innerHTML += question4.renderQuestionHTML();
console.log(quizQuestionCard);