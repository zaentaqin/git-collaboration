console.group("PEngurutan angka")
console.log("Test");
// Tugas Sidiq Discending
var marks = [12, 25, 31, 23, 75, 81, 100];

// Print Before Sorting Array
console.log("Original Array");
console.log(marks);

// Call sort function
marks.sort();

console.log("After Sorting in Ascending Order");

// Print Sorted Numeric Array
console.log(marks);
console.groupEnd();

// console.log("Test");


// Function Sort - Adli
console.group("Func Sort : Aldi");
var numArray = [11, 16, 18, 20, 26, 50, 100, 1000, 81, 75];
numArray.sort(function (a, b) {
    return a - b;
});

console.log(numArray);
console.groupEnd();

// Tugas e hamdan
console.group("tugase hamdan : palindrom");
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // mengubah semua huruf menjadi lowercase dan menghapus karakter non-alphanumeric
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return "Bukan Palindrom";
        }
    }
    return "Termasuk Palindrom";
};

console.log(isPalindrome("civic"));
console.log(isPalindrome("mana anam"));
console.log(isPalindrome("turbo"));
console.groupEnd();

//fizzbuzz by zen
console.group("fizzbuz by zen");
function fizzbuzz() {
    for (var i = 1; i < 30; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        if (i % 5 == 0) console.log("Fizz");
        if (i % 3 == 0) console.log("Buzz");
        else console.log(i);
    }
}

fizzbuzz();
console.groupEnd();
