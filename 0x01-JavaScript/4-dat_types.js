// Primitive data types include Number, String, Boolean, Null, Undefined, and Symbol. 
// These types hold a value that is directly stored and accessed. 
// When you assign a primitive value to a new variable, the value is copied

let a = 20;
let b = a;
a = 30;
console.log(b);

// Reference data types, on the other hand, include Object, Array, and Function. 
// These types do not hold the actual data. Instead, they hold a reference to the data. 
// When you assign a reference value to a new variable, the reference is copied, not the actual value

let obj1 = {value: 10};
let obj2 = obj1;
obj1.value = 55;

console.log(obj2.value);