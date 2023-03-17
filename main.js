console.log("Test");

const isAnagram = function (s, t) {
    if(typeof(s) === "string") {
        const s1 = s.split('').sort().join('');
        const s2 = t.split('').sort().join('');

        return (s1 === s2)
    }
};

console.log(isAnagram("maksud", "muskud"));