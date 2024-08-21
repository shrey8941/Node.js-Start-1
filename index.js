const lib = require('./lib.js')

console.log(lib.diff(5,7),lib.sum(3,6))


// Readwrite module

const fs = require('fs')

const txt = fs.readFileSync('./demo.txt','utf-8');
console.log(txt)

fs.readFile('demo.txt','utf8',(err,txt)=>{
    console.log(txt)
})