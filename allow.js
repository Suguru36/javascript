// 従来関数
// let f = function(x, y) {
//     return x * y;
// }

// console.log(f(2,3));


// allow関数
// let f = (x, y) => {
//     return x * y;
// }

// console.log(f(2,3));

// 関数の引数が一つ。引数部分のカッコを省略可能
// let f = x => {
//     console.log(x);
// }

// f(2);


//引数がない場合はカッコは省略不可
let f =() => {
    console.log("test");
}

f();
