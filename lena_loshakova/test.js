var a = +prompt("Enter the first number :");
var b = +prompt("Enter the second number :");
var functionBody = prompt("Enter the body :");

var c = new Function( 'a, b', functionBody );
c(a, b)