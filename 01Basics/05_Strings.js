const name= "Swapnil"
const repoCount= 20

// consonle.log(name + repoCount +"Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
/*
 we generally use Backticks(`  `) beacuse
-> they allow us to embed any expression using ${...}
-> they allow a string to span multiple lines
*/

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;

// console.log(guestList);


const gameName= new String('swapnil');

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('p'));


const newString = gameName.substring(0,4)
console.log(newString);


let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
console.log( str.slice(-4, -1) ); // 'gif'

const anotherString = gameName.slice(-17,4)
console.log(anotherString);

const newStringOne="     Swapnil's game   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url=" https://hitesh.com/hitesh%20ch"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))

