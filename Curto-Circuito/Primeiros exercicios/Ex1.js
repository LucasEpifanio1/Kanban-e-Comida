function log(p) {
    return p && "isto sera exibido";
}

const p = false;
console.log(log(p)); 



///  se o primeiro valor foi falso, ele pega o segundo valor e atribiu a variavel
/// se o primeiro valor for verdadeiro ele atribiu a primeira variavel.  isso é no caso de OU = ||

/// se as duas condições forem foram verdades e não tiver nenhuma variave nela , irar imprimir : undefined
/// se a primeira condição for verdadeira e ter varivael ele irar imprimir a segunda
/// e se as duas forem verdadeiras, ele irar imprimir a ultima.  isso é tudo no caso do   E = && 