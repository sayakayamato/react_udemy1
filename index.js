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

