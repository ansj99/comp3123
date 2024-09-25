var f1 = function greet(){
    console.log("Howdy Mate..!");
}

var f2 = function nigga(){
    console.log('Wassup Nigga?')
}

function greetUser(a , Nigga, Chad){
    if( a == 'nigga'){
        Nigga()
    }else{
        chad()

    }
}

greetUser('nigga', f1, f2)

setTimeout(()=> {
    console.log('After 5 seconds ')
}, 500);

console.log('End of the program')