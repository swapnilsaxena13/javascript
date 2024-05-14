// Immediately Invoked Function Expresion(IIFE)
/*
In the past, as there was only var, and it has no block-level visibility, 
programmers invented a way to emulate it. 
What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).
*/

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

// Unnamed IIFE
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Swapnil')


