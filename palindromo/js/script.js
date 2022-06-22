// devo chiedere all'utente di inserire una parola (prompt)
// creare una funzione in cui porre la seguente condizione:
//  if 'parola' = 'palindroma', stampare il risultato 'è palindroma'. Se no, stampare 'non è palindroma'


function palindomWord(word) {
   for (let i = 0;  i < word.length / 2;  i++) {
      if (word[i] != word[word.length - 1 - i]){
         return alert('non è un palindromo');
      }
   };

   return alert('è un palindromo');
};

const userWord = prompt('inserisci una parola');
const checkPalindrom = palindomWord(userWord);