let input= require('fs').readFileSync("teste","utf-8");
let valores=input.split("\n");
let produto=valores.shift();
let produto2=valores.shift();
let [c,n,v]=produto.split(" ");
let [c2,n2,v2]=produto2.split(" ");

let cod=parseInt(c);
let nun=parseInt(n)
let valor=parseFloat(v);
let cod2=parseFloat(c2);
let nun2=parseFloat(n2)
let valor2=parseFloat(v2);

let total=0;

for(let i=0; i<nun; i++){
    total+=valor
}
for(let i=0; i<nun2; i++){8
    total+=valor2
}

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)


