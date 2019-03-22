//Primeira questao
//A:
// let a = 10;
// a = "2"
//B:
var b = 10;
b = 2;
//C:
var c = 10;
c = 2;
// Resposta: A letra a não roda porque a variavel foi tipada como number e uma vez que uma variavel no typescript ela não pode ser trocada de tipo;
//Segunda questão
function soma(x, y) {
    return x + y;
}
//A:
console.log(soma(1, 2));
//B:
console.log(soma(1, "2"));
//C:
console.log(soma(1));
//RESPOSTA: A LETRA C NÃO FUNCIONA PQ A FUNÇÃO ESPERAVA COMO PARAMETRO 2 NUMEROS;
//TERCEIRA
var Estados;
(function (Estados) {
    Estados[Estados["PI"] = 0] = "PI";
    Estados[Estados["CE"] = 1] = "CE";
    Estados[Estados["MA"] = 2] = "MA";
})(Estados || (Estados = {}));
for (var i = 0; i < Object.keys(Estados).length / 2; i++)
    console.log(Estados[i]);
//# sourceMappingURL=app.js.map