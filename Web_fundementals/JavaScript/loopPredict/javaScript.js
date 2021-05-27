// predict 1 
for(var num = 0; num < 15; num++){ //print from 0 to 14 

    console.log(num);
}
// predict 2 
for(var i = 1; i < 10; i+=2){ //print 3, 9
    if(i % 3 == 0){
        console.log(i);
    }
}
// predict 3 
for(var j = 1; j <= 15; j++){ // print 1,4,5,8,10,11,14,16
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}