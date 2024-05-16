const i = function() {
    console.log("こんにちは！");
    console.log("関数を学習していきましょう！");
};
i();

const hello = function() {
    console.log("こんにちは！");
    console.log("私の名前は啓佑です");
};
hello();

const k = () => {
    console.log("こんにちは！");
};
k();

const greet = (name) => {
    console.log(`こんにちは、${name}さん`);
};
greet("ひつじ仙人");

const add = (number1, number2) => {
    console.log(number1 + number2);
};
add(5, 7);

const half = (number) => {
    return number / 2;
};
const e = half(130);
console.log(`130の半分は${e}です`);

const check = (number) => {
    return number % 3 == 0;
};
if(check(123)) {
    console.log("3の倍数です");
} else {
    console.log("3の倍数ではありません");
}

const name = "ひつじ仙人";
const introduce = () => {
    const name = "にんじゃわんこ";
    console.log(name);
};
introduce();
console.log(name);

const toMinutes = (hour, minute) => {
    return hour * 60 + minute;
};
const result = toMinutes(3, 20);
console.log(`${result}分`);