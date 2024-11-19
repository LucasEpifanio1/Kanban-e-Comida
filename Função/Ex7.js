function inverterPalavra(palavra) {
    return palavra.split('').reverse().join('');
}

let palavraInvertida = inverterPalavra("exemplo");
console.log(palavraInvertida);