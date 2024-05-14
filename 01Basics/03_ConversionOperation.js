// The three most widely used type conversions are to string, to number, and to boolean.

// String Conversion – Occurs when we output something. Can be performed with String(value).

// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

// The conversion follows the rules:

// Value	            Becomes…
// undefined	        NaN
// null	                0
// true / false	        1 / 0

// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

// Value	                             Becomes…
// 0, null, undefined, NaN, ""	           false
// any other value                        true


let score="33abc"

 console.log(typeof score);
 console.log(typeof (score));

 let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 /*
 "33" => 33
 "33abc" => Nan
 true =>1 ; false=>0
 */

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
 
/******************Operations******************/
let value=3
let negValue= -value
console.log(negValue);
console.log(2+2)
console.log(2%3)

let str1="hello"
let str2="swapnil"

let str3= str1+str2
console.log("1"+2)

console.log("1"+2+2)
console.log(1+2+"2")

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter);   

