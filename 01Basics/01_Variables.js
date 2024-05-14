const accountId=1234 // Used for creating a constant variable
let accountemail="swapnil@redifmail"
var Password="0000"
 accountCity="Banglore"
/*
we prefer not to use var for the  variable creation beacuse of functional Scope
*/

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log( $ , _ );
/*
There are two limitations on variable names in JavaScript:

->The name must contain only letters, digits, or the symbols $ and _.
->The first character must not be a digit.
*/

console.log(accountId);
accountemail="aarru"


// Case matters
// Variables named apple and APPLE are two different variables.

console.table([accountId, accountemail, Password,accountCity])


// The old "var" - There are some odd behaviours of var that's why it is replaced by let in new JS

/*

-> “var” has no block scope
Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.


-> "var” tolerates redeclarations
 var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored:

var user = "Pete";

var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John

*/