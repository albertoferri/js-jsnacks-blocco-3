// Snack 4 (bonus):
// Scrivi una funzione che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente


// Scrivi una funzione che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
function ordinaStringa(){
    const inputElement = document.getElementById("userInput");
    // devo prendere il valore della stringa inserita
    const inputStringa = inputElement.value;
    const risultatoElement = document.getElementById("risultato");

    // ordino in ordine alfabetico la parola inserita tramite il metodo .sort
    // .sort serve per ordinare gli elementi di una lista
    // (rivedere snack 1 per la formula)
    const stringaOrdinata = inputStringa.split('').sort().join('');
    // stampo in pagina
    risultatoElement.innerHTML = "Stringa ordinata: " + stringaOrdinata;
}