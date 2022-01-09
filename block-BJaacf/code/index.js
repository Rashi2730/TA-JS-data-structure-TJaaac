// 1. Create an array named numbers and store 5 number values in it
let numbers = [7,2,6,10,5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0; 
for(let number of numbers) {
    sum= sum + number;
}
console.log(`The sum of array items is ${sum}`)
// 3. Calculate the average of array items and print it to the console using console.log()
let average = sum / numbers.length;
console.log(`The average of array items is ${average}`);
// 4. Find the highest number in the array and print it to the console using console.log()
for(let number of numbers) {

}
// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [], odd = [];
for(let number of numbers) {
    if(number % 2 === 0) {
        even.push(number);
    }
}
console.log(`The even items in the array are : ${odd}`);

// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let number of numbers) {
    if(number % 2 !== 0) {
        odd.push(number);
    }
}
console.log(`The odd items in the array are : ${odd}`);


// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let arrayBy5 = [];
for(let number of numbers) {
    if(number % 5 === 0) {
        arrayBy5.push(number);
    }
}
console.log(`The array items divisible by 5 are : ${arrayBy5}`);

// 9. Log all the element of the array one by one
console.log(`All the elemetns of array are :`)
for(let number of numbers) {
    console.log(number);
}

// 10. Find all the number in the array that is divisible by 3
let arrayBy3 = [];
for(let number of numbers) {
    if(number % 3 === 0) {
        arrayBy3.push(number);
    }
}
console.log(`The array items divisible by 3 are : ${arrayBy3}`);
