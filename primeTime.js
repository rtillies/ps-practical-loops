/***************************
 * PART 2: Prime Time      *
 * Name: Richard Tillies   *
 * Date: February 15, 2024 *
 ***************************/

const MAX_NUMBER = 10000

// returns random positive number
const newRandom = (number = MAX_NUMBER) => 
  Math.floor(Math.random() * number) + 1

// returns next prime number greater than given number
const nextPrime = number => {
  while (true) {
    if (isPrime(++number))
      return number
  }
}

// returns if the given number is a prime number
const isPrime = number => {
  let prime = true;

  if (number == 1) {
    prime = false;
  } else {
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        prime = false;
        break;
      }
    }
  }
  return prime;
}

const runProgram = number => {
  if (!number) number = MAX_NUMBER

  let x = newRandom(number)
  let y = nextPrime(x)
  console.log(` ${x} | Next Prime: ${y}`);
}

// create "small" random number and return next prime number
runProgram(100)

// create (potentially) larger random number and return next prime number
runProgram()