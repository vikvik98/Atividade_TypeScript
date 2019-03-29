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
//QUINTA
function exibir() {
    var letras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letras[_i] = arguments[_i];
    }
    for (var _a = 0, letras_1 = letras; _a < letras_1.length; _a++) {
        var letra = letras_1[_a];
        console.log(letra);
    }
}
exibir("A", "B");
//SEXTA
var ola = function () { return "Olá"; };
console.log(ola());
//SETIMA
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numeros = numeros.filter(function (x) { return x % 2 == 0; });
console.log(numeros);
//# sourceMappingURL=app.js.map