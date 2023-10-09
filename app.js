const btnClear = document.querySelector('.clear');
const btnDelete = document.querySelector('.delete');
const btn7 = document.querySelector('.seven');
const btn8 = document.querySelector('.eight');
const btn9 = document.querySelector('.nine');
const btnDiv = document.querySelector('.division');
const btn4 = document.querySelector('.four');
const btn5 = document.querySelector('.five');
const btn6 = document.querySelector('.six');
const btnMultiply = document.querySelector('.multiply');
const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const btnSubtract = document.querySelector('.subtract');
const btnDecimal = document.querySelector('.decimal');
const btn0 = document.querySelector('.zero');
const btnEquals = document.querySelector('.equals');
const btnPlus = document.querySelector('.plus');
const display = document.querySelector('.display')

const btn = document.querySelectorAll('button')

const calcDisplay = document.createElement('p')
calcDisplay.classList.add('displayText')

Array.prototype.forEach.call(btn, function( node ) {
    node.addEventListener('click', () => {
        calcDisplay.textContent += node.textContent
        console.log('this is working')
    })
});

display.appendChild(calcDisplay)

const add = function(...args) {
    return args.reduce((sum, current) => sum + current);
  };
  
  const subtract = function(...args) {
      return args.reduce((sum, current) => sum - current);
  };
  
  const sum = function(arr) {
    let result = 0;
    arr.forEach(element => {
      result += element
    });
    return result
  };
  
  const multiply = function(arr) {
    let result = 1;
    arr.forEach(element => {
      result *= element
    });
    return result
  };
  
  const power = function(num,power) {
      return num**power;
  };
  
  const factorial = function(num) {
    let result = 1;
    while (num > 0) {
      result *= num
      num -= 1
    }
    return result
  };