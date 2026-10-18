console.log("=== Part 2 ===");

/* task 6 */
console.log("\n--- Task 6. Variables and data types ---");

const fullName = "Aruzhan Madeniyet";
let age = 19;
const isStudent = true;
let favoriteColor = "Pink";

console.log("Full Name:", fullName, "| Type:", typeof fullName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);
console.log("Favorite Color:", favoriteColor, "| Type:", typeof favoriteColor);

age = 20;
console.log("Updated Age (let reassign):", age, "| Type:", typeof age);

/* task 7 */
console.log("\n--- Task 7. Input and a greeting ---");

let studentName = "Aruzhan";
let groupName = "MT-2505";
let customGreeting = `Student Name: ${studentName}, Group: ${groupName}`;
console.log(customGreeting);

/* task 8 */
console.log("\n--- Task 8. Sum and arithmetic ---");

let num1Str = "12";
let num2Str = "5";
console.log(`String concatenation ("12" + "5"):`, num1Str + num2Str);
let n1 = Number(num1Str);
let n2 = Number(num2Str);

console.log("Calculations with numbers (12 and 5):");
console.log("Sum (+):", n1 + n2);
console.log("Difference (-):", n1 - n2);
console.log("Product (*):", n1 * n2);
console.log("Quotient (/):", n1 / n2);
console.log("Remainder (%):", n1 % n2);

/* task 9 */
console.log("\n--- Task 9. Strings ---");

let myFullName = "Aruzhan Madeniyet";
console.log("Original String:", myFullName);
console.log("Length (.length property):", myFullName.length);
console.log("Uppercase (.toUpperCase()):", myFullName.toUpperCase());
console.log("Lowercase (.toLowerCase()):", myFullName.toLowerCase());
console.log("First 3 characters (.slice(0, 3)):", myFullName.slice(0, 3));

let part1 = "I study Media Technologies";
let part2 = "at Astana IT University.";
let fullSentence = part1 + " " + part2;
console.log("Combined sentence:", fullSentence);

/* task 10 */
console.log("\n--- Task 10. Increment and assignment operators ---");

let counter = 10;
console.log("Initial counter:", counter);

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

counter += 5;
console.log("After += 5:", counter);

counter -= 3;
console.log("After -= 3:", counter);

counter *= 2;
console.log("After *= 2:", counter);

counter /= 4;
console.log("After /= 4:", counter);

/* task 11 */
console.log("\n--- Task 11. A calculation from the lecture ---");

function calculateHumanAge(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    console.log(`Dog age: ${dogAge} years old is approximately ${humanAge} human years old.`);
}

calculateHumanAge(2);
calculateHumanAge(5);

/* task 12 */
console.log("\n--- Task 12. Functions ---");

function greetUser(name) {
    return `Hello, ${name}! Have a great day.`;
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

console.log(greetUser("Aruzhan"));
console.log(greetUser("Sofiya"));

console.log("Sum (5 + 10) =", calculateSum(5, 10));
console.log("Sum (20 + 30) =", calculateSum(20, 30));

console.log("Rectangle Area (4 x 5) =", calculateRectangleArea(4, 5));
console.log("Rectangle Area (7 x 3) =", calculateRectangleArea(7, 3));