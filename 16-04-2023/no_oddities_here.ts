/*

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

*/
// Submitted solution
export function noOdds(values: number[]): number[] {
	return values.filter((num) => num % 2 === 0);
}

// Other solution:
export function noOdd(values: number[]): number[] {
	return values.filter((i) => !(i % 2));
}
