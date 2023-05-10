/*
 Complete the solution so that it reverses the string passed into it.

 'world'  =>  'dlrow'
 'word'   =>  'drow'

*/

// Submitted solution

export function solution(str: string): string {
  return str.split("").reverse().join("");
}
