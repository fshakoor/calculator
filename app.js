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

let operatorClicked = false;

btnClear.addEventListener('click', () => {
  calcDisplay.textContent = ''
})
btnDelete.addEventListener('click', () => {
  calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
})
btn1.addEventListener('click', () => {
  calcDisplay.textContent += btn1.textContent
})
btn2.addEventListener('click', () => {
  calcDisplay.textContent += btn2.textContent
})
btn3.addEventListener('click', () => {
  calcDisplay.textContent += btn3.textContent
})
btn4.addEventListener('click', () => {
  calcDisplay.textContent += btn4.textContent
})
btn5.addEventListener('click', () => {
  calcDisplay.textContent += btn5.textContent
})
btn6.addEventListener('click', () => {
  calcDisplay.textContent += btn6.textContent
})
btn7.addEventListener('click', () => {
  calcDisplay.textContent += btn7.textContent
})
btn8.addEventListener('click', () => {
  calcDisplay.textContent += btn8.textContent
})
btn9.addEventListener('click', () => {
  calcDisplay.textContent += btn9.textContent
})
btn0.addEventListener('click', () => {
  calcDisplay.textContent += btn0.textContent
})

btnPlus.addEventListener('click', () => {
  let lastCharOnDisplay = calcDisplay.textContent[(calcDisplay.textContent).length-1];
  if (operatorClicked === true) {
    let expression = calcDisplay.textContent
    let operatorIndex;
    if (expression.includes('+')) {operatorIndex = expression.indexOf('+')}
    else if (expression.includes('-')) {operatorIndex = expression.indexOf('-')}
    else if (expression.includes('x')) {operatorIndex = expression.indexOf('x')}
    else if (expression.includes('÷')) {operatorIndex = expression.indexOf('÷')}
    let num1 = expression.slice(0,operatorIndex); // this is the first parameter
    let num2 = expression.slice(operatorIndex+1,(calcDisplay.textContent).length)
    let operator;
    if (expression.includes('+')) {operator = 'add'}
    else if (expression.includes('-')) {operator = 'subtract'}
    else if (expression.includes('x')) {operator = 'multiply'}
    else if (expression.includes('÷')) {operator = 'divide'}
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    if (num2 == 0 && operator == 'divide') {
      alert("You can't divide by zero!")
      calcDisplay.textContent = ''
      num1 = 0
      num2 = 0
    }
    operate(num1,num2,operator)
    operatorClicked = false
  }

  if (lastCharOnDisplay === '-') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  } else if (lastCharOnDisplay === 'x') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  } else if (lastCharOnDisplay === '÷') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  }

  if (lastCharOnDisplay !== '+') {
    calcDisplay.textContent += btnPlus.textContent
    operatorClicked = true
  }
  operatorClicked = true
})

btnSubtract.addEventListener('click', () => {
  let lastCharOnDisplay = calcDisplay.textContent[(calcDisplay.textContent).length-1];

  if (operatorClicked === true) {
    let expression = calcDisplay.textContent
    let operatorIndex;
    if (expression.includes('+')) {operatorIndex = expression.indexOf('+')}
    else if (expression.includes('-')) {operatorIndex = expression.indexOf('-')}
    else if (expression.includes('x')) {operatorIndex = expression.indexOf('x')}
    else if (expression.includes('÷')) {operatorIndex = expression.indexOf('÷')}
    let num1 = expression.slice(0,operatorIndex); // this is the first parameter
    let num2 = expression.slice(operatorIndex+1,(calcDisplay.textContent).length)
    let operator;
    if (expression.includes('+')) {operator = 'add'}
    else if (expression.includes('-')) {operator = 'subtract'}
    else if (expression.includes('x')) {operator = 'multiply'}
    else if (expression.includes('÷')) {operator = 'divide'}
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    if (num2 == 0 && operator == 'divide') {
      alert("You can't divide by zero!")
      calcDisplay.textContent = ''
      num1 = 0
      num2 = 0
    }
    operate(num1,num2,operator)
    operatorClicked = false
  }

  if (lastCharOnDisplay === '+') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  } else if (lastCharOnDisplay === 'x') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  } else if (lastCharOnDisplay === '÷') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  }

  if (lastCharOnDisplay !== '-') {
    calcDisplay.textContent += btnSubtract.textContent
    operatorClicked = true
  }
  
})

