/* Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

// far inserire una parola all'utente

const newWord = prompt("Inserisci una parola e scopri se è palindromo"); //string

// funzione

let reversedWord = " ";
function isPalindrome(word) {
  let message = " ";
  word = newWord;
  console.log(newWord);
  const wordUpperCases = word.toUpperCase();
  console.log(wordUpperCases);

  const reversedWord = wordUpperCases.split("").reverse().join("");
  console.log(reversedWord);
  if (reversedWord === wordUpperCases) {
    return (message = "È palindromo!");
  }
  return (message = "Non è palindromo");
}

console.log(isPalindrome());

// uniformare i caratteri della parola
// rendere la parola speculare con reverse
// confrontare se la parola sia identica al suo reverse
// IF  true
//  => RETURN la parola è palindromo
// ELSE
//  => RETURN la parola non è palindromo
