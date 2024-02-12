// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata

// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata
function reverseString() {
    // memorizzo input utente
    const inputString = document.getElementById('userInput').value;

    // Inverto la stringa
    // .split serve per dividere i caratteri (forma un altro array)
    // .reverse serve per invertire l'ordine dei caratteri
    // .join serve unire gli elementi in un array (il contrario di .split)
    const reversedString = inputString.split('').reverse().join('');

    // stampo la stringa invertita
    document.getElementById('output').innerHTML = "STRINGA FLIPPATA: " + reversedString;
}