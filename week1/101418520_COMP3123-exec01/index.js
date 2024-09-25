// Question 1

function capitalizeFirstLetter(str) {
    return str.split(' ')
    .map(([first, ...rest]) => first.toUpperCase() + rest.join(''))
    .join(' ');
}
//  Q1 test
var q1TestIput = "the quick brown fox";
capitalizeFirstLetter(q1TestIput)
//console.log(capitalizeFirstLetter(q1TestIput));



// Question 2

function findLargestNum(x,y,z){
    largestNum = Math.max(x,y,z);
    return largestNum;
}
// Q2 test
// console.log(findLargestNum(1,0,1))
//console.log(findLargestNum(0,-10,-20))
//console.log(findLargestNum(1000,510,440))


// Question 3

function right(str) {
    if (str.length < 3) {
        return str;
    }
    else{
    let lastThree = str.slice(-3);  
    let restOfString = str.slice(0, -3);  
    return lastThree + restOfString;
    }
}
//Q3 test
//console.log(right("Python"));
//console.log(right("JavaScript"));
//console.log(right("Hi"));


//Question 4

function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } 
}
//Q4 test
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
