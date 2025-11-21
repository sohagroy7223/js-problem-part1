/**
 * SIMPLE LOGIC:
 * year will be leap year if the number is divisible by 4:
 * */

function isLeapyear(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
const leap = isLeapyear(2053);
console.log(leap);

/**
 * 1.this year is not divisible by 100 and if the year is divisible by 4: then it will bea leap year
 * 2.if the year is dividible by 400, then it is a leap year.
 * 3.else it is not a leap year.
 * */

function isLeapyear1(year) {
    if (year % 100 !== 0 && year % 4 == 0) {
        return true;
    } else if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const islipe = isLeapyear1(2024);
const islipe1 = isLeapyear1(2029);
const islipe2 = isLeapyear1(2800);
const islipe3 = isLeapyear1(2100);
console.log(islipe, islipe1, islipe2, islipe3);
