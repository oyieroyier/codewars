/*
 Simple, given a string of words, return the length of the shortest word(s).

 String will never be empty and you do not need to account for different data types.
*/

// Submitted solution
export function findShort(s: string): number {
	let count: number = s.length;

	s.split(' ').map((e) => (e.length < count ? (count = e.length) : count));

	return count;
}

