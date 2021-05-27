// Lecture 1 Values and Variables
"use strict";
/*
let country = "Palestine";
let continent = "Asia";
let population = 7;

console.log(country);
console.log(continent);
console.log(population);

// Lecture 2 Data Types

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Lecture 3
language = "Arabic";
console.log(language);
//country = "Germany";//Constant value can't be changed
console.log(country);

// Lecture 4 Basic Operators
afterSplittingPopulation = population / 2;
console.log(afterSplittingPopulation);
afterSplittingPopulation = (population + 1) / 2;
console.log(afterSplittingPopulation);
let finlandPop = 6;
console.log(population > finlandPop);
const avgCountryPop = 33;
console.log(population > avgCountryPop);
let description = country + " is in " + continent +
    " and there is " + population + " million people there speaking " + language;
console.log(description);

// Codding challenge 1
/*
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
console.log(markMass, markHeight, johnMass, johnHeight);
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

markMass = 95;
markHeight = 1.88
johnMass = 85
johnHeight = 1.76
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);*/

// Lecture 5 Strings and Templates Literals
/*
description = `${country} is in ${continent} and there is ${population} million people there speaking ${language}`;
console.log(description);

// Lecture 6 Taking Decision if/Else Statements

if (population >= 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} below average`);
}
/*
// Coding Challenge 2
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}
*/ /*
// Lecture 7 Type conversion and Coercion
'9' - '5'; //4
'19' - '13' + '17'; //617
'19' - '13' + 17; //23
'123' < 57; // False
5 + 6 + '4' + 9 - 4 - 2; // 1143
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Lecture 8 Equality operators == vs ===
/*
let numNeighbors = Number(prompt("How many neighbors countries does ur country have ?"));
if (numNeighbors === 1) {
    console.log("only 1 border");
} else if (numNeighbors > 1) {
    console.log("more than 1 border")
} else {
    console.log("No borders")
}
*/ /*
// Lecture 9 Logical Operators AND, OR ,!
country = "Canada"
language = "english";
population = 20;
isIsland = false;
if (language == "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`You should not live in ${country}`);

}

// Coding challenge 3

/*
let averageScoreDolphine = (96 + 108 + 89) / 3;
let averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(averageScoreDolphine, averageScoreKoalas);
if (averageScoreDolphine > averageScoreKoalas && averageScoreDolphine >= 100) {
    console.log("Dolphine Team wins");
} else if (averageScoreDolphine < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log("Koalas Team wins");
} else if (averageScoreKoalas == averageScoreDolphine && averageScoreDolphine >= 100 && averageScoreKoalas >= 100) {
    console.log(" It's a Tie");
} else {
    console.log("No Teams wins the trophy");
}
*/ /*
// Lecture 10 Switch Statment
language = "arabic";
switch (language) {
    case "chinese":
    case "manderine":
        console.log("Most Number of Native speakers");
        break;
    case "spanish":
        console.log("Second most spoken Language");
        break;
    case "english":
        console.log("3rd Most spoken language");
        break;
    case "hindi":
        console.log("4th place");
        break;
    case "arabic":
        console.log("5th place");
        break;
    default:
        console.log("Great language too");
}
// Lecture 11 tenary operator

population = 20;
console.log(`${country}'s population is ${population > 33 ? "above average" : "below average"}`);


// coding challenge 4

let bill = 430;
let tip = bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;
console.log(`the tip value is ${tip}`);
let totalValue = bill + tip;
console.log(totalValue);
console.log(`The bill was ${bill}, the tip was ${tip}, the total value is ${totalValue}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
typ