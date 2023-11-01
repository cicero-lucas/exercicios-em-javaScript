let input= require('fs').readFileSync("teste","utf-8");
let valores=input.split("\n");
let a=parseFloat(valores.shift());
let b=parseFloat(valores.shift());
let p1=a*3.5;
let p2=b*7.5;
let media=(p1+p2)/11;
console.log(`MEDIA = ${media.toFixed(5)}`);

