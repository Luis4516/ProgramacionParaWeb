//nodejs es asincrono no bloqueante, javascript es sincrono
setTimeout(() => {console.log(`Hola 1 `);}, 0);
setTimeout(() => {console.log(`Hola 2 `);}, 4000); //Asincrono
console.log(`Hola 3 `); //Se ejecuta primero si otro es asincrono