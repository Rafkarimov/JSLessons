// console.log('Push ups repetition 1');
// console.log('Push ups repetition 2');
// console.log('Push ups repetition 3');
// console.log('Push ups repetition 4');
// console.log('Push ups repetition 5');
// console.log('Push ups repetition 6');
// console.log('Push ups repetition 7');
// console.log('Push ups repetition 8');
// console.log('Push ups repetition 9');
// console.log('Push ups repetition 10');

// for(let rep = 1; rep <= 10; rep += 2) {
//    console.log(`Push ups repetition ${rep}`);
//    console.log('Hello!')
// }

// console.log('Out of loop');

// const user123 = ['Ra', 'Akimov', 1984, 'tester', ['Katy', 'Mich'], false];

// const types = [];

// for(let i = 0; i < user123.length; i++) {
//    console.log(user123[i], typeof user123[i]);

//    // types[i] = typeof user123[i];
//    // types.push(typeof user123[i]);
//    types.unshift(typeof user123[i]);
// }

// console.log(types);

// const birthYears = [1984, 1995, 2001, 2004];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//    ages.push(2023 - birthYears[i]);
// }

// console.log(ages);




// console.log('FOR LOOP');
// for(let rep = 1; rep <= 10; rep++) {
//    console.log(`Push ups repetition ${rep}`);
// }


// console.log('WHILE LOOP');
// let rep = 1;

// while (rep <= 10) {
//    console.log(`Push ups repetition ${rep}`);
//    rep++;
// }


let diceNumber = Math.trunc(Math.random() * 6) + 1;
console.log(`Dice number before loop: ${diceNumber}`);

while (diceNumber !== 6) {
   console.log(diceNumber);
   diceNumber = Math.trunc(Math.random() * 6) + 1;
   console.log(`Dice number after random creation inside the loop: ${diceNumber}`);
}
