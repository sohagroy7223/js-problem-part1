function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            console.log(number);
            odds.push(number);
        }
    }
    console.log(odds);
    let sum = 0;
    for (const num of odds) {
        sum = sum + num;
    }
    const odd = number.length;
    const avg = sum / odd;
    return avg;
}
const number = [42, 13, 58, 65, 81, 71];
const avg = oddAverage(number);
console.log("total odd average is", avg);
