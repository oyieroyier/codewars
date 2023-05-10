/*

 Complete the function that takes a sequence of numbers as single parameter.
 Your function must return the sum of the even values of this sequence.

 Only numbers without decimals like 4 or 4.0 can be even.

 The input is a sequence of numbers: integers and/or floats.

Examples
 [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
 []    

*/
// Initial submitted solution.
function sumEvenNumbers(input: number[]): number {
  return input.length
    ? input
        .filter((number) => number % 2 === 0)
        .reduce((sum, number) => sum + number)
    : 0;
}

// Refactored to this:
// Remember to set the initial value of the reduce method to 0.
function sumEvenNumber(input: number[]): number {
  return input
    .filter((number) => number % 2 === 0)
    .reduce((sum, number) => sum + number, 0);
}

// Better implementations:
// Run the filter inside the reduce method.
const sumEvenNumb = (a: number[]): number =>
  a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);
