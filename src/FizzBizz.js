
const Fizz = num => (num%3 === 0 ? "Fizz" : "");

const Bizz = num => (num%5 === 0 ? "Bizz" : "");

const Whizz = num => (num%7 === 0 ? "Whizz" : "");

const FizzBizz = param => {
    let str = (Fizz(param) + Bizz(param) + Whizz(param)).trim();
    return str === "" ? param : str;
};

let arr = [...Array(120).keys()].map(num => num+1);

const process = arr => {
    return arr.map(num =>  FizzBizz(num));
};

// console.log(process(arr));
module.exports = {
    Fizz,
    Bizz,
    Whizz,
    FizzBizz,
    process,
};