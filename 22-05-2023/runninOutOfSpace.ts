/*
 Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
 
 For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

*/

// Submitted Answer

function spacey(array: string[]) {
	let newArray: string[] = [];

	array.forEach((e, i) => {
		newArray.push(
			i === 0
				? e
				: `${newArray[(i + array.length - 1) % array.length] + e}`.trim()
		);
	});
	return newArray;
}

// Alternative implementation:

function space(array: string[]) {
	let string = '';
	return array.map((e) => (string += e));
}

console.log(spacey(['i', 'have', 'no', 'space']));
