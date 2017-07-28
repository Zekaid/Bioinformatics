(function() {
  function buildQuiz() {

    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }
 function lettertonumber(letter) {
   var number=0
   if (letter == 'a'){
     number = 0;

   }
   else if(letter=='b'){
     number=1;

   }
   else if(letter=='c'){
     number=2;

   }
   else if(letter=='d'){
     number=3;

   }
  return 0
 }
  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "#0000FF";
      } else{
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
        var this_container = answerContainers[questionNumber]
        var correct_idx = lettertonumber(currentQuestion.correctAnswer)
        var correct_answer_html = this_container.children[correct_idx]
        correct_answer_html.style.color = "blue"
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1. What single food has the highest total number of resulting illnesses?",
      answers: {
        a: "Cantaloupes",
        b: "Chicken",
        c: "Salad",
        d: "Ice"
      },
      correctAnswer: "c"
    },
    {
      question: "2. What bacteria has the highest mortality rate?",
      answers: {
        a: "Listeria",
        b: "Salmonella",
        c: "Norovirus",
        d: "Clostridium"
      },
      correctAnswer: "a"
    },
    {
      question: "3. What color is the year/total illness line graph?",
      answers: {
        a: "Mustard yellow",
        b: "Blue",
        c: "Neon Purple",
        d: "Magenta"
      },
      correctAnswer: "c"
    },
    {
      question: "4. What is the most common bacteria in terms of total illness count?",
      answers: {
        a: "Listeria",
        b: "Norovirus",
        c: "Salmonella",
        d: "Hepatitis A"
      },
      correctAnswer: "b"
    },
    {
      question: "5. What state has the highest average number of illnesses?",
      answers: {
        a: "Washington",
        b: "Louisiana",
        c: "Russia",
        d: "Ohio"
      },
      correctAnswer: "b"
    },
    {
      question: "6. Which venue has caused the second highest number of illnesses?",
      answers: {
        a: "Restaurant",
        b: "Prison",
        c: "Religious facility",
        d: "Catering Service"
      },
      correctAnswer: "d"
    },
    {
      question: "7. What is the general trend of total number of foodborne illnesses per year from 1998-2015?",
      answers: {
        a: "Upward",
        b: "Downward",
        c: "Straight",
        d: "Trendy"
      },
      correctAnswer: "b"
    },
    {
      question: "8. What is the title of our paper?",
      answers: {
        a: "There's no I in team, but there is in Listeria",
        b: "Melancholy",
        c: "Foodborne=Fooddeath",
        d: "feel the Borne"
      },
      correctAnswer: "a"
    },
    {
      question: "9. What is the most dangerous melon?",
      answers: {
        a: "Cantaloupe",
        b: "Watermelon",
        c: "Honeydew",
        d: "Pumpkin"
      },
      correctAnswer: "a"
    },
    {
      question: "10. Should you eat salsa?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "Untitles"
      },
      correctAnswer: "b"
    }
  ];
  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
