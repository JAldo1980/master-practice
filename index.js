// Example 1: Doubling each element in an array

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Triple each element in an array

const scores = [1, 2, 3, 4, 5];

const tripleScores = scores.map((num) => num * 3);

console.log("triple scores:", tripleScores);

// Example 3: divide each element by 5

const letters = [23, 45, 77, 178, 325];

const dividedLetters = letters.map((num) => num / 3);

console.log("letters divided", dividedLetters);

// Example 4: minus each element by 8

const seats = [34, 55, 89, 99, 265, 476];

const newSeats = seats.map((num) => num - 8);

console.log("numbers minus 8:", newSeats);

// NEW EXAMPLES

// SIMPLE THAI BHAT CONVERTER

const britshPounds = [10, 20, 50, 100, 200, 500, 1000, 3000, 7000, 10000];

const convertThaiBhat = britshPounds.map((num) => num / 40);

console.log("Pounds converted to Thai Bhat:", convertThaiBhat);
