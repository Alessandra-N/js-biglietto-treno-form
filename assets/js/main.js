//Prende lo user name dal form e lo fa comparire nel Dettaglio Passeggeri
var nomeUtente =document.getElementById('input_name').addEventListener('input', function() {
    document.getElementById("nome_passeggero").innerHTML = (this.value);
});

//Calcola la distanza e la moltiplica per il prezzo 
var distance = document.getElementById('input_distance').addEventListener('input', function() {
    var price = Math.round ((this.value * 0.21) * 100 + Number.EPSILON) / 100;

    //Prende nota dell'input del menu a tendina
    document.getElementsByTagName('select')[0].onchange = function() {
        var index = this.selectedIndex;
        var inputText = this.children[index].innerHTML;
    
        //A seconda dell'età selezionata, da un diverso costo
        if (inputText === "Seleziona fascia d'età") {
            document.getElementById("offerta").innerHTML = "Dichiara la tua fascia d'età"
        }
        else if (inputText === "Minorenne") {
            var minor_price = Math.round ((price - (price * 20 / 100)) * 100 + Number.EPSILON) / 100;
            document.getElementById("costo_biglietto").innerHTML = (minor_price + " €");
            document.getElementById("offerta").innerHTML = "Sconto Minorenne"

        } else if (inputText === "Over 65") {
            var senior_price = Math.round ((price - ((price * 40) / 100)) * 100 + Number.EPSILON) / 100;
            document.getElementById("costo_biglietto").innerHTML = (senior_price + " €");
            document.getElementById("offerta").innerHTML = "Sconto Over 65"

        } else {
            document.getElementById("costo_biglietto").innerHTML = (price + " €");
            document.getElementById("offerta").innerHTML = "Nessuno sconto"
        }
    
    }
    
})

//Animazione bottoni con il click
var buttonGenera = document.getElementById("genera")
    buttonGenera.addEventListener("click", function(){
    this.classList.add("bd_purple");
    //Genera il codice del treno da 90mila a 100mila
    var codiceTreno = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;
    document.getElementById("codice_treno").innerHTML = codiceTreno
    //Genera il numero del vagone da 1 a 12
    var numeroCarrozza = Math.floor(Math.random() * 12) + 1;
    document.getElementById("numero_carrozza").innerHTML = numeroCarrozza
});

//Refresh della pagina quando si clicca su annulla
var buttonAnnulla = document.getElementById("annulla")
    buttonAnnulla.addEventListener("click", function(){
    window.location.reload();
});