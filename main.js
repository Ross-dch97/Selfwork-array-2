

let array1 = [3, 5, 10, 2, 8];

let somma = array1.reduce ((acc, n) => acc + n);

// console.log(somma);

let media = somma / array1.length;

// console.log(media);

let valoriMinori = array1.filter(val => val < media);

// console.log(valoriMinori);

let valoriMaggiori = array1.filter(val => val > media);

// console.log(valoriMaggiori);

let numeroValoriminori = valoriMinori.length;

// console.log(numeroValoriminori);

let numeroValorimaggiori = valoriMaggiori.length;

// console.log(numeroValorimaggiori);

console.log(`media dei valori è ${media}, i valori minori della media sono : ${valoriMinori}, il numero dei valori minori è ${numeroValoriminori} e il numero dei valori maggiori è ${numeroValorimaggiori}` );

