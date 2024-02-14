/***************************
 * PART 1: Fizz Buzz       *
 * Name: Richard Tillies   *
 * Date: February 15, 2024 *
 ***************************/

const MAX_NUMBER = 100
const FIZZ = "Fizz"
const BUZZ = "Buzz"
const FIZZBUZZ = "Fizz Buzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0)
    console.log(FIZZBUZZ);
  else if (i % 3 == 0)
    console.log(FIZZ);
  else if (i % 5 == 0)
    console.log(BUZZ);
  else
    console.log(i);
}