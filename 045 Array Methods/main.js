const myArray = [1, 2, 3, 4];

myArray.at(2); // 3

myArray.push(5); // [1, 2, 3, 4, 5]

myArray.pop(); // [1, 2, 3]

myArray.fill(1); // [1, 1, 1, 1]

myArray.join(" "); // "1 2 3 4" → string

myArray.shift(); // [2, 3, 4]

myArray.unshift(0); // [0, 1, 2, 3, 4];

myArray.reverse(); // [4, 3, 2, 1]

myArray.includes(4); // true

myArray.map((item) => 2 * item); // [2, 4, 6, 8]

myArray.filter((item) => item > 2); // [3, 4]

myArray.find((item) => item > 2); // 3

myArray.every((item) => item < 5); // true

const a = myArray.findIndex((item) => item === 3); // 2
