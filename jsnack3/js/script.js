// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).

// determino le variabili
const arrayNumeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Scrivi una funzione che accetti tre argomenti:
const risultato = tagliaArray(arrayNumeri, 2, 7);

function tagliaArray(arrayNumeri, Min, Max) {  
    // slice permette di trascrivere in un altro array dei valori contenenti nel primo array, senza modificarlo
    // utilizzo max + 1 per trascrivere fino al numero max compreso
    const nuovoArray = arrayNumeri.slice(Min, Max + 1);

    return nuovoArray;
}

console.log(risultato)