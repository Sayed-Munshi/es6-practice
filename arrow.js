// function doubleIt (num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt =  num => num * 2;
const add = (x, y) => x + y;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result  = sum * diff;
    return result;
}

const result = add(60, 50);

const result3 = doMath(7, 5);

console.log(result3);