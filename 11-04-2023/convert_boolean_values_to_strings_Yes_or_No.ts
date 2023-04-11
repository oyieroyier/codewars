/*
 Convert boolean values to strings 'Yes' or 'No'.
*/

export const boolToWord = (bool: boolean): string => {
	return bool ? 'Yes' : 'No';
};

console.log(boolToWord(true));
