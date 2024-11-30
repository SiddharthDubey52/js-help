// event listener

// let btn = document.querySelector("button");
// btn.addEventListener("click" , () => {} , use_capture);

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
btn.addEventListener("click" , () => {
console.log("btn clicked");
h1.style.backgroundColor = "red";
h1.style.color = "white";
})


let main = document.querySelector("main");
let sec = document.querySelector("section");
let article = document.querySelector("article");

main.addEventListener("click" ,(e) =>{
    e.stopPropagation()
    console.log("main");
    main.style.backgroundColor = "red";
}
,0);

Selection.addEventListener("click" ,(e) =>{
    e.stopPropagation()
    console.log("section");
    Selection.style.backgroundColor = "yellow"
},0);

