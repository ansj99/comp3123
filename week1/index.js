console.log('Hello, world 1');
console.log('Hello, world 2')

var obj1 = {
    name: 'John',
    age: 30
};

var obj2 = {
    fname: "Ans",
    myage: 21,
    result:"pass",
    pass: true,
    courses: ['Math', 100, 'English'],
    car: null
};

var x = 100.5
console.log(typeof x)
console.log(typeof obj1)
console.log(typeof obj2.fname)
console.log(typeof obj2.courses)
console.log(typeof obj2.car)

function greet() {
    console.log('Hello, Ans')
}

console.log(typeof greet)

var greet2 = greet3 = function(){
    console.log('hello, Ans')
}


var greet5= (name)=> {
    console.log('Hello, ' + name)
}

