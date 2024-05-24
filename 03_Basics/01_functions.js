function sayMyName(){ 
    console.log("H")
    console.log("I") 
}
sayMyName()

// function addTwoNumbers(number1, number2){//Parameters: when we pass a value in defination of a function
// console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){//Parameters: when we pass a value in defination of a function
let result=number1+number2
return result
console.log("Swapnil") // After writting return none of the is getting executed
}

console.log(addTwoNumbers(3,"s")) //Arguments: when we pass a value in function
console.log(addTwoNumbers(3,null))

const result =addTwoNumbers(3,5)
// console.log(result)

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username")
        return

    }

    return `${username} just logged in `
}
console.log(loginUserMessage())


function calculateCartPrice(val1, val2,...num1){//"..." This is a rest operator and a spread operator
    return num1
}

console.log(calculateCartPrice(200,400,500,3000))


// how to pass Object in functions 
const user={
    username: "swapnil saxena",
    price:199
}

function handleObject(anyobject){
    console.log(`Usename is ${anyobject.username} and price is ${anyobject.price}`);
}
 
handleObject(user)

handleObject({  // we can directly pass an object in function 
    username:"Swap",
    price : 399
})


const myNewArray=[200,400,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,600,100]));

