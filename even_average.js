function evenAverage(numbers) {
    const even = [];
    for (const num of numbers) {
        if (num % 2 === 0) {
            console.log(num);
            even.push(num);
        }
    }
    // console.log(even);
    let sum = 0;
    for (const number of even) {
        sum = sum + number;
    }
    // console.log(sum);
    const evens = sum / even.length;
    return evens;
}
const number = [12, 34, 57, 45, 22, 48, 6];
const even = evenAverage(number);
console.log("total even number average is", even);
