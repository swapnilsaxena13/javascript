var c=300

if (true){
    let a= 10
const b=20
var c=30
}

// console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username ="Swapnil"
   
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website);

     two()
}
// one()



// if(true){
//     const username="Swapnil"
//     if(username==="Swapnil"){
//         const website="youtube"
//         console.log(username+website)
//     }
//     console.log(website);
// }
// console.log(username)


console.log(addone(5));
function addone(num){
    return num+1
}




addTwo(5)
const addTwo = function(num){
    return num+2
}



let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable



