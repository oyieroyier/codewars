/*

 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

 Examples input/output:

 XO("ooxx") => true
 XO("xooxx") => false
 XO("ooxXm") => true
 XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 XO("zzoo") => false
*/

// Submitted answer
function XO(x: string): boolean {
  const a = x
    .toLowerCase()
    .split("")
    .filter((char) => char === "x" || char === "o")
    .reduce((accumValue: { [key: string]: number }, currentValue: string) => {
      accumValue[currentValue] = (accumValue[currentValue] || 0) + 1;
      return accumValue;
    }, {});

  return a.x === a.o;
}

// Other answer:
/*
 Check if the length of the Array when you remove all Xs from the string
 is equal to the length of the array when you remove all Os from the string
		🤯
*/
function xo(str: string) {
  return (
    str.toLowerCase().split("x").length == str.toLowerCase().split("o").length
  );
}
