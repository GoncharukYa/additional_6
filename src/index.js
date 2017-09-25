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
  for (let i = 0; i < arr.length; i++) {
    if (isFactorial(arr[i])) {
      let factorial = parseInt(arr[i]);
      for (let factor = 1; factor <= factorial; factor++) {
        if (factor % 25 == 0) {
          zeros += 2;
          continue;
        }
        if (factor % 5 == 0) {
          zeros++;
        }

        }
      continue;
    }
    if (!(isNaN(arr[i].slice(0, -2)))) {
      let currentFactor = parseInt(arr[i]);
      for (let k = 1; k <= currentFactor; k++) {

        if ((currentFactor % 2 == 0) && (k % 2 == 0)) {
          if (k % 25 == 0) {
            zeros += 2;
            continue;
          }
          if (k % 5 == 0) {
            zeros++;
          }
        }

        if ((currentFactor % 2 == 1) && (k % 2 == 1)) {
          if (k % 25 == 0) {
            zeros += 2;
            continue;
          }
          if (k % 5 == 0) {
            zeros++;
          }
        }
      }


}

  }
  return zeros;
}

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
    return +"2";
  }
  if (number % 5 == 0) {
    return +"1";
  }
}
