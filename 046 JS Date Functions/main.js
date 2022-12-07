const date = new Date(); // retorna data e hora atuais
// const date = new Date(2020, 6, 20); // permite informar data específica
// const date = new Date(2020, 6, 20, 17, 55, 28); // permite informar data e hora específicas
// const date = new Date("2018-08-16"); // permite informar data específica usando uma String
// const date = new Date("2018-08-16T18:52"); // permite informar data e hora específicas usando uma String

console.log(date); // sem formatação
console.log(date.toLocaleDateString()); // mostra a data formatada
console.log(date.toLocaleTimeString()); // mostra a hora formatada
console.log(date.toLocaleString()); // mostra data e hora formatadas
console.log(date.getDate()); // pega o dia do mês
console.log(date.getMonth()); // pega o mês
console.log(date.getFullYear()); // pega o ano
console.log(date.getDay()); // pega o dia da semana, onde 0 é domingo
console.log(date.getHours()); // pega as horas
console.log(date.getMinutes()); // pega os minutos
console.log(date.getSeconds()); // pega os segundos
console.log(date.getMilliseconds()); // pega os milisegundos
