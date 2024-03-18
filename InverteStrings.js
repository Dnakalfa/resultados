/*Resultado para questão 5:
Escreva um programa que inverta os caracteres de uma string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

// Teste da função com uma frase aleatoria (string) e utlizando o node no terminal
let stringOriginal = 'Hello, world!';
let stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida);
