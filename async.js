const fs = require("node:fs");
const https= require("https");

console.log("Hello World");

var a =5;
var b= 10;

// Synchronous

fs.readFileSync("./file.txt", "utf8"); // 10ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("Fetched data successfully")
});

setTimeout(()=>{
    console.log("setTimeout called after 5 secons")
}, 5000);

// Async function
fs.readFile("./file.txt", "utf8", (err, data) =>{
    console.log("File Data :", data);
});

function multiplyFn(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a,b);
console.log("Multiplication result is : ", c)