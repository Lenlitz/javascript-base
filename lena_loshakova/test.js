 /*var a = +prompt("Enter the first number :");
var b = +prompt("Enter the second number :");
var functionBody = prompt("Enter the body :");

var c = new Function( 'a, b', functionBody );
//c(a, b)
//document.write("result: " + functionBody + "</br>");
function generateFunction() {
var a = +prompt("Enter the first number :");
var b = +prompt("Enter the second number :");
var functionBody = prompt("Enter the body :");
var c = new Function( 'a, b', functionBody );
return c;
}
document.write("result: " + functionBody + "</br>");
*/

// var a = undefind;
//console.log(a * 2);
//var a = 5; //hoisting 

function sumRange() {
var a = arguments;
var sum = 0;
   for(var i = 0; i < arguments.length; i++){
      sum += a[i];
   }

   return sum;
}
