
// Question 2
/*
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

console.log(capitalize('fooBar'));  // Output: Foobar
console.log(capitalize('nodeJs'));  // Output: Nodejs
*/
// Question 3
/*
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors); 

*/

// Question 4
/*
const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);


*/
//Question 5


const array = [1, 2, 3, 4];

const calculateSum = array.reduce((sum, value) => sum + value, 0);
const calculateProduct = array.reduce((product, value) => product * value, 1);

console.log(calculateSum);
console.log(calculateProduct);




