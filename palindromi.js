/* Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

// far inserire una parola all'utente

const newWord = prompt("Inserisci una parola e scopri se è palindromo"); //string

// funzione

// let reversedWord = " ";
function isPalindrome(word) {
  let message = " ";
  word = newWord;
  console.log(newWord);
  // uniformare i caratteri della parola
  const wordUpperCases = word.toUpperCase();
  console.log(wordUpperCases);
  // rendere la parola speculare con reverse
  const reversedWord = wordUpperCases.split("").reverse().join("");
  console.log(reversedWord);
  // confrontare se la parola sia identica al suo reverse

  // IF  true
  //  => RETURN la parola è palindromo
  if (reversedWord === wordUpperCases) {
    return (message = "È palindromo!");
  }
  // ELSE
  //  => RETURN la parola non è palindromo
  return (message = "Non è palindromo");
}

console.log(isPalindrome());
