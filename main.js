let numbers = [12, 45, 7, 89, 23];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Eng katta son:", max);
