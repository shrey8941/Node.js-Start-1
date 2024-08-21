Node.js FileSystem Module 

const fs = require('fs')

const txt = fs.readFileSync('./demo.txt','utf-8');
console.log(txt)

fs.readFile('demo.txt','utf8',(err,txt)=>{
    console.log(txt)
})