btnMultiply.addEventListener('click', () => {
  let lastCharOnDisplay = calcDisplay.textContent[(calcDisplay.textContent).length-1];
  if (operatorClicked === true) {
    let expression = calcDisplay.textContent
    let operatorIndex;
    if (expression.includes('+')) {operatorIndex = expression.indexOf('+')}
    else if (expression.includes('-')) {operatorIndex = expression.indexOf('-')}
    else if (expression.includes('x')) {operatorIndex = expression.indexOf('x')}
    else if (expression.includes('÷')) {operatorIndex = expression.indexOf('÷')}
    let num1 = expression.slice(0,operatorIndex); // this is the first parameter
    let num2 = expression.slice(operatorIndex+1,(calcDisplay.textContent).length)
    let operator;
    if (expression.includes('+')) {operator = 'add'}
    else if (expression.includes('-')) {operator = 'subtract'}
    else if (expression.includes('x')) {operator = 'multiply'}
    else if (expression.includes('÷')) {operator = 'divide'}
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    if (num2 == 0 && operator == 'divide') {
      alert("You can't divide by zero!")
      calcDisplay.textContent = ''
    }
    operate(num1,num2,operator)
    operatorClicked = false
  }
  
  if (lastCharOnDisplay === '+') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  } else if (lastCharOnDisplay === '-') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  } else if (lastCharOnDisplay === '÷') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  }

  if (lastCharOnDisplay !== 'x') {
    calcDisplay.textContent += btnMultiply.textContent
    operatorClicked = true
  }
})

btnDiv.addEventListener('click', () => {
  let lastCharOnDisplay = calcDisplay.textContent[(calcDisplay.textContent).length-1];

  if (operatorClicked === true) {
    let expression = calcDisplay.textContent
    let operatorIndex;
    if (expression.includes('+')) {operatorIndex = expression.indexOf('+')}
    else if (expression.includes('-')) {operatorIndex = expression.indexOf('-')}
    else if (expression.includes('x')) {operatorIndex = expression.indexOf('x')}
    else if (expression.includes('÷')) {operatorIndex = expression.indexOf('÷')}
    let num1 = expression.slice(0,operatorIndex); // this is the first parameter
    let num2 = expression.slice(operatorIndex+1,(calcDisplay.textContent).length)
    let operator;
    if (expression.includes('+')) {operator = 'add'}
    else if (expression.includes('-')) {operator = 'subtract'}
    else if (expression.includes('x')) {operator = 'multiply'}
    else if (expression.includes('÷')) {operator = 'divide'}
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    if (num2 == 0 && operator == 'divide') {
      alert("You can't divide by zero!")
      calcDisplay.textContent = ''
      num1 = 0
      num2 = 0
    }
    operate(num1,num2,operator)
    operatorClicked = false
  }
  
  if (lastCharOnDisplay === '+') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  } else if (lastCharOnDisplay === '-') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  } else if (lastCharOnDisplay === 'x') {
    calcDisplay.textContent = calcDisplay.textContent.slice(0,-1)
  }

  if (lastCharOnDisplay !== '÷') {
    calcDisplay.textContent += btnDiv.textContent
    operatorClicked = true
  }
})

btnEquals.addEventListener('click', () => {
    let expression = calcDisplay.textContent
    let operatorIndex;
    if (expression.includes('+')) {operatorIndex = expression.indexOf('+')}
    else if (expression.includes('-')) {operatorIndex = expression.indexOf('-')}
    else if (expression.includes('x')) {operatorIndex = expression.indexOf('x')}
    else if (expression.includes('÷')) {operatorIndex = expression.indexOf('÷')}
    let num1 = expression.slice(0,operatorIndex); // this is the first parameter
    let num2 = expression.slice(operatorIndex+1,(calcDisplay.textContent).length)
    let operator;
    if (expression.includes('+')) {operator = 'add'}
    else if (expression.includes('-')) {operator = 'subtract'}
    else if (expression.includes('x')) {operator = 'multiply'}
    else if (expression.includes('÷')) {operator = 'divide'}
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    if (num2 == 0 && operator == 'divide') {
      alert("You can't divide by zero!")
      calcDisplay.textContent = ''
      num1 = 0
      num2 = 0
    }
    operate(num1,num2,operator)
  }
)

display.appendChild(calcDisplay)

const operate = function(num1,num2,operator) {
  switch(operator) {
    case 'add':
      add(num1,num2)
      break
    case 'subtract':
      subtract(num1,num2)
      break
    case 'multiply':
      multiply(num1,num2)
      break
    case 'divide':
      divide(num1,num2)
      break
  }
}

const add = function(num1,num2) {
    let sum = num1+num2;
    calcDisplay.textContent = sum;
  };
  
const subtract = function(num1,num2) {
    let difference = num1-num2;
    calcDisplay.textContent = difference;
};
  
const multiply = function(num1,num2) {
  let product = num1*num2;
  calcDisplay.textContent = product;
};

const divide = function(num1,num2) {
  let quotient = num1/num2;
  console.log((quotient.length))
  if (num2 === 0) {calcDisplay.textContent = ''}
  else {calcDisplay.textContent = quotient};
}