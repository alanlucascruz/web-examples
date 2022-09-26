// const letters = ["A", "B", "A", "C", "B"];
// const uniques = [...new Set(letters)];

// console.log(uniques);

// const letters = ["A", "B", "A", "C", "B"];
// const uniques = letters.filter((item, index) => {
//   return letters.indexOf(item) === index;
// });

// console.log(uniques);

const letters = ["A", "B", "A", "C", "B"];
const uniques = [];

letters.forEach((letter) => {
  !uniques.includes(letter) ? uniques.push(letter) : [];
});

console.log(uniques);
