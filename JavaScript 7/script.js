//const printWanko = () => {
    console.log("にんじゃわんこ");
};

const printHitsuji = () => {
    console.log("ひつじ仙人");
};

//const call = (callback) => {
    console,log("コールバック関数を呼び出します。");
    callback();
};

call(printHitsuji);

const printWanko = () => {
    console.log("にんじゃわんこ");
};

//const call = (callback) => {
    console.log("コールバック関数を呼び出します。");
    callback();
};

call(printWanko);

call(() => {
    console.log("ひつじ仙人");
});

const call = (callback) => {
    callback("にんじゃわんこ", 14);
};
call((name, age) => {
    console.log(`${name}は${age}歳です。`);
});