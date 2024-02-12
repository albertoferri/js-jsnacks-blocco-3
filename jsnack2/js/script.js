// Snack 2:
// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro

// definisco le variabili
const array1 = ['rosso', 'verde', 'blu'];
const array2 = [1, 2, 3];
// aggiungo variabile per mix
const mixed = mixedArrays(array1, array2);

// stampo in console i due array
console.log(array1); 
console.log(array2);

// funzione per unire i due array
function mixedArrays(array1, array2) {
    const fusedArray = [];

    for (let i = 0; i < array1.length; i++) {
        fusedArray.push(array1[i]);
        fusedArray.push(array2[i]);
    }

    return fusedArray;
}

// stampo in pagina l'array fuso
document.querySelector("#fused-array").innerHTML = "il tuo array mixato è: " + mixed;
console.log(mixed); 