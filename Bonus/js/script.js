var numKm = prompt ("Quanti chilometri devi percorrere?");
document.getElementById("numKm").innerHTML = numKm;
numKm=parseInt(numKm);

var ageUser = prompt ("Quanti anni hai ?");
document.getElementById("ageUser").innerHTML = ageUser;
ageUser=parseInt(ageUser);

var price = 0.21;

var priceT = price * numKm ;
document.getElementById("priceT").innerHTML = priceT;

var priceDis;
var discount;

if (ageUser < 18){
      var discount = " previsto sconto 20%";
}else {
      if (ageUser > 65){
            var discount = " previsto sconto 60%" ;
}else {
      var discount = " previsto prezzo intero"
}
}

document.getElementById("discount").innerHTML += discount;

//calcolare sconto nell espressione e assegnare una sola var per entrambi gli sconti

if (ageUser < 18){
     var priceDis = priceT * 0.80; //sconto 20
  //qui fatto errore di introduzione di un primo if 
} else{
      if (ageUser > 65) {
     var priceDis = priceT * 0.60; //sconto 40
} else {
      var priceDis = priceT;
}
}


//arrotondamento NUOVA var con fixed

var priceDisAr = Math.round(priceDis * 100) / 100;

document.getElementById("priceDisAr").innerHTML = priceDisAr + "€";


