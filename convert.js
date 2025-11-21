function inchtofeet(feet) {
    const result = feet / 12;
    return result;
}
const sohagHight = inchtofeet(67);
console.log(sohagHight, "feet");

console.log("-------");

function gramToKg(gram) {
    const result = gram * 0.001;
    return result;
}
const kg = gramToKg(50000);
console.log(kg, "kg");

console.log("------------");

function kgToGram(kg) {
    const result = kg * 1000;
    return result;
}
const gram = kgToGram(50);
console.log(gram, "gram");

console.log("-----------------");

function clearInchtoFeet(inch) {
    const feetfraction = inch / 12;
    const feetNumber = parseInt(feetfraction); //for [5.83 to = 5]
    const inchNumber = inch % 12; //for [vagsas bar korar neom.exm: 70%12=10]
    const result = feetNumber + " feet " + inchNumber + " inch";
    return result;
}
console.log(clearInchtoFeet(70));
console.log("-----------------");

function mileToKm(mile) {
    const result = mile * 1.60934;
    return result;
}
const kilometar = mileToKm(13);
console.log(kilometar, "km");
