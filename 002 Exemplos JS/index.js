var text = "Olá Mundo!";
text = text.toUpperCase();
console.log(text);
// Saída > OLÁ MUNDO!

var text = "Olá Mundo!";
text = text.toLowerCase();
console.log(text);
// Saída > olá mundo!

var text = "Olá Mundo!";
text = text.replace("Mundo", "Pessoal");
console.log(text);
// Saída > Olá Pessoal!

var text = "Olá Mundo!";
var length = text.length;
console.log(length);
// Saída > 10

var text = "Olá Mundo!";
var indexOf = text.indexOf("Mundo");
console.log(indexOf);
// Saída > 4

var text = "Olá Mundo!";
text = text.slice(0, 3);
console.log(text);
// Saída > Olá

var text = "aVANce nO dEsENvolVImentO de AplICAtIvOS!";
var firtLetter = text[0].toUpperCase();
var lowerSlice = text.toLowerCase().slice(1);
text = `${firtLetter}${lowerSlice}`;
console.log(text);
// Saída > Avance no desenvolvimento de aplicativos!
