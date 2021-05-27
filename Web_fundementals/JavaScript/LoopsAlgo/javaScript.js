// 1- print odds from 1 - 20
for (var i =1 ; i <=20 ; i++) {
    if (i % 2 !== 0){
        console.log(i);
    }
}

// 2- sum and print 1-5
var sum = 0;
for (var i =1 ; i<=5 ; i++){
    sum = sum + i;
    console.log(`Num: ${i},Sum: ${sum}`);
}