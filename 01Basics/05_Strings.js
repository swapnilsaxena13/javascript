const name= "Swapnil"
const repoCount= 20

// conso/le.log(name + repoCount +"Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
/*
 we are using Backticks(`  `)
*/

const gameName= new String('swapnil');

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('p'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-17,4)
console.log(anotherString);

const newStringOne="     Swapnil's game   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url=" https://hitesh.com/hitesh%20ch"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))

