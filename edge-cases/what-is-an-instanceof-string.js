"use strict"

var str = 'Hello';
var str2 = String('Hello');
var str3 = new String('Hello');
 
console.log(str instanceof String);  // false, builtin string cannot be used with instanceof, works only with objects
console.log(str2 instanceof String); // false, the factory method String() returns builtin type of string
console.log(str3 instanceof String); // true, new object created, instanceof works as expected