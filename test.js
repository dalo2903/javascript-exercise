// Javascript
// variable + function + control statement

var x = 10;
var y = 20;
// Array
x = [10, 20, 30, 40];
var y = x + 1;
y = y * y;
// INPUT + FUNCTION = OUTPUT
var plus = function(a, b) {
  return a + b;
};
var multiply = function(a, b) {
  return a * b;
};
// CONTROL
var x = 10;
var y = 5;
// if (x > y) {
//   console.log("nam'");
// }
var ss = function(a, b) {
  if (a > b) console.log(a);
  else {
    console.log(b);
  }
};
// FOR LOOP
// ARRAY
//var arr = ["cac", "lon", "zai", "zu"];
// console.log(arr[3]);
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// BAI TAP
var max = function(arr) {
  /* 
  CODE HERE
  VI DU:
  var arr = [2, 4,6,1 , 3, 9]
  console.log(max(arr)) ====> in ra 9 
  */
  arr = 3;
  return arr;
};
console.log(max([1, 3, 4]));
// VD 2
var find = function(text) {
  // tim` chu~ "nhac" trong chuoi~ neu co tra ve true, ko tra ve false
  // vd:
  // var text = "nhac toi di ia luc 9h"
  // console.log(find(text)) ==> in ra true
  // var text2 = "toi di ia luc 9h"
  // console.log(find(text2)) ==> in ra false
  // goi y: xai ham split text.split(" ")

  return true;
};
var a = "nhac toi di ia luc 9h";

console.log(a.split(" "));
