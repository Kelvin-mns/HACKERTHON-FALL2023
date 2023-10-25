// Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. 
// It can lead to unexpected behavior because the rules for these conversions are not always intuitive.

console.log(1 == "1");
console.log(true == 1);
console.log("true" == true);

// n the first line, the string "1" is coerced to the number 1 before the comparison, so the result is true. 
// In the second line, the boolean true is coerced to the number 1, so again the result is true. But in the third line, 
// the string "true" is not coerced to a boolean, and the boolean true is not coerced to a string. 
// Instead, the boolean true is coerced to the number 1, and the comparison is false.

console.log(5 === true)

// To avoid unexpected behavior due to type coercion, you can use the === operator, which does not perform type coercion. 
// If the values being compared are not of the same type, === will simply return false.