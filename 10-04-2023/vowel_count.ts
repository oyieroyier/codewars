/*
 Return the number (count) of vowels in the given string.

 We will consider a, e, i, o, u as vowels for this Kata (but not y).

 The input string will only consist of lower case letters and/or spaces.
*/

// Submitted answer
export class Kata {
	static getCount(str: string): number {
		let count = 0;

		for (let i = 0; i < str.length; i++) {
			/[AEIOUaeiou]/.test(str.charAt(i)) ? count++ : count;
		}
		return count;
	}
}

// Alternate solution

export class Kat {
	static getCount(str: string) {
		return [...str].filter((char) => 'aeiou'.includes(char)).length;
	}
}
