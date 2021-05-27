// Remember, we're gonna use strict mode in all scripts now!
"use strict"

function birthdayCakeCandles(candles) {
    var count = 0;
    var maxValue = Math.max(...candles);
    for (var i = 0; i < candles.length; i++) {
        if (candles[i] == maxValue) {
            count++;
        }
    }
    console.log(count);

}
birthdayCakeCandles([3, 1, 2, 4, 4, 4, 4, 7]);
console.log("hihsASsad")