/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer 
 (usando una funzione). Sommiamo i due numeri Stabiliamo 
 se la somma dei due numeri è pari o dispari (usando una funzione) 
 Dichiariamo chi ha vinto.
 */

// Scelta pari o dispari

function getUserSide() {
  const userChoice = prompt('Scrivi "pari" o "dispari" per scegliere');
  const userChoiceUpper = userChoice.toUpperCase();
  // IF utente sceglie pari
  //  => giocherà per i pari
  if (userChoiceUpper === "PARI") {
    return "even";
    // ELSE utente sceglie dispari
    //  => giocherà per i dispari
  } else if (userChoiceUpper === "DISPARI") {
    return "odd";
  } else {
    return null;
  }
}

// Inserire un numero da 1 a 5 inclusi

function getUserNumber() {
  const userNumber = parseInt(prompt("Scegliere un numero da 1 a 5"));
  return parseInt(userNumber);
}

// FUNZIONE
// generare un numero random da 1 a 5 inlcusi
let cpuTurn;
function cpuRandomNumber() {
  cpuTurn = Math.floor(Math.random() * 5 + 1);
  return cpuTurn;
}
const cpuNumber = cpuRandomNumber();
console.log(cpuNumber);

// FUNZIONE
// Sommare i due numeri
// verificare se somma è pari o dispari

let result;
function isSumEven(num1, num2) {
  if ((num1 + num2) % 2 === 0) {
    result = "even";
    return result;
  } else {
    result = "odd";
    return result;
  }
}

const evenOrOdd = isSumEven(userNumber, cpuNumber);
console.log(result);

// Decretare vincitore
