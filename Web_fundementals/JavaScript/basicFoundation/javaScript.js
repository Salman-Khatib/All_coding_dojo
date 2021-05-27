// 1- Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function myFunction(){
    var arr=[];
    for (var i = 1 ; i < 256 ;i++) {
       arr.push(i);
    }
    return arr;
}

console.log(myFunction());

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
//  You may use a modulus operator for this exercise.

function sumEven(){
    var sum = 0;
    for(var i = 1 ; i< 1001 ;i++){
        if(i%2 ===0){
            sum +=i;
        }
    }
    return sum;
}
console.log(sumEven());

function sumOdd(){
    var sum = 0;
    for (var i = 1 ; i < 5001 ; i++ ){
        if (i%2 != 0 ){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOdd());

// Iterate an array - Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
var arr = [-5,2,5,12];
function sumArray(arr){
    var sum = arr[0];
    for(var i = 1; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(arr));

//Find max - Given an array with multiple values,
// write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

var arr = [-3,-3,5,7]
function maxNumber(arr){
    var max = arr[0];
    for (var i = 1 ;i < arr.length ; i++) {
        if (max < arr[i] ){
            max = arr[i]
        }
}
return max;
}
console.log(maxNumber(arr));

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array.
// (e.g. for [1,3,5,7,20] average is 7.2)

var arr = [1,3,5,7,20];

function avgArray(arr){
    var sum = arr[0];
    for (var i = 1 ; i <arr.length ; i++){
        sum +=arr[i]
    }
    var avg = sum / arr.length ;
    return avg;
}
console.log(avgArray(arr));

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]).
// Hint: Use 'push' method.

function arrOdd(){
    var arr =[];
    for (var i=1;i<51;i++){
        if (i%2 == 1) {
        arr.push(i);
        }
    }
    return arr;
}
console.log(arrOdd());

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
// (There are two values in the array greater than 3, which are 5, 7).

var arr = [1,3,5,7];
var y = 3;
function greaterThanY(arr,y){
    var counter = 0;
    for (var i =0;i < arr.length ;i++){
        if (arr[i] > y){
            counter++;
        }
    }
    return counter;
}
console.log(greaterThanY(arr,y));

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. 
//(e.g. [1,5,10,-2] will become [1,25,100,4]);

function squareArr(arr){
    for (var i = 0; i <arr.length;i++){
        arr[i] *= arr[i];
    }
    return arr;

}
var arr = [1,5,10,-2];
console.log(squareArr(arr));

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values.
// (e.g. [1,5,10,-2] will become [1,5,10,0])

var arr = [1,5,10,-2];

function noNegativeArr(arr){

    for (var i = 0 ; i < arr.length ; i ++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(noNegativeArr(arr));

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array.
// (e.g. [1,5,10,-2] will return [10,-2,3.5])


function maxMinAvg() {
    var newArr = [];
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i =1 ; i < arr.length ; i++){
        if (max <arr[i]){
            max = arr[i];
        }
        if (min > arr[i]){
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg  = sum / arr.length;
    newArr = [max,min,avg];
    return newArr;



}
var arr = [1,5,10,-2];
console.log(maxMinAvg(arr));

//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2.
// (e.g. [1,5,10,-2] will become [-2,5,10,1]).

var arr = [1,5,10,-2] ;

function swapValue(){
    var x = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = x;
    return arr;
}
console.log(swapValue());

//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function swapNegativeWithDojo(){
    for (var i=0; i < arr.length ; i++){
        if(arr[i] < 0){
            arr[i] ="Dojo";
        }
    }
    return arr;
}
var arr = [-1,-3,2];
console.log(swapNegativeWithDojo());