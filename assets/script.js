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

//countdown timer
let seconds = 10;
let time = setInterval(myTimer, 1000);
function myTimer() {
    document.querySelector('#time').innerText = seconds;
    seconds--;
    if (seconds == -1) {
        clearInterval(time);
        allDone(finalScore);
    }
}

function allDone(score){
  document.querySelector('header').innerHTML = '';
  document.querySelector('body').innerHTML = '';
  let div = document.createElement('div');
  div.setAttribute('class', 'slab');
  let h1 = document.createElement('h1');
  h1.innerText = 'All Done';
  let p = document.createElement('p');
  p.innerHTML =  `Your final score is <span id=final-score'></span>`;
  let form = document.createElement('form');
  let label = document.createElement('label');
  label.setAttribute('for', 'intls');
  label.innerText = 'Enter Initials: ';
  let inputForm = document.createElement('input');
  inputForm.setAttribute('type', 'text');
  inputForm.setAttribute('id', 'initials');
  inputForm.setAttribute('name', 'intls');
  let inputBtn = document.createElement('input');
  inputBtn.setAttribute('type', 'button');
  inputBtn.setAttribute('value', 'Submit');
  document.querySelector('body').append(div);
  div.append(h1);
  div.append(p);
  div.append(form);
  form.append(label);
  form.append(inputForm);
  form.append(inputBtn);
}



