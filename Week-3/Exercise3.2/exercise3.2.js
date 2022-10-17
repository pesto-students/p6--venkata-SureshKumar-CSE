// Define a function to add two numbers
function sum (a, b) {
    return this.a + this.b;
}

// Bind the function with object
const addition = sum.bind({ a: 10, b: 20 });
console.log(addition());


function greet() {
    var reply = [
        this.name,
        'typically sleep between',
        this.sleepDuration
    ].join(' ');

    console.log(reply);
}

var obj = {
    name: 'Suresh', sleepDuration: '8 and 10 hours'
};

// Call the function
greet.call(obj);


var numbers = [5, 6, 2, 3];
var max = Math.max,apply(null, numbers);
console.log(max);