// Calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.276 € al km)
// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]




const distance = prompt("Your distance");
const age = parseInt(prompt("Your age"));
const pricePerKm = 0.276;
const underAgeDiscount = 0.21
const overAgeDiscount = 0.42

const ticketPrice = (distance * pricePerKm);

if(age < 18) {
    discountedFromTotal = ticketPrice * underAgeDiscount
    underAgePrice = ticketPrice - discountedFromTotal
    document.getElementById("my_Ticket").innerHTML = underAgePrice.toFixed(2);
    
} 

else if(age >= 65) {
    discountedFromTotal = ticketPrice * overAgeDiscount
    overAgePrice = ticketPrice - discountedFromTotal
    document.getElementById("my_Ticket").innerHTML = overAgePrice.toFixed(2);
} 

else {
    document.getElementById("my_Ticket").innerHTML = ticketPrice.toFixed(2);
}

//prova


