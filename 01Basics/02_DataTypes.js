//"use Strict"; // all code will be treated as a new version of js
// console.log(3+3) // we are using nodejs, not browser
console.log(3+3); 

console.log("Swapnil")
 let age=18
 let isLoggedIn=false
 let state=null

 /* 
 number =>2 to power 53
 bigint
 String=>""
 boolean=>true/false
 null=> standalone value
 undefined
 object
 */
console.log(typeof undefined); //undefined
console.log(typeof null); //object


// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

// String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

const score = 100
const scoreValue=100.3

const isloggedIn=false
const outsidetemp= null
let userEmail;
console.log(userEmail + " userEmail");

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId)

const bigNumber = 36886969448574839727348454847647n //Now it will be a BigInt 


// Besides regular numbers, there are so-called “special numeric values” 
// which also belong to this data type: Infinity, -Infinity and NaN.


// We can get it as a result of division by zero:
console.log( 1 / 0 ); // Infinity

// Or just reference it directly:
console.log( Infinity ); // Infinity

// NaN represents a computational error. 
// It is a result of an incorrect or an undefined mathematical operation:

console.log( "not a number" / 2 ); // NaN, such division is erroneous
console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN

// So, if there’s a NaN somewhere in a mathematical expression,
// it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).


//reference (Non primitive)
// Array, objects, Functions

const heros = ["shaktiman", "naagraj","doga"];

let myObj = {
    name:"hitesh",
    age:22,
}
const myFunction =function(){
    console.log("Hello World");
}
//++++++++++++++++++++++++++++++++++++++++
/*
Stack(Primitive)-> copy of that , Heap(Non-Primitive)-> Reference of that memory
*/
let myYoutubename= "Swapnil's channel";

let userOne={
    email:"user@google..com",
    upi:"user@ybl"
}

let userTwo = userOne;
 userTwo.email= "swapnil@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);