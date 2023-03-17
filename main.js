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