console.log("Test");

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