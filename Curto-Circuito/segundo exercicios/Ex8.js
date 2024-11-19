function CalcularDesconto (preco){
    return preco && preco *0.09 || "Preço inválido"
}

console.log(calcularDesconto(100)); // Saída: 90
console.log(calcularDesconto(0)); // Saída: "Preço inválido"
console.log(calcularDesconto(null));// Saída: "Preço inválido"
 console.log(calcularDesconto(50)); // Saída: 45