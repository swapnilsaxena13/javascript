// Singleton
// Object.create

//object literals

const jsUser={
    name:"Swapnil",//This name is taaken as a String it is not compulsay to write it as "name", it has been already taken like that 
    "full name":"Swapnil Saxena",// now we can't acces this using a dot operator
    age:21,
    location:"Dehradun",
    email:"swapnil@gamil.com",
    isLogedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// // console.log(jsUser."full name") //This will show an error
// console.log(jsUser["full name"])

// jsUser.email="swapnil@yahoo.com"
// Object.freeze(jsUser)
// jsUser.email="swapnil@rediffmail.com"
// console.log(jsUser)


jsUser.greeting=function(){
    console.log("Hello JS User")
}

jsUser.greeting2=function(){
    console.log(`Hello JS User ${this.name}`)
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())
console.log(jsUser.greeting2())