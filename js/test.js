const constVariable = 'global const';   //local scoped
let letVariable = 'global let';         //local scoped
var varVariable = 'global var'; 



function localScope(){
const constVariable = 'local const';   //local scoped
let letVariable = 'local let';         //local scoped
var varVariable = 'local var';         //local scoped
console.log(constVariable);
console.log(letVariable);
console.log(varVariable);
}

localScope();


console.log(constVariable);
console.log(letVariable);
console.log(varVariable);

