console.log("Test");

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
function fizzbuzz() {
    for (var i = 1; i < 30; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        if (i % 5 == 0) console.log("Fizz");
        if (i % 3 == 0) console.log("Buzz");
        else console.log(i);
    }
}

fizzbuzz();
