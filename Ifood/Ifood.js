let prato;
let bebida;
let sobremesa;
let Qtdbebida;
let QtdPrato;
let Qtdsobremesa;


function escolherofrango() {
  document.getElementById("frango").style.borderColor = "green";
  document.getElementById("carne").style.borderColor = "white";
  prato = "frango";
  

}
function escolhercarne() {
  document.getElementById("carne").style.borderColor = "green";
  document.getElementById("frango").style.borderColor = "white";
  prato = "carne";
}

function escolhercocacola() {
  document.getElementById("CocaCola").style.borderColor = "green";
  document.getElementById("Chop").style.borderColor = "white";
  document.getElementById("Agua").style.borderColor = "white";
  bebida = "CocaCola";
}

function escolherChop() {
  document.getElementById("CocaCola").style.borderColor = "white";
  document.getElementById("Chop").style.borderColor = "green";
  document.getElementById("Agua").style.borderColor = "white";
  bebida = "Chop";
}

function escolherAgua() {
  document.getElementById("CocaCola").style.borderColor = "white";
  document.getElementById("Chop").style.borderColor = "white";
  document.getElementById("Agua").style.borderColor = "green";
  bebida = "Agua";
}

function escolherPudim() {
  document.getElementById("Pudim").style.borderColor = "green";
  document.getElementById("Sorvete").style.borderColor = "white";
  sobremesa = "Pudim";
}

function escolherSorvete() {
  document.getElementById("Pudim").style.borderColor = "white";
  document.getElementById("Sorvete").style.borderColor = "green";
  sobremesa = "Sorvete";
}

function finalizarPedido() {
  let menssagem;
  let QtdPedidos;
  menssagem =
  "Olá, gostaria de pedir um combo: " +
  prato +
  ", " +
  bebida +
  " e " +
  sobremesa +
  ".";
function menos(){
  
}

window.open("https://wa.me/+5531983141515?text=" + encodeURIComponent(menssagem));


}
