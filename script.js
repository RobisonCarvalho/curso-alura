var nome = "Robison Carvalho "
var real = 100.00
var cambioDolar = 4.86;
var cambioEuro = 5.27;
var cambioBath = 0.14;
var cambioLibra = 6.05;
var valorEmRealDolar = real / cambioDolar;
var valorEmRealEuro = real / cambioEuro;
var valorEmRealBath = real / cambioBath;
var valorEmRealLibra = real / cambioLibra;
  alert("Olá Sr. " + nome +
  "\n$" + valorEmRealDolar.toFixed(2) +
  "\n€ " + valorEmRealEuro.toFixed(2) +
  "\n฿ " + valorEmRealBath.toFixed(2) +
  "\n£ " + valorEmRealLibra.toFixed(2));