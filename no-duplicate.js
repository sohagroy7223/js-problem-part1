function noDuplicate(array) {
    const update = [];
    for (const item of array) {
        if (update.includes(item) === false) {
            update.push(item);
        }
    }
    return update;
}
const item = [12, 35, 68, 12, 45, 87, 12, 45, 35];
// console.log(noDuplicate(item));

function noDuplicate1(array) {
    const duplicate = [];
    for (const item of array) {
        if (duplicate.includes(item) === false) {
            duplicate.push(item);
        }
    }
    return duplicate;
}
const mistyKhor = [
    "saikot",
    "sumon",
    "somu",
    "samor",
    "sumon",
    "somu",
    "sumon",
    "sagor",
];
// console.log(noDuplicate1(mistyKhor));

function noDuplicate(array) {
    const unique = [];
    for (let i = 0; i < array.length; i++) {
        if (unique.includes(array[i]) === false) {
            unique.push(array[i]);
        }
    }
    return unique;
}

const manus = ["elon", "bil", "sumon", "sagor", "elon", "bil"];

// console.log(noDuplicate(manus));

function teaKhor(array) {
    let a = 0;
    const news = [];
    while (a < array.length - 1) {
        a++;
        if (news.includes(array[a]) === false);
        news.push(array[a]);
    }
    return news;
}

const manush = ["elon", "bil", "sumon", "sagor", "elon", "bil"];
const result = teaKhor(manus);
console.log(result);
