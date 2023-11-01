
let input= require('fs').readFileSync("teste","utf-8");
let valores=input.split(" ");
let r=parseFloat(valores.shift());
let pi=3.14159
let a=pi*(Math.pow(r,2));

console.log(`A= ${(a.toFixed(5))}`)