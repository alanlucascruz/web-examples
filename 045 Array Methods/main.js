[1, 2, 3, 4].at(2); // 3

[1, 2, 3, 4].push(5); // [1, 2, 3, 4, 5]

[1, 2, 3, 4].pop(); // [1, 2, 3]

[1, 2, 3, 4].fill(1); // [1, 1, 1, 1]

[1, 2, 3, 4].join(" "); // "1 2 3 4" → string

[1, 2, 3, 4].shift(); // [2, 3, 4]

[1, 2, 3, 4].unshift(0); // [0, 1, 2, 3, 4];

[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]

[1, 2, 3, 4].includes(4); // true

[1, 2, 3, 4].map((item) => 2 * item); // [2, 4, 6, 8]

[1, 2, 3, 4].filter((item) => item > 2); // [3, 4]

[1, 2, 3, 4].find((item) => item > 2); // 3

[1, 2, 3, 4].every((item) => item < 5); // true

[1, 2, 3, 4].findIndex((item) => item === 3); // 2