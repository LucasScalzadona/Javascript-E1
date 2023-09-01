// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// function paraOimpar(numero) {
//   if (numero % 2 == 0) {
//     console.log("El número " + numero + " es par");
//   } else {
//     console.log("El número " + numero + " es impar");
//   }
// }

// paraOimpar(5);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   -

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// function mayorOigual(numero1, numero2) {
//   if (numero1 > numero2) {
//     console.log("El número " + numero1 + " es mayor");
//   } else if (numero2 > numero1) {
//     console.log("El número " + numero2 + " es mayor");
//   } else {
//     console.log("Los números son iguales");
//   }
// }
// mayorOigual(3, 3);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   -

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function múltiplo(numero) {
//   if (numero % 5 == 0) {
//     console.log("El número " + numero + " es múltiplo de 5");
//   } else {
//     console.log("El número " + numero + " no es múltiplo de 5");
//   }
// }

// múltiplo(10);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   -

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function contador(numero) {
//   for (let i = 0; i <= numero; i++) {
//     console.log(i);
//   }
// }

// contador(8);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   -

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function rep(numero, palabra) {
//   const rep = palabra.repeat(numero);
//   console.log(rep);
// }
// rep(8, " hola ");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   -

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// function ProgramasDiseño() {
//   for (let i = 0; i < 4; i++) {
//     console.log(programas[i]);
//   }
// }

// const programas = ["Photoshop", "Illustrator", "AfterEffects", "Premiere"];

// ProgramasDiseño();

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   -

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// function SacamosElQuinto(numeros) {
//   for (let i = 0; i < numeros.length; i++) {
//     if (i !== 4) {
//       console.log(numeros[i]);
//     }
//   }
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// SacamosElQuinto(nums);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   -

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// function numeros(numero, multiplica) {
//   for (let i = 0; i < numero.length; i++) {
//     const resultado = numero[i] * multiplica;
//     console.log(resultado);
//   }
// }

// const numero = [3, 5, 7, 9, 11];

// const multiplica = [3];

// numeros(numero, multiplica);
