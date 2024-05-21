/*

4 pillars of DOM

1.Selection of Element
2.Changing HTML
3.Changing CSS
4.Event Listener

*/ 


/*  Selection of Element    */ 



// for tags
var a = document.querySelector("h1")
console.log(a);
// for id
// document.querySelector("#box");

// for class 
// document.querySelector(.class)

/*      Changing HTML     */ 

var a =document.querySelector("h1")
a.innerHTML = "Changed"


/*      Changing CSS     */ 
var a =document.querySelector("h1")
a.style.color = "pink";
a.style.backgroundColor="green";

/*      Event Listener    */ 

var a =document.querySelector("h1")
a.addEventListener("click",function(){
console.log("hey!")
a.innerHTML= "You Clicked"
a.style.color="yellow"

})

