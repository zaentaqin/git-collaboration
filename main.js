<<<<<<< HEAD
//console.log("Test");
let array = [5,9,6,7,4]
function arrayMax() {
    return array.reduce((a, b)=> Math.max(a, b));
}
function arrayMin() {
    return array.reduce((a, b)=> Math.min(a, b));
}

console.log('nilai Min', arrayMin())
console.log('nilai Max', arrayMax())
=======
console.log("Test");

//fizzbuzz by zen
function fizzbuzz() {
  for (var i = 1; i < 30; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    if (i % 5 == 0) console.log("Fizz");
    if (i % 3 == 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzbuzz();
>>>>>>> 2e564d5e52eb82df149518780e7c60a385cc61ed
