// hoisting means that the variable and the function declaration are moved to the top of their containing scope during the compile phase
console.log(myFunc());
function myFunc(){
    return "Hello, James!";
}