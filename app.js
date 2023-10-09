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