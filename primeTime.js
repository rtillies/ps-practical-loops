/***************************
 * PART 2: Prime Time      *
 * Name: Richard Tillies   *
 * Date: February 15, 2024 *
 ***************************/

// returns random positive number
const newRandom = (number = 10000) => 
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

// create "small" random number and return next prime number
let x, y
x = newRandom(100)
console.log(`Number: ${x}`);
y = nextPrime(x)
console.log(`Next Prime: ${y}`);

// create another random number and return next prime number
x = newRandom()
console.log(`Number: ${x}`);
y = nextPrime(x)
console.log(`Next Prime: ${y}`);
