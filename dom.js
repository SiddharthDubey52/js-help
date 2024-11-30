// ! Dom Selectors
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectoAll()


// document.getElementById()
// let h1 = document.getElementById("head");
// console.log(h1);

// getElementsByClassName()
// it is used to target multiple elements with the same classname and returns a HTMLCOLLECTION()
// HTMLCOLLECTION is an impure array

// let section = document.getElementsByClassName("container");
// console.log(section);
// console.log(section[2]);
// console.log(Array.isArray(section))   // false

// let pureArr = Array.from(section);
// console.log(pureArr) // give TRUE  // by using pure we convert impure array to pure array after that conversion we use operation on array 

// console.log(Array.isArray(pureArr));  // TRUE

// pureArr.pop()
// console.log(pureArr);


// let head = document.getElementById("head");
// console.log(head);  
// console.log(head.textContent); // Welcome to dom1

// let head = document.getElementById("heaD");
// console.log(head);  // it gives null because id name is not same 
// console.log(head.textContent);

// let container = document.getElementsByClassName("container");
// console.log(container[0].textContent);
// console.log(container[1].textContent);
// console.log(container[2].textContent);

// document.getElementsByTagName()
// let section = document.getElementsByTagName("section")
// console.log(section)
// console.log(section[1].textContent)

// document.querySelector(#id,.class,tagname)  they accept both 

// let head = document.querySelector("#head")
// console.log(head)

// let section = document.querySelector(".container")
// console.log(section)

// // priority 
// // id
// // class 
// // tagname
// // it give only one but follow above priority
// let element = document.querySelector("p,#head,.container")
// console.log(element)
//!Dom Events
// onclick
// ondblclick
// onmouseenter
// onmouseleave
// onmousemove
// onkeydown
// onkeyup
// onchange
// onload
// onscroll



//onclick
function clickfun(){
   console.log("single clicked");
}

//ondblclick
function clickdbl(){
   console.log("Double clicked");
}

//onmouseenter
function enter(){
   console.log("Mouse entered");
}


//onmouseleave
function leave(){
   console.log("Mouse left ");
   
}


//onmouse move
function move(){
   console.log("Mouse moved");
}

// onkeydown

function down(){
    console.log("key pressed");
}

// onkeyup
function up(){
    console.log("key released");
}
// change
function changeme(){
console.log("changed");
}

// // formsubmit

// function formdata(e){
//      e.preventDefault();

//     let email = document.querySelector("#email");
//     let password = document.querySelector("#password");
//     let user = {
//              email:email.value,
//              password:password.value,
//          };
//          console.log(user);
// }


function formdata(e){
   e.preventDefault();
   let email = document.getElementById("email");
   let password = document.getElementById("password");
   let user = {
       email:email.value,
       password:password.value,
   };
   console.log(user);
   
}

// onload
function webpageLoad(){
   console.log("Webpage loaded");
}

// onscroll
function parascroll(){
   console.log("Paragraph Scrolled");
}