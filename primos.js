// Goals: 
// 1. Finds all the prime numbers between 1 and 1000. 
// 2. Sums all the prime numbers that you found between 1 and 1000. 
// 3. The `main` function should return the sum of all prime numbers. 
// Develop the solution entirely on this editor.
// A prime number is a natural number greater than 1 that is only divisible by 1 and itself. 
// 2, 3, 5, 7, 11, 13 etc are prime numbers. 
// 4 for example, is not a prime number since 4 is divisible by 2. 4 / 2 = 2. 
// Bonus points for a more functional approach in your code. 
// For example, try to use array functions such as map, filter or reduce.


//numeros primo = numero divisivel só por 1 e ele mesmo
//ex: 3 é divisivel só por 1 e 3 (primo)
//4 é divisivel por 1, 2, 4 (não é primo)

function verify(numeroCheck) {
  for (let i = 2; i < numeroCheck; i++) 
  if (numeroCheck % i == 0) 
  return false;
  //ex: 4 % 2 == sobra 0 é divisivel por 2 e 4, não é primo
  //retorna false
  return true;
  //3 % 2 == sobra 1 é divisivel só por 1 e 3, é primo
  //retorna true
}

//console.log(verify(3));

// loop para verificar todos os numeros entre 2 e 5
// for (let i = 2; i <= 5; i++) {
//   if (verify(i)) {
//     console.log(i);
//   }
// }

function sum(x) {
  let soma = 0
  for (let i = 2; i <= x; i++) {
    if (verify(i)) {
      soma = soma + i;
    }
  }
  return soma;
}
console.log(sum(7));

// 2 + 3 + 5 + 7 = 17
