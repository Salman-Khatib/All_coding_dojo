//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array,
// changed to [-1, "big", "big", -5].

var arr = [-1,3,4,-5];

function changePostive(){

    for ( var i = 0 ; i < arr.length ; i++){
        if (arr[i] >0 ) {
            arr[i] = "big";
        }
    }
    return arr;

}

console.log(changePostive());

//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array,
// and return the highest value in the array.

var arr =[-5,1,5,10];

function printLowReturnHigh(){
    var max = arr[0];
    var min = arr[0];

    for (var i = 1; i < arr.length ; i ++){
        if (max < arr[i]){
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

console.log(printLowReturnHigh());

//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, 
//and return the first odd value in the array.

var arr = [2,3,10,5,2,-2,1]

function printOneReturnAnother(){
    console.log(arr[arr.length-2]);
    for (var i = 0 ; i < arr.length ; i++){
        if (i%2 != 0){
            return arr[i];
        }
    }
    

}
console.log(printOneReturnAnother());

// 4-Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.
//  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

var arr =[1,2,3];

function doubleVision(){
    var newArr = [];
    for (var i = 0 ; i < arr.length ; i++){
        newArr[i] = arr[i] * 2
    }
    return newArr;
}
console.log(doubleVision());

// 5- Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.
//  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

var arr = [-1,1,1,1];

function countPostives(){
    var counter = 0;
    for (var i = 0 ; i < arr.length ; i ++){
        if (arr[i] > 0) {
            counter++;
        }
    }
    arr[arr.length-1] = counter; 
    return arr;
}
console.log(countPostives());

// 6- Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row,
// print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

var arr = [2,3,3,3,4,4,4,5,2,2,4];

function evensAndOdds(){
    var even = 0;
    var odd = 0;
    for ( var  i = 0 ; i < arr.length ; i ++){
        if (arr[i]%2 == 0){
            even++;
            odd = 0;
        }
        else {
            odd++;
            even = 0;
        }
        if (odd == 3){
            console.log("That's odd");
            odd = 0;
        }
        if (even ==3){
            console.log("Even more so!");
            even = 0;
        }
    }
    
}
evensAndOdds();

// 7- Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).
//  Afterward, console.log each array value and return arr.

var arr = [1,2,4,5,6,7];

function increamentTheSeconds(){

    for ( var i = 0 ; i < arr.length ; i ++){
        if (i%2 === 1) {
            arr[i] =  arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(increamentTheSeconds());

// 8- Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
// Hint: Can for loops only go forward?

var arr = ["hello","dojo","awesome"];

function previousLengths(arr){
    for ( var i = arr.length-1 ; i > 0 ; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log(previousLengths(arr));

// 9- Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.
//  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

var arr = [1,2,3,4,5];
function addSeven(){
    var newArr= [];
    for ( var i = 0 ; i < arr.length ; i++){
        newArr[i] = arr[i] + 7;
    }
    return newArr;
}

console.log(addSeven());

// 10-Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].
//  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

var arr= [1,2,3,4,5];

function ReverseArr(){
    for ( var i = 0 ; i < arr.length/2 ; i ++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1 - i ];
        arr[arr.length-1 - i] = temp;
    }
    return arr;
}
console.log(ReverseArr()); 

// 11- Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, 
//but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

var arr = [1,2,-3,-4];

function allNegatives(){
    var newArr= [];
    for ( var i  = 0 ; i < arr.length ; i++) {
        if (arr[i] < 0){
            newArr[i] = arr[i];
        }
        else {
            newArr[i] = arr[i] *-1
        }
    }
    return newArr;
}
console.log(allNegatives());

// 12- Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". 
// If no array values are "food", then print "I'm hungry" once.

var arr = ["food","food",2,3,5];
function foodHungry(){
    for ( var i = 0 ; i < arr.length ; i++){
        if (arr[i] == "food"){
            console.log("yummy");
        }
    }
    if (arr.indexOf("food") == -1) {
        console.log("I'm hungry");
    }
}
foodHungry();

// 13- Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].
//  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

var arr  = [1,2,3,4,5,6];

function swapTowardsCenter(){
   
    for (var i = 0 ; i < arr.length/2 ; i +=2){
            var temp = arr[i];
            arr[i] = arr[arr.length-1 - i];
            arr[arr.length-1 - i] = temp;
    
    }
    console.log(arr);
}
swapTowardsCenter();
//  14- Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num,
// and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

var arr = [1,2,3];
var num = 3;

function scaleTheArray(arr,num){
    for ( var i = 0 ; i < arr.length ; i ++){
        arr[i] *= num;
    }
    return arr;
}
console.log(scaleTheArray(arr,num));