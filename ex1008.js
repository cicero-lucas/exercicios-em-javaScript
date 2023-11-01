let input= require('fs').readFileSync("teste","utf-8");
let valores=input.split("\n");
let numero=parseInt(valores.shift());
let horas=parseInt(valores.shift());
let salario=parseFloat(valores.shift());
let dinheiros=(salario*horas);
console.log(`NUMERO = ${numero}`);
console.log(`SALARY = U$ ${dinheiros.toFixed(2)}`);