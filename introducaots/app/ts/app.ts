//Primeira questao

//A:
// let a = 10;
// a = "2"

//B:

let b: any = 10;
b = 2

//C:

let c:number = 10;
c = 2;

// Resposta: A letra a não roda porque a variavel foi tipada como number e uma vez que uma variavel no typescript ela não pode ser trocada de tipo;


//Segunda questão

function soma(x: number, y?:any):number{

    return x + y
}

//A:
console.log(soma(1,2));

//B:
console.log(soma(1,"2"));

//C:
console.log(soma(1));

//RESPOSTA: A LETRA C NÃO FUNCIONA PQ A FUNÇÃO ESPERAVA COMO PARAMETRO 2 NUMEROS;


//TERCEIRA

enum Estados {"PI", "CE", "MA"}

for( let i = 0; i < Object.keys(Estados).length / 2; i++)
    console.log(Estados[i])


//QUINTA

function exibir(...letras : string[]){
    
    for (let letra of letras)
        console.log(letra)
}

exibir("A", "B");

//SEXTA

var ola = () => "Olá";

console.log(ola());

//SETIMA
let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numeros = numeros.filter(x => x%2==0)

console.log(numeros)