const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      { letter: "A", value: "Hyper Text Markup Language" },
      { letter: "B", value: "Hot Mail" },
      { letter: "C", value: "How to Make Lasagna" },
    ],
    answer: "A",
  },
  {
    question: "How many tags are in a regular element?",
    choices: [
      { letter: "A", value: "2" },
      { letter: "B", value: "1" },
      { letter: "C", value: "3" },
    ],
    answer: "A",
  },
  {
    question:
      "What is the difference in an opening tag and a closing tag?",
    choices: [
      { letter: "A", value: "Opening tag has a / in front" },
      { letter: "B", value: "Closing tag has a / in front" },
      { letter: "C", value: "There is no difference" },
    ],
    answer: "B",
  },
  {
    question: "< br  / > What type of tag is this?",
    choices: [
      { letter: "A", value: "Break tag" },
      { letter: "B", value: "A broken one" },
      { letter: "C", value: "An opening tag" },
    ],
    answer: "A",
  },
  {
    question: "< body > Is this an opening tag or a closing tag?",
    choices: [
      { letter: "A", value: "Opening" },
      { letter: "B", value: "Closing" },
    ],
    answer: "A",
  },
  {
    question: "< / body > Is this an opening tag or a closing tag?",
    choices: [
      { letter: "A", value: "Opening" },
      { letter: "B", value: "Closing" },
    ],
    answer: "B",
  },
  {
    question: "Where is the meta tag only found?",
    choices: [
      { letter: "A", value: "The last page" },
      { letter: "B", value: "The second page" },
      { letter: "C", value: "The home page" },
    ],
    answer: "C",
  },
  {
    question: "What is an element that does not have a closing tag called?",
    choices: [
      { letter: "A", value: "Tag" },
      { letter: "B", value: "Empty element" },
      { letter: "C", value: "Closed element" },
    ],
    answer: "B",
  },
  {
    question: "Which of the following is an example of empty element?",
    choices: [
      { letter: "A", value: "< img / >" },
      {
        letter: "B", value: "< / img >",
      },
      { letter: "C", value: "< img > < / img >" },
    ],
    answer: "A",
  },
  {
    question: "What should values always be enclosed in?",
    choices: [
      { letter: "A", value: "Quotation marks" },
      { letter: "B", value: "Commas" },
      { letter: "C", value: "Parenthesis" },
    ],
    answer: "A",
  },
  {
    question: "Where do all items for the same web site need to be saved?",
    choices: [
      { letter: "A", value: "In the same folder" },
      { letter: "B", value: "Where is fine" },
      { letter: "C", value: "In different folders" },
    ],
    answer: "A",
  },
  {
    question: "What is always a welcome page, and explains the purpose or topic of the site?",
    choices: [
      { letter: "A", value: "Page 4" },
      { letter: "B", value: "Home Page" },
      { letter: "C", value: "Table of contents" },
    ],
    answer: "B",
  },
  {
    question: "What does View Source do?",
    choices: [
      { letter: "A", value: "Nothing" },
      { letter: "B", value: "Brings up a note pad with the HTML code already used for the site." },
      { letter: "C", value: "Opens a new website" },
    ],
    answer: "B",
  },
  {
    question: "This technique meaning 'many forms and shapes' allows programmers to render multiple HTML elements depending on the type of object.",
    choices: [
      { letter: "A", value: "Inheritance" },
      { letter: "B", value: "Encapsulation" },
      { letter: "C", value: "Polymorphism" },
    ],
    answer: "C",
  },
    {
      question:
        "An &lt;iframe> is used to display a web page within a web page.",
      choices: [
        { letter: "A", value: "False" },
        { letter: "B", value: "True" },
        { letter: "C", value: "There is no such thing as an &lt;iframe>" },
      ],
      answer: "B",
    },
  ];
  let rightAnswer;
  let answer;
  let correctAnswer = 0;
  let wrongAnswer = 0;
  let consecutiveRight = 0;

  function startQuiz() {
    answer = 0;
    displayQuestion();
  }
  function exitQuiz() {
    correctAnswer = 0;
    wrongAnswer = 0;
    consecutiveRight = 0;
    document.getElementById("question-container").classList.remove("show");
    document.getElementById("question-container").classList.add("hide");
    document.getElementById("result").classList.remove("show");
    document.getElementById("result").classList.add("hide");
    document.getElementById("startQuizBtn").classList.remove("hide");
    document.getElementById("startQuizBtn").classList.add("show");
    displayResult();
  }

  function submit() {
    answer = document.querySelector('input[name="letter"]:checked')?.value;
    if (answer) {
      checkAnswer();
      displayResult();
      startQuiz();
    } else {
      alert("Please select an answer");
    }
  }

  function checkAnswer() {
    if (answer == rightAnswer) {
      correctAnswer++;
      incrementConsecutiveRight();
      
    } else {
      wrongAnswer++;
      resetConsecutiveRight();
      console.log("Wrong answer :(");
    }
    checkConsecutiveRight();
  }
  function checkConsecutiveRight() {
    if (consecutiveRight && !(consecutiveRight % 5)) {
      alert(`Great! ${consecutiveRight} correct answers in a row!`);
    }
  }
  function incrementConsecutiveRight() {
    consecutiveRight++;
  }
  function resetConsecutiveRight() {
    consecutiveRight = 0;
  }
  function displayQuestion() {
    const randomNumber = Math.floor(Math.random() * questions.length);
    const question = questions[randomNumber];
    rightAnswer = question.answer;
   
    document.getElementById("choices").innerHTML = "";
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("question-container").classList.remove("hide");
    document.getElementById("question-container").classList.add("show");
    document.getElementById("result").classList.remove("hide");
    document.getElementById("result").classList.add("show");
    document.getElementById("startQuizBtn").classList.add("hide");

    for (const choice of question.choices) {
      document.getElementById("choices").innerHTML += `
        <li>
          <input type='radio' name='letter' id='${choice["letter"]}' value='${choice["letter"]}'/>
          <label for='${choice["letter"]}'>${choice["value"]}</label>
        </li>
        `;
    }
  }
  function displayResult() {
    document.getElementById("correctAnswer").innerHTML = correctAnswer;
    document.getElementById("wrongAnswer").innerHTML = wrongAnswer;
  }