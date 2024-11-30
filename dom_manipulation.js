// it is the way to ignore html file to create new thing on ui we create new object on ui through this manipulation in js

// let h1 = document.createElement("h1");
// h1.textContent = "hello js"; 
// h1.innerHTML = "<mark>Hello World</mark>"; // inner html and text content are different when we use text content instead of inner html it show whole tag as a word but in innerHTML it hold the tag in html file and display only HEllo World on UI.
// console.log(h1);

// document.body.appendChild(h1) // it add the h1 in html file to show on ui 



let data = [10,20];
data.map(() => {
    let div = document.createElement("div")
let img = document.createElement("img")
let h1 = document.createElement("h1")
h1.textContent = "Topic List Image";
div.setAttribute("id","card")
img.setAttribute("src","./0 Topics List.png")
div.appendChild(img)
div.append(h1)
document.body.append(div)

})


// console.log(div)