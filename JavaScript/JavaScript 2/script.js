
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

let number = 1;
while (number <= 100) {
    console.log(number);
    number += 1;
}

for (let number = 1; number <= 100; number++) {
    console.log(number);
}

for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0) {
        console.log("3の倍数です");
    } else {
        console.log(number);
    }
}

for (let i = 0; i < 3; i++) {
    console.log(animals[i]);
}

const animals = ["dog","cat","sheep","rabbit","monkey","tiger","bear","elephant"];
console.log(animals.length);
for (let i = 0; i == animals.length; i++) {
    console.log(animals[i]);
}

const characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人", age: 100},
    {name: "ベイビーわんこ", age: 5},
    {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
    console.log("-------------");
    const character = characters[i];
    console.log(`名前は${character.name}です`);
    if (character.age == undefined) {
        console.log("年齢は秘密です");
    } else {
        console.log(`${character.age}歳です`);
    }
}

const cafe = {
    name: "Progateカフェ",
    businessHours: {
        opening: "10:00(AM)", 
        closing: "8:00(PM)"
    },
    menus: ["コーヒー", "紅茶", "チョコレートケーキ"]
};

console.log(`店名:${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log("----------");
console.log("おすすめメニューはこちら");

for (let i = 0; i < cafe.menus.length; i++) {
    console.log(cafe.menus[i]);
}