/* 
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]


*/

export function multiplicationTable(size: number): number[][] {
	const result: number[][] = [];

	for (let row = 1; row <= size; row++) {
		const currentRow: number[] = [];

		for (let column = 1; column <= size; column++) {
			currentRow.push(row * column);
		}

		result.push(currentRow);
	}

	return result;
}


console.table(multiplicationTable(3));