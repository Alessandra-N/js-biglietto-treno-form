//chiedere all'utente il numero di chilometri che vuole percorrere 

var distance = parseInt (prompt ("Quanti chilometri intendi percorrere?"));


//chiedere all'utente quanti anni ha
var age = parseInt (prompt ("Quanti anni hai?"));

if (isNaN(distance) || isNaN(age)) {
    document.getElementById("inv_in").innerHTML = ("I dati da te inseriti non sono validi!");
} else {

//calcolare il prezzo del biglietto (0.21 € al km)
var price = Math.round ((distance * 0.21) * 100 + Number.EPSILON) / 100;

//determinare il prezzo se l'utente è minorenne o over 65
if (age < 18) {
    var minor_price = Math.round ((price - (price * 20 / 100)) * 100 + Number.EPSILON) / 100;
    document.getElementById("costo_mi").innerHTML = ("Siccome hai meno di 18 anni, il tuo biglietto costa solo ") + minor_price + (" €");

} else if (age > 65) {
    var senior_price = Math.round ((price - ((price * 40) / 100)) * 100 + Number.EPSILON) / 100;
    document.getElementById("costo_se").innerHTML = ("Siccome hai più di 65 anni, il tuo biglietto costa solo ") + senior_price + (" €");
}

//determina il risultato visivo dell'input dell'utente
document.getElementById("percorso").innerHTML = ("Intendi percorrere ") + distance + (" km");
document.getElementById("eta").innerHTML = ("Hai ") + age + (" anni");
document.getElementById("costo").innerHTML = ("Il tuo biglietto costa ") + price + (" €");
}