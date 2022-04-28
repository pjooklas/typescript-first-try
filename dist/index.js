"use strict";
const n1 = 7;
const n2 = '5';
function sum(a, b) {
    if (typeof a !== 'number') {
        a = +a;
    }
    if (typeof b !== 'number') {
        b = +b;
    }
    return a + b;
}
const r1 = sum(n1, n2);
const r2 = sum(n2, n1);
console.log(r1);
console.log(r2);
const marks = [10, 2, 8, 4];
function average(list) {
    let suma = 0;
    const kiekis = list.length;
    for (let i = 0; i < kiekis; i++) {
        suma += list[i];
    }
    return suma / kiekis;
}
const v1 = average(marks);
console.log(v1);
const petras = ['Petras', 99, true];
const maryte = ['Maryte', 87, false];
function aboutPerson(person) {
    return `${person[0]} is ${person[1]} old and is ${person[2] ? '' : 'not '}married.`;
}
console.log(aboutPerson(petras));
var colors;
(function (colors) {
    colors["blue"] = "blue";
    colors["black"] = "black";
    colors["red"] = "red";
})(colors || (colors = {}));
;
var foods;
(function (foods) {
    foods["banana"] = "banana";
    foods["potatoe"] = "potatoe";
})(foods || (foods = {}));
const prime = {
    name: 'Optimus Prime',
    color: colors.black,
    food: foods.banana,
};
const chuck = {
    name: 'Chuck',
    color: colors.blue,
    age: 70,
    food: foods.potatoe,
};
console.log(prime);
console.log(chuck);
function heroSais(h) {
    return `${h.name} ${h.age ? `(${h.age}y) ` : ''}has ${h.color} belt`;
}
console.log(heroSais(chuck));
console.log(heroSais(prime));
console.log(chuck);
console.log(prime);
const input = 'oesgsboginodfgnidsofkngdklfghdfkjh';
// const letters: {[key: string]: number} = {}
const letters = {};
for (const letter of input) {
    if (letters[letter]) {
        letters[letter]++;
    }
    else {
        letters[letter] = 1;
    }
}
console.log(letters);
function isValidName(name) {
    if (typeof name !== 'string') {
        return [true, `Vardas turi buti stringas, tu man davei "${typeof name}"`];
    }
    if (name === '') {
        return [true, 'Vardas negali buti tuscias'];
    }
    if (name[0] === name[0].toLowerCase()) {
        return [true, 'Vardas turi prasideti didziaja raide'];
    }
    if (name.slice(1) !== name.slice(1).toLowerCase()) {
        return [true, 'Po vardo pirmos raides, turi buti mazosios raides'];
    }
    return [false, 'OK'];
}
console.log(isValidName(1));
console.log(isValidName(true));
console.log(isValidName(''));
console.log(isValidName('jonas'));
console.log(isValidName('jONas'));
console.log(isValidName('JONas'));
console.log(isValidName('Jonas'));
// [true, 'Klaidos pranesimas']
// [false, 'OK']
