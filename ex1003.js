let input= require('fs').readFileSync("teste","utf-8");
let valores=input.split("\n");
let a=parseInt(valores.shift())
let b=parseInt(valores.shift())
let soma=a+b
console.log(`SOMA = ${soma}`)
