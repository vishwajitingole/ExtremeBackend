//Variables in JS
var d = 10;
let e = 20;

//Hoisting in JS
console.log(a); // undefined (hoisted)
var a = 5;
console.log(b); // ReferenceError (hoisted but uninitialized)
let b = 10;
console.log(c); // ReferenceError (hoisted but uninitialized)
const c = 15;

//Primitives and references
//[] {} () :- These are reference value, rest all other are primitives
var a = [1, 2, 3];
var g = a;
g.pop();
console.log(b);
//Here if we make changes in b array then changes will be reflected as well in a
//Reason the values are passed as a reference but not as a value
var a = [1, 2, 3];
var f = [...b];
f.pop();
console.log(a);
//Here we use spread operator and copied the values in the f
var a = { name: "a", type: "plastic" };
var h = { ...a };
h.name = "Vishwajit";
console.log(a);
//Same goes in objects too

//All the falsy values in JS
//0 false undefined NaN null "" document.all
var i = 0 || 12;
var j = document.all || 31;
// automatically 12 and 31 will be assigned reason because left side value is a falsy value in JS
//So the truth value gets added in the var
