//Prende lo user name dal form e lo fa comparire nel Dettaglio Passeggeri
var nomeUtente =document.getElementById('input_name').addEventListener('input', function() {
    document.getElementById("nome_passeggero").innerHTML = (this.value);
    console.log(this.value);
});

var distance = document.getElementById('input_distance').addEventListener('input', function() {
    var price = Math.round ((this.value * 0.21) * 100 + Number.EPSILON) / 100;
    console.log(this.value);

    document.getElementsByTagName('select')[0].onchange = function() {
        var index = this.selectedIndex;
        var inputText = this.children[index].innerHTML.trim();
    
        if (inputText === "Minorenne") {
            var minor_price = Math.round ((price - (price * 20 / 100)) * 100 + Number.EPSILON) / 100;
            document.getElementById("costo_biglietto").innerHTML = (minor_price + " €");
        } else if (inputText === "Over 65") {
            var senior_price = Math.round ((price - ((price * 40) / 100)) * 100 + Number.EPSILON) / 100;
        document.getElementById("costo_biglietto").innerHTML = (senior_price + " €");
        } else {
            document.getElementById("costo_biglietto").innerHTML = (price + " €");
        }
    
        console.log(inputText);
    }
    
})

/* You can check the selectedIndex property. 
If you want something to happend each time the item changes, use the onchange event binding.
 */



/* //chiedere all'utente il numero di chilometri che vuole percorrere 

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
} */