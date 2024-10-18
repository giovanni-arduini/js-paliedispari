/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer 
 (usando una funzione). Sommiamo i due numeri Stabiliamo 
 se la somma dei due numeri è pari o dispari (usando una funzione) 
 Dichiariamo chi ha vinto.
 */

// Scelta pari o dispari
let userSide;
const userChoice = prompt('Scrivi "pari" o "dispari" per scegliere');
const userChoiceUpper = userChoice.toUpperCase();
// IF utente sceglie pari
//  => giocherà per i pari
if (userChoiceUpper === "PARI") {
  userSide = "even";
}

// console.log(userSide);

// ELSE utente sceglie dispari
//  => giocherà per i dispari

// Inserire un numero da 1 a 5 inclusi
// function chooseNumber() {
let number;
const userNumber = prompt("Scegliere un numero da 1 a 5");
while ((number = userNumber)) {
  if (userNumber >= 1 && userNumber <= 5) {
    number = userNumber;
    console.log(number);
  } else {
    window.alert("Scegliere solo numeri da 1 a 5 inclusi!");
    const userNumber = prompt("Scegliere un numero da 1 a 5");
  }
}
// }

// FUNZIONE
// generare un numero randome da 1 a 5 inlcusi

// FUNZIONE
// Sommare i due numeri
// verificare se somma è pari o dispari

// Decretare vincitore
