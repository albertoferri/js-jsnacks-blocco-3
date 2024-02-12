// Snack 5 (bonus):
// Scrivi una funzione che accetti una stringa come parametro e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo

function converti() {
    const inputElement = document.getElementById("inputStringa");
    // prendo il valore della stringa inserita
    const inputStringa = inputElement.value;
    const risultatoElement = document.getElementById("risultato");
    
    console.log(inputStringa)

    // stampo in pagina la frase con le iniziali maiuscole
    // risultatoElement.innerHTML = "Risultato: " + inizialiMaiuscole(inputStringa);
}