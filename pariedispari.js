// Funzione per controllare se una parola è palindroma
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

//  Controllo se la parola inserita dall'utente è palindroma
const parola = prompt("Inserisci una parola per vedere se è palindroma:");
if (isPalindrome(parola)) {
    console.log(`La parola "${parola}" è palindroma.`);
} else {
    console.log(`La parola "${parola}" non è palindroma.`);
}

// Funzione per generare un numero random da 1 a 5 dal computer
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per verificare se il numero inserito è pari 
function isEven(number) {
    return number % 2 === 0;
}

//  Gioco Pari o Dispari
const sceltaUtente = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"), 10);

// Controllo le possibilità di input dall'utente
if ((sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') || isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    console.log("Input non valido.");
} else {
    const numeroComputer = getRandomNumber(1, 5);
    const somma = numeroUtente + numeroComputer;
    const risultatoPari = isEven(somma);

    console.log(`Hai scelto: ${sceltaUtente}`);
    console.log(`Il tuo numero: ${numeroUtente}`);
    console.log(`Numero del computer: ${numeroComputer}`);
    console.log(`Somma: ${somma} -> ${risultatoPari ? 'pari' : 'dispari'}`);

    if ((risultatoPari && sceltaUtente === 'pari') || (!risultatoPari && sceltaUtente === 'dispari')) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso!");
    }
}