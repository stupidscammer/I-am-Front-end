const input = ["s", "t", "a", "r", "m", "i", "n", "d"];
const result = [];
function customReverse(accumulator, letter) {
    // Task 1: Implement this function such that it reverses the array when passing it to Array.prototype.reduce.
    input.reduce((accumulator, currentValue) => accumulator + currentValue,result);
}
function assignResult(array) {
    // Task 2: Above defined "const result" should hold the value of array.

}
assignResult(input.reduce(customReverse, []));
const testPassed = input.reverse().join("") === result.join("");