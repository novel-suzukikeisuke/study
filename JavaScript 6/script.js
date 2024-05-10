//const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人";

console.log(characters);

characters.push("とりずきん");
console.log(characters);

//const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"];

characters.forEach((character) => {console.log(character)});

//const numbers = [1, 3, 5, 7, 9];
const foundNumber = numbers.find((number) => {
    return number % 3 == 0;
});
console.log(foundNumber);

//const characters = [
    {id: 1, name: "にんじゃわんこ", age: 6},
    {id: 2, name: "ベイビーわんこ", age: 2},
    {id: 3, name: "ひつじ仙人", age: 100},
    {id: 4, name: "とりずきん", age: 21},
];
const foundCharacter = characters.find((character) => {
    return character.id == 3;
});
console.log(foundCharacter);

//const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((number) => {
    return number % 2 == 0;
});
console.log(evenNumbers);

const characters = [
    {id: 1, name: "にんじゃわんこ", age: 14},
    {id: 2, name: "ベイビーわんこ", age: 5},
    {id: 3, name: "ひつじ仙人", age: 100}
];
const underTwenty = characters.filter((character) => {
    return character.age < 20;
});
console.log(underTwenty);

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((number) => {
    return number * 2;
});
console.log(doubledNumbers);

const names = [
    {firstName: "Kate", lastName: "Jones"},
    {firstName: "John", lastName: "Smith"},
    {firstName: "Denis", lastName: "Williams"},
    {firstName: "David", lastName: "Black"}
];
const fullNames = names.map((name) => {
    return name.firstName + name.lastName;
});
console.log(fullNames);