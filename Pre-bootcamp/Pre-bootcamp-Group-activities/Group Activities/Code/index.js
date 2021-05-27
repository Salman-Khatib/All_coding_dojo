/*
var temp = prompt("Please enter the temp");
if (temp > 30) {
    console.log("hot");
} else if (temp < 30 && temp > 20) {
    console.log("moderate");
} else if (temp < 20) {
    console.log("Cold")
} else {
    console.log("value is either 30 or 20")
}
*/
var sum = 0;
var materialMarks = [100, 88, 92, 88, 10, 30, 0]

materialMarks.forEach(item => {
    sum += item;

    var averageMarks = sum / materialMarks.length;
    console.log(averageMarks);

    if (averageMarks >= 90) {
        console.log("your Mark is A");
    } else if (averageMarks >= 80) {
        console.log("your Mark is B");
    } else if (averageMarks >= 70) {
        console.log("your Mark is C");
    } else if (averageMarks >= 60) {
        console.log("your Mark is D");
    } else if (averageMarks >= 50) {
        console.log("your Mark is E");
    } else {
        console.log("You have failed your Grade 😘");
    }

    switch (true) {
        case averageMarks >= 90 && averageMarks <= 100:
            console.log("your Mark is A");
            break;
        case averageMarks >= 80 && averageMarks < 90:
            console.log("your Mark is B");
            break;
        case averageMarks >= 70 && averageMarks < 80:
            console.log("your Mark is C");
            break;
        case averageMarks >= 60 && averageMarks < 70:
            console.log("your Mark is D");
            break;
        case averageMarks >= 50 && averageMarks < 60:
            console.log("your Mark is E");
            break;
        default:
            console.log("You are a Failer");
    }