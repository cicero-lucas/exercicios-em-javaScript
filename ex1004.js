const input= require('fs').readFileSync("teste","utf-8");
let valores=input.split("\n");
let a=parseInt(valores.shift())
let b=parseInt(valores.shift())
let prod=a*b
console.log(`PROD = ${prod} `)