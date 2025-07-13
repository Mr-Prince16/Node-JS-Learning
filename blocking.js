const crpto = require("node:crypto");

console.log("Hello World");

var a = 10;

var b=5;
// pbkdf2 - Password Base Key Deravative Function
// Synchronous Function - Will Block the Main Thread - Don't Use it
console.log("========");
crpto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First Key is generated");

setTimeout(()=>{
    console.log("Call me right now !!!!!");
},0) // it will only be called once call stack of main thread is empty

// Async Function
crpto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("Second key is generated");
});

function multiplyFn(x,y){
    const result = a*b;
    return result;
}
var c = multiplyFn(a,b);
console.log("Multiplication result is :", c)