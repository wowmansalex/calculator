var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eigth = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

var plusSign = document.getElementById('plus-sign');
var minusSign = document.getElementById('minus-sign');
var xSign = document.getElementById('x-sign');
var dividedSign = document.getElementById('divided-sign');
var result = document.getElementById('equal-sign');

var inputNumber = document.getElementById('input');
var eraseInputBtn = document.getElementById('AC');

var numbers = [];

one.addEventListener('click', getNumber);
two.addEventListener('click', getNumber);
three.addEventListener('click', getNumber);
four.addEventListener('click', getNumber);
five.addEventListener('click', getNumber);
six.addEventListener('click', getNumber);
seven.addEventListener('click', getNumber);
eigth.addEventListener('click', getNumber);
nine.addEventListener('click', getNumber);
zero.addEventListener('click', getNumber);

eraseInputBtn.addEventListener('click', eraseInput);
plusSign.addEventListener('click', addClasses);
minusSign.addEventListener('click', addClasses);
result.addEventListener('click', getResult);
xSign.addEventListener('click', addClasses);
dividedSign.addEventListener('click', addClasses);



function getNumber(e) {
  inputNumber.value = inputNumber.value+e.target.textContent;
  inputNumber.className = "input-entry";
}

function eraseInput(e) {
  if (inputNumber.value != null) {
  inputNumber.value = "";
  }
}

function storeNumbers() {
  numbers.push(parseInt(inputNumber.value));
  console.log(numbers);
}

function addClasses(e) {
  numbers.push(parseInt(inputNumber.value));
  if(e.target.innerText == '+') {
  plusSign.setAttribute("class", "btn btn-secondary plus");
  eraseInput();
  }
  else if (e.target.innerText == "-") {
  minusSign.setAttribute("class", "round-btn selected minus")
  eraseInput();
  }
  else if (e.target.innerText == "X") {
  xSign.setAttribute("class", "round-btn selected multiply")
  eraseInput();
  }
  else if(e.target.innerText == "÷") {
    dividedSign.setAttribute("class", "round-btn selected divided")
    console.log(dividedSign.classList);
    eraseInput();
  };

}

function getResult() {
numbers.push(parseInt(inputNumber.value));
  if (plusSign.classList.contains("plus")) {
    let sum = numbers[numbers.length-2] + numbers[numbers.length-1];
    inputNumber.value = sum;
    plusSign.setAttribute("class", "round-btn action-btn")
  } else if(xSign.classList.contains("multiply")) {
    let sum = numbers[numbers.length-2] * numbers[numbers.length-1];
    inputNumber.value = sum;
    xSign.setAttribute("class", "round-btn action-btn")
  } else if(minusSign.classList.contains("minus")) {
    let sum = numbers[numbers.length-2] - numbers[numbers.length-1];
    inputNumber.value = sum;
    minusSign.setAttribute("class", "round-btn action-btn");
  } else if(dividedSign.classList.contains("divided")) {
    let sum = numbers[numbers.length-2] / numbers[numbers.length-1];
    inputNumber.value = sum;
    dividedSign.setAttribute("class", "round-btn action-btn");
  }
}