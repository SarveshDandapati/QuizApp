const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

let finalScore = 11;


document.querySelector("#startQuiz").addEventListener("click", startQuiz);
document.querySelector("#startQuiz").addEventListener("click", myTimer);

function startQuiz() {
  let qno = 0;
  nextQues(qno);
  qno = qno + 1;
}

function nextQues(qno) {
  let div = document.querySelector(".slab");
  div.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.setAttribute("id", "questionText");
  let hr1 = document.createElement("hr");
  //button 1
  let btn1 = document.createElement("button");
  btn1.setAttribute("type", "submit");
  let span1 = document.createElement("span");
  span1.setAttribute("id", "option1");
  //button2
  let btn2 = document.createElement("button");
  btn2.setAttribute("type", "submit");
  let span2 = document.createElement("span");
  span2.setAttribute("id", "option2");
  //button3
  let btn3 = document.createElement("button");
  btn3.setAttribute("type", "submit");
  let span3 = document.createElement("span");
  span3.setAttribute("id", "option3");
  //button4
  let btn4 = document.createElement("button");
  btn4.setAttribute("type", "submit");
  let span4 = document.createElement("span");
  span4.setAttribute("id", "option4");

  let hr2 = document.createElement("hr");
  let p = document.createElement('p');
  p.setAttribute('id', 'verdict');

  document.querySelector('main').append(div);
  div.append(h1);
  div.append(hr1);
  div.append(btn1);
  btn1.append(span1);
  div.append(btn2);
  btn2.append(span2);
  div.append(btn3);
  btn3.append(span3);
  div.append(btn4);
  btn4.append(span4);
  div.append(hr2);
  div.append(p);

  h1.innerText = questions[qno].questionText;
  span1.innerText = questions[qno].options[0];
  span2.innerText = questions[qno].options[1];
  span3.innerText = questions[qno].options[2];
  span4.innerText = questions[qno].options[3];

}

//countdown timer
function myTimer(){  
  let seconds = 10;
  let time = setInterval(function() {
    document.querySelector("#time").innerText = seconds;
    seconds--;
    if (seconds == -1) {
      clearInterval(time);
      allDone(finalScore);
    }
  }, 1000);
}

function allDone(score) {
  document.querySelector("header").innerHTML = "";
  document.querySelector("body").innerHTML = "";
  let div = document.createElement("div");
  div.setAttribute("class", "slab");
  let h1 = document.createElement("h1");
  h1.innerText = "All Done";
  let p = document.createElement("p");
  p.innerHTML = `Your final score is <span id=final-score'></span>`;
  let form = document.createElement("form");
  let label = document.createElement("label");
  label.setAttribute("for", "intls");
  label.innerText = "Enter Initials: ";
  let inputForm = document.createElement("input");
  inputForm.setAttribute("type", "text");
  inputForm.setAttribute("id", "initials");
  inputForm.setAttribute("name", "intls");
  let inputBtn = document.createElement("input");
  inputBtn.setAttribute("type", "button");
  inputBtn.setAttribute("value", "Submit");
  document.querySelector("body").append(div);
  div.append(h1);
  div.append(p);
  div.append(form);
  form.append(label);
  form.append(inputForm);
  form.append(inputBtn);
}

