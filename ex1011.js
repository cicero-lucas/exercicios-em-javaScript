let input= require('fs').readFileSync("teste","utf-8");
let valores=input.split("\n");
let valor=parseFloat(valores.shift());
let r=Math.pow(valor,3) ;
let pi=3.14159;
let area=((4.0)/3)*pi*r;
console.log(`VOLUME = ${area.toFixed(3)}`);