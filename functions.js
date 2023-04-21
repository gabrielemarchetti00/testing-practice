export function capitalize(str) {
  return str.charAt(0).toUpperCase() +  str.slice(1);
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    if(b == 0){
      return 'cant divide by 0';
    }
    return a / b;
  },
  multiply: function(a, b) {
    return a * b;
  }
}

export function caesarChiper(str, shift) {
  let result = '';
  let charcode = 0;
  let fromlast = 0;

  for (let i = 0; i < str.length; i++) {
    charcode = (str[i].charCodeAt()) + shift; //125
    fromlast = 123 - str[i].charCodeAt(); //2
    if(charcode >= 123) {
      charcode = 97 + (shift - fromlast); //99
    }
    result += String.fromCharCode(charcode);
  }
  return result;
}

export function analyzeArray(array) {
  const object = {
    average: averagef(array),
    length: array.length,
    max: maxf(array),
    min: minf(array)
  };
  return object;
}

function averagef(a) {
  let sum = 0;
  for(let num of a) {
    sum += num;
  }
  return sum / a.length;
}

function minf(a) {
  let min = 999999;
  for(let num of a) {
    if(num < min) {
      min = num;
    }
  }
  return min;
}

function maxf(a) {
  let max = 0;
  for(let num of a) {
    if(num > max) {
      max = num;
    }
  }
  return max;
}