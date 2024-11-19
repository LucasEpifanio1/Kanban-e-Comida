function diferencaDias(data1, data2) {
    let d1 = new Date(data1);
    let d2 = new Date(data2);
    let umDia = 1000 * 60 * 60 * 24;
    return Math.ceil((d2 - d1) / umDia);
}
console.log(diferencaDias('2024-11-01', '2024-11-06'));

//// depois fazer
