// console.log("Test");
// Function Sort - Adli
var numArray = [11, 16, 18, 20, 26, 50, 100, 1000, 81, 75];
numArray.sort(function(a, b) {
    return a - b;
  });
  
console.log(numArray);

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
