// テンプレートリテラル
const name = "さや";
const age = "21";

console.log(`私の名前は${name}です。歳は${age}歳です。`);

// アロー関数
const func1 = (str) => {
    return str;
}
console.log(func1("ヤッホー"));

// 分割代入
const myProfile = {
    myName: "さや",
    myAge: 21
}

const message = `私の名前は${myProfile.myName}です。年齢は${myProfile.myAge}歳です。`;
console.log(message);

const {myName, myAge} = myProfile;
console.log(`私の名前は${myName}です。年齢は${myAge}です。`)

const like = ["meat", "まさと"];
const message3 = `私の好きなものは${like[0]}と${like[1]}です。`;
console.log(message3);

const [meat, masato] = like;
console.log(`${meat}と${masato}だよ`);

//デフォルト値・引数
const sayHello = (yourName = "ゲスト") => console.log(`こんにちは、${yourName}さん！`);
sayHello("神谷");



//スプレッド構文
// 配列の展開
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

// const sumFunk = (num1, num2) => console.log(num1 + num2);
// sumFunk(arr1[0], arr1[1]);
// sumFunk(...arr1);

//まとめる
const arr2 = [1,2,3,4,5];
const [num1,num2, ...arr3] = arr2;
console.log(num1);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

