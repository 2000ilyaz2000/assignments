/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum=0;
    let date1 =new Date();
    const beforeTime=date1.getTime();
    console.log(beforeTime);
    for(let i=1;i<=n;i++){
    sum+=i;
    console.log(sum);
    }
    let date2 =new Date();

    const afterTime=date2.getTime();
   console.log(afterTime);
    console.log(afterTime-beforeTime);
    return 0.01;
}

calculateTime(10000);
