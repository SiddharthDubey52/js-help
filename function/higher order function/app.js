// ist part means take one or more arguments as functions

// function multigreet(func,count){
//     for(let i = 0;i<=count;i++){
//         func();
//     }
// }



// let x = function(){
//     console.log("hello");
// }
// multigreet(x,4);

//2nd part
// return a function
// function oddorevenfactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//     console.log(!(n%2==0));
// }
//  return odd;
//     }else if(request == "even"){
//         let even = function(n){
//     console.log(n%2==0);
// }
// return even;
//     }else{
//         console.log("Wrong request");
        
//     }
// }

// let request = prompt("Enter a odd or Even value");

// methods
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;

    },
    div: function(a,b){
        return a/b;
    }
}