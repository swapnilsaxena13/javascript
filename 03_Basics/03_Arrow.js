const user={
    username:"swapnil",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
    // console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="Swapnil"
//     console.log(this.username) // We are not able to use this in function 
//                                 // this can used in objects
// }
// chai()

// const chai = function(){
//     let username ="swapnil"
//     console.log(this.username);
// }

// const chai = ()=>{
//     let username ="swapnil"
//     console.log(this.username);
// }


// chai()

const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(3,4));

// Implicit return


// const addTwoagain=(num1,num2)=> num1+num2

// const addTwo2=(num1,num2)=> (num1+num2)

const addTwo2=(num1,num2)=> ({username:"Ayush"})

console.log(addTwo2(7,4));

const myArr =[2,3,5,7,4]

MimeTypeArray.forEach()