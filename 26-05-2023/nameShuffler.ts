/*

 Write a function that returns a string in which firstname is swapped with last name.

 Example(Input --> Output)

 "john McClane" --> "McClane john"

*/

function nameShuffler(str: string): string {
	const split = str.split(' ');
	return `${split[1]} ${split[0]}`;
}

// Alternative solution:
function nameShuffle(str: string): string {
	return str.split(' ').reverse().join(' ');
}
