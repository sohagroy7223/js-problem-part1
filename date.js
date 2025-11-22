const today = new Date("2050-12-19");
console.log(today);
const date = new Date(2090, 7, 25, 11, 50, 30, 762);
console.log(date);
date.setMonth(11); //[change the month set 8 to = 12]
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
