// 1-define the three variables
// 2-compare (n2>n1>n3 or n3>n1>n2) display n1 
// 3-compare (n1>n2>n3 or n3>n2>n1) display n2 
// 3-compare (n2>n3>n1 or n1>n3>n2) display n3 
// 4- else statment theres 2 values at least equal
// 5-display the middle n



// var n1 = 12;
// var n2 = 11;
// var n3 = 9;
// if (n1 > n2 && n2 > n3 || n3 > n2 && n2 > n1) {
//     console.log(n2);
// } else if (n2 > n1 && n1 > n3 || n3 > n1 && n1 > n2) {
//     console.log(n1);
// } else if (n2 > n3 && n3 > n1 || n1 > n3 && n3 > n2) {
//     console.log(n3);
// } else {
//     console.log("two values at least are equal");
// }




// var z = prompt("Please enter any number")

// for (var i = 0; i <)
























// var arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];
// var i = 0;
// // var x;
// // var y;
// for (; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {

//     }
// }








// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//         x = arr[i]

//     } else {
//         x = arr[i + 1];

//     }
//     console.log(x)
//     if (arr[i] < arr[i + 1]) {
//         y = arr[i]

//     } else {
//         y = arr[i + 1];
//         y = arr[i + 1];
//     }
//     console.log(y)



// function max(array) {
//     var val = array[0];

//     for (var i = 1; i < array.length; i++) {
//         if (array[i] > val) val = array[i];
//     }

//     return val;
// }

// console.log(max([42, 34, 8, 13, -9, 101]));



// function max(array){
//     for (var i =0; i<arr)
// }


//     var array = [1, 3, 5, 7, 9, 2, 12, 6, 8];
// var valMax = array[0];
// var valMin = array[0];
// for (var i = 1; i < array.length; i++) {
//     if (array[i] > valMax) {
//         valMax = array[i];
//     }
//     if (array[i] < valMin) {
//         valMin = arr[i];
//     }
// }




// function volumeSquare(s) {
//     console.log(s ** 3);
// }
// volumeSquare(7);

// var s = 5;
// function volumeSquare1() {
//     var volume = s ** 3
//     return volume;
// }
// var volume = volumeSquare1();
// console.log(volume);

// var num = prompt("please inter an integer");
// var i = 0;
// while (sum != 0) {
//     var x[i] = sum % 10;
//     sum = parseInt(num / 10);
//     i++;







// }

// Algorithm:

//Write a program to make a simple calculator which should be able to do +,-,*,/ operations.
//  Use if statement functions for each operation and prompt to take values.
//Note: Stop calculating when the input is -1.

// var x1 = prompt("Please enter first number, we will do any basic calculation u want");
// var x2 = prompt("Please enter the second number,we will do basic calculation u want");


// while (x1 !== -1 || x2 !== -1) {



var x1 = Number(prompt("Please enter a number"));
var x2 = Number(prompt("Please enter a second number"))
var operator = (prompt("please enter 1 of the following operations *,+,-,/"))

var i = 0;
// while (x1 !== -1 || x2 !== -1 || i < 1) {
switch (operator) {
    case "+":
        console.log(sum(x1, x2))
        i++;
        break;
    case "*":
        console.log(multiple(x1, x2));
        i++;
        break;
    case "-":
        console.log(substract(x1, x2));
        i++;
        break;
    case "/":
        console.log(divide(x1, x2));
        i++;
}
// }
if (x1 == -1 || x2 == -1) {
    console.log("Please try again without using -1 value")
}


function sum(x1, x2) {
    console.log(x1 + x2);
    return x1 + x2;
}
function multiple(x1, x2) {
    return x1 * x2;
}
function divide(x1, x2) {
    return x1 / x2;
}
function substract(x1, x2) {
    return x1 - x2
}




// function sum(x, y) {
//     var z = x + y;
//     console.log(z)
// }
// function mul(x, y) {
//     var z = x * y;
//     console.log(z)
// }
// function div(x, y) {
//     var z = x / y;
//     console.log(x)
// }
// function sub(x, y) {
//     var z = x - y;
//     console.log(z)
// }
// //var i=0;
// var x = prompt("please enter x");
// var y = prompt("plase ener y");
// //while (x!=-1||y!=-1){
// if (x > y) {
//     sum(x, y);
// }
// else if (x < y) {
//     sub(x, y);
// }
// else if (x == y) {
//     mul(x, y);
// }
// else {
//     div(x, y);
// }
//     //i++;
//     //}
// 
// 
