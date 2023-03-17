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
