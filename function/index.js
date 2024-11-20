// let x = "color";

// let product = {
//     id:1,
//     tittle:"car",
//     price:9000000,
//     [x]:"black",
// };

// console.log(product);

// date :- 18-nov
// destructuring
// let arr = [10,20,30,40,[100,200,300]];
// console.log(arr[4][2]);

// let arr2 = [100,200,3000,["Hello",["Hello World"],4000]];
// let x1 = arr2[3][1][0];
// console.log(x1);

// let arr3 = [10,20,30,40];
// let [a,b,c,d] = arr3; // ARRAY DESTRUCTURING 
// console.log(a,b,c,d);

// let arr4 = [10,210,30,["hii",670]];
// let [p,q,r,[s,t]] = arr4;
// console.log(s);

// let arr5 = ["raj",1,["wipro",["developer"],5000],"abc"];
// let [u, ,[w,[x],y],z] = arr5;
// console.log(u);
// console.log(w);
// console.log(x);
// console.log(y);

// let arr6 = [10,["hello",60,["hii",[700,590,["byee"]]]]];
// let [,[a,,[b,[,,[c]]]]] = arr6;
// console.log(a,b,c);

// let obj = {
//     id:1,
//     tittle:"Laptop",
//     brand:"HP",
//     price:70000,
// };

// let{tittle} = obj;
// console.log(tittle);

// let obj1 = {
//     id:1,
//     title : "laptop",
//     price: 109.95,
//     category:"Electronics",
//     rating:{
//         rate:3.9,
//         count:120,
//     },
// };
// let{title,category,rating:{count,rate}} = obj1;
// console.log(title,category,count);


// let obj2 ={
//  id:2,
//  ename:"raj",
//  hobbies: ["cricket","football"],
//  skills:{
//     frontend:["html",'css','js','react'],
//     backend:['node','java','sql',"mongo",'express'],
//  },
// };

// let{ename,hobbies:[,a],skills:{frontend:[,,,b],backend:[,c,,,]}} = obj2;
// console.log(a,b,c);

// function test({id,ename},x){
//   console.log(id,ename,x);
// }
// test({id:1,ename:"raj"},100);



// let  x = fetch("https://api.github.com/users")
// console.log(x)

// Promise
// let data = [{id:1,ename:"john"},{id:2,ename:"wick"}];

// let err = {message: "failed tp fetch"};

// let p1 = new Promise((resolve,reject) => {
//     if(10>2){
//         resolve(data);
//     }
//     else{
//         reject(err);
//     }

// });
// console.log(p1);

// p1.then((result) => {
//     console.log("i am then()" , result);

// });
// p1.catch((err) => {
//     console.log("I am catch()",err);

// });

// p1.finally(() => {
//     console.log("I am finally()");
// });

let  p1 = fetch("https://api.github.com/users");
console.log(p1);

p1.then((response) => {
    console.log(response);
    let p2 = response.json();
    console.log(p2);
    p2.then((data) => {
        console.log(data);
    });

    p2.catch((err) => {
        console.log(err);
    });
});

p1.catch((err) => {
    console.log(err);
});