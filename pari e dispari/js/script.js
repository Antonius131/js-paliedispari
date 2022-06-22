// l'utente inserisce un numero da 1 a 5 ==> prompt()
// generare un numero random (math.random) per il computer (da 1 a 5) ==> usare una funzione

// Sommare i due numeri scelti
// stabilire se la somma dei numeri è pari o dispari ==> usare una funzione


function randomNumber() {
   return Math.floor(Math.random() * (6 - 1) + 1);
}

function numbersSum (num1, num2) {
   let sum = num1 + num2;

   if (sum % 2 === 0) {
      return alert('Pari!');
   }
   return alert('Dispari!');
}


const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
const computerNumber = randomNumber();

numbersSum(userNumber, computerNumber);

console.log(`Hai scelto: ${userNumber}`);
console.log(`Il computer ha scelto: ${computerNumber}`);