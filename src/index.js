module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let zeros = 0;

  let numberOfOddFactorials = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isFactorial(arr[i])) {
      break;
    }
    if ((isDoubleFactorial(arr[i])) && (isParseIntToOdd(arr[i]))) {
      numberOfOddFactorials++;
    }
  }
//
  if (numberOfOddFactorials == arr.length) {
    return zeros;
  }
//
//
  for (let i = 0; i < arr.length; i++) {
    let factorial = parseInt(arr[i]);
    if (isFactorial(arr[i])) {
      for (let factor = 1; factor <= factorial; factor++) {
        zeros += getZeros(factor);
      }
      continue;
    }
//
    if (isDoubleFactorial(arr[i])) {
      for (let factor = 1; factor <= factorial; factor++) {
        if ((isDoubleFactorialOdd(factorial)) && (factor % 2 == 0)) {
          zeros += getZeros(factor);
        }
//
        if ((!(isDoubleFactorialOdd(factorial))) && (factor % 2 == 1)) {
          zeros += getZeros(factor);
        }
      }
    }
  }
  return zeros;
}
//
//
function isFactorial(str) {
  return (!(isNaN(str.slice(0, -1))));
}

function isDoubleFactorial(str) {
  return (!(isNaN(str.slice(0, -2))));
}

function isParseIntToOdd(str) {
  return (parseInt(str) % 2 == 1);
}

function getZeros(number) {
  if (number % 25 == 0) {
    return 2;
  }
  if (number % 5 == 0) {
    return 1;
  }
  return 0;
}

function isDoubleFactorialOdd(factorial) {
  return (factorial % 2 == 0);
}
