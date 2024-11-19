function verificarLogin(usuario) { return usuario && usuario.nome || "Usuário anônimo"; }
 // Testando a função 
 console.log(verificarLogin({ nome: "Carlos" })); // Saída: "Carlos"
  console.log(verificarLogin({})); // Saída: "Usuário anônimo" 
  console.log(verificarLogin(null)); // Saída: "Usuário anônimo" 