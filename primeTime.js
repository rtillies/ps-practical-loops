/***************************
 * PART 2: Prime Time       * 
 * Name: Richard Tillies   *
 * Date: February 15, 2024 *
 ***************************/

// returns random number between 2 and 10000
function newRandom() {
  return Math.floor(Math.random() * 10000) + 2
}

function nextPrime(number) {
  let nextFound = false
  while (!nextFound) {
    number++
    if (isPrime(number))
      return number
  }
}

function isPrime(number) {
  let prime = true;

  if (number == 1) {
    prime = false;
  } else {
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        prime = false;
        // console.log(`${number} is divisible by ${i}`);
        break;
      } else {
        // console.log(`${number} is NOT divisible by ${i}`);
      }
    }
  }
  return prime;
}

console.log(isPrime(45));
console.log(isPrime(47));

console.log(nextPrime(10));
console.log(nextPrime(11));

console.log(newRandom());
console.log(newRandom());
