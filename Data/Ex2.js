let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1; // Janeiro é 0, então somamos 1
let dia = dataAtual.getDate();

// Usando template literals para formatar a string corretamente
console.log(`Ano: ${ano}, Mês: ${mes}, Dia: ${dia}`);
