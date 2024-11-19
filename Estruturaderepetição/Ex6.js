let frase = "Esta é uma frase de exemplo";
let palavras = frase.split(" ");
let contador = 0;

for (let i = 0; i < palavras.length; i++) {
    contador++;
}

console.log("Número de palavras: " + contador);
