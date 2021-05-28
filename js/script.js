var numKm = prompt ("Quanti chilometri devi percorrere?");
document.getElementById("numKm").innerHTML = numKm
numKm=parseInt(numKm);

var ageUser = prompt ("Quanti anni hai ?");
document.getElementById("ageUser").innerHTML = ageUser
ageUser=parseInt(ageUser);

var price =(0,21 * parseInt(numKm)) ;
price=parseInt(price);
document.getElementById("price").innerHTML = price

/*
var discount;

if (ageUser < 18){
      discount === price / 100 * 20

} else if (ageUser > 65) {
      discount === price / 100 * 40
} else {
      discount = 0
}

var 

*/


