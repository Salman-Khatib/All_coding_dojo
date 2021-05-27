"use strict";
//JavaScript Fundementals Part 2


// Lecture 1 Functions
let country = "Palestine";
let population = "1100";
let language = "Arabic";



function describeCountries(country, population, capitalCity) {
    const des = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
    return des;
}
const countryEngland = describeCountries("England", 20, "London");
const countryPalestine = describeCountries("Palestine", 7, "Jerusalem");
const countryEgypt = describeCountries("Egypt", 100, "cairo");
console.log(countryEngland, countryPalestine, countryEgypt);

// Lecture 2 Function declaraction and Function expression

let worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

let percentPalestine = percentageOfWorld1(7);
let percentChina = percentageOfWorld1(1400);
let percentIndia = percentageOfWorld1(599);


console.log(percentPalestine, percentChina, percentIndia);

let percentageWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}
let percentPalestine1 = percentageWorld2(7);
let percentChina1 = percentageWorld2(1400);
let percentIndia1 = percentageWorld2(599);

console.log(percentPalestine1, percentChina1, percentIndia1);

//Lecture 3 Arrow function

const percentageOfWorld3 = population => (population / worldPopulation) * 100;

const percentage1 = percentageOfWorld3(7);
const percentage2 = percentageOfWorld3(1400);
const percentage3 = percentageOfWorld3(599);

console.log(percentage1, percentage2, percentage3);

// Lecture 4 Calling function from another function

function describePopulation(country, population) {
    const thisValue = percentageOfWorld1(population);

    return `${country} has ${population} million people which is about ${thisValue}% of the world`;
}
console.log(describePopulation('Palestine', 7));
console.log(describePopulation('Chine', 1400));
console.log(describePopulation('India', 700));

// Coding Challenge 3

// const calcAverage = (match1, match2, match3) => (match1 + match2 + match3) / 3;
// const avgDolphine = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphine, avgKoalas);

// function checkWinner(avgDolphine, avgKoalas) {
//     if (avgDolphine >= avgKoalas * 2) {
//         return `Dolphine win (${avgDolphine} vs ${avgKoalas})`;
//     } else if (avgKoalas >= avgDolphine * 2) {
//         return `Koalas win (${avgKoalas} vs ${avgDolphine})`;
//     } else {
//         return ` No one wins`
//     }
// }
// const winner = checkWinner(avgDolphine, avgKoalas);
// console.log(winner);

// Lecture 5 Introduction to Arrays

var populations = [40, 20, 1100, 600];
console.log(populations.length === 4);

var percentages = [percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])];
console.log(percentages);

// Lecture 6 Basic Array Operations (Methods)

var neighbors = ["Jordan", "Syria", "Lebanon", "Egypt"];
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Germany")) {
    console.log("Probably not a central European country :D");
}
console.log(neighbors.indexOf("Egypt"));
neighbors[neighbors.indexOf("Egypt")] = "Egyption Nation";
console.log(neighbors);

//Coding Challenge 2

// var calcTip = function (value) {
//     return value <= 300 && value >= 50 ? 0.15 * value : 0.2 * value;

// }
// var tip = calcTip(100);
// console.log(tip);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total);

// Lecture 7 Introduction to Objects

var myCountry = {
    country: "Palestine",
    capital: "Jerusalem",
    language: "Arabic",
    population: 7,
    neighbors: ["Egypt", "Jordan", "Syria", "Lebanon"]
};
console.log(myCountry);


// Lecture 8 Dot vs Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people,
 ${myCountry.neighbors.length} neighboring countries and capital called ${myCountry.capital}`);


myCountry.population += 2;

console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

// Lecture 9 Object Methods

myCountry = {
    country: "Palestine",
    capital: "Jerusalem",
    language: "Arabic",
    population: 7,
    neighbors: ["Egypt", "Jordan", "Syria", "Lebanon"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language} speaking people,
${this.neighbors.length} neighboring countries and capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.island = this.neighbors.length == 0 ? true : false;
    }
}
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);



// Coding Challenge 3 

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// var x = (mark.bmi > john.bmi) ? `Mark BMI (${mark.bmi}) is Higher than John BMI (${john.bmi})!` :
//     `John BMI (${john.bmi}) is higher than mark BMI (${mark.bmi})!`;
// console.log(x);

// // Lecture 10 Iteration : the for loop

// for (var i = 1; i <= 50; i++) {
//     console.log(`Voter Number (${i}) is currnetly voting`);
// }

// Lecture 11 Looping arrays Breaking and Continuing
function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

populations = [40, 20, 1100, 600];
var percentages2 = [];
for (var i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// Lecture 12 Looping Backwards and loops in loops 



const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];
for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// The While loop

var percentages2 = [];
var i = 0;
while (i < populations.length) {
    percentages2[i] = percentageOfWorld1(populations[i]);
    i++;
}
console.log(percentages2);

// Coding Challenge 4 

const bills = [22, 295, 176, 440, 37, 185, 10, 1100, 86, 52];
var tips = [];
const totals = [];

function calcTip(bills) {
    return (bills <= 300 && bills >= 50) ? bills * 0.15 : bills * 0.2;

}
for (var i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);

}
console.log(tips, totals);
var sum = 0;
function calcAverage(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length);
}

console.log(calcAverage(totals));


