// When an operator or statement expects a certain type, JavaScript will automatically convert the data to that type.
// For example, when you use the + operator with a string and a non-string, JavaScript will convert the non-string to a string:

let num = 50;
console.log("The number is " + num);

// nother example is when you use non-string types in contexts that expect a string, like alert() or console.log():

let bool = true;
console.log(bool);

// Here, the boolean true is implicitly converted to the string "true"