/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer 
 (usando una funzione). Sommiamo i due numeri Stabiliamo 
 se la somma dei due numeri è pari o dispari (usando una funzione) 
 Dichiariamo chi ha vinto.
 */

// Scelta pari o dispari
const EVEN = "even";
const ODD = "odd";
const PARI = "pari";
const DISPARI = "dispari";

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

function getCpuSide(userSide) {
  if (userSide === "even") {
    return "odd";
  }
  return "even";
}

// Inserire un numero da 1 a 5 inclusi

function getUserNumber() {
  const userNumber = parseInt(prompt("Scegliere un numero da 1 a 5"));
  return parseInt(userNumber);
}

// generare un numero random da 1 a 5 inlcusi
function getCpuNumber() {
  return Math.floor(Math.random() * 5 + 1);
}

// FUNZIONE
// Sommare i due numeri
// verificare se somma è pari o dispari

function isSumEvenOrOdd(num1, num2) {
  if ((num1 + num2) % 2 === 0) {
    return "even";
  }
  return "odd";
}

// Decretare vincitore

function getWinner(userSide, sumStatus) {
  if (userSide === sumStatus) {
    return "Il giocatore 1 ha vinto!";
  }
  return "Le macchine vincono di nuovo";
}

const userSide = getUserSide();
console.log(userSide);
const userNumber = getUserNumber();
console.log(userNumber);
// const cpuSide = getCpuSide(userSide);
const cpuNumber = getCpuNumber();
console.log(cpuNumber);
const sumStatus = isSumEvenOrOdd(userNumber, cpuNumber);
console.log(sumStatus);

const winner = getWinner(userSide, sumStatus);
console.log(winner);
