
//array

const myArr = [0, 3, 4, 5, 6, 7, 6]
const myHeros = ["ironman", "superman", "Hulk", "shaktiman"]

const myArr2 = new Array(1, 3, 45, 6, 7, 8)
// console.log(myArr[[3]]);

//important shallow copies , deep copy


// Array methods


// myArr.push(8)
// myArr.push(10)
// myArr.pop()



// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)



///********** Slice, Splice *****************/


// console.log("A", myArr);

const myn1 = myArr.slice(1, 3)


// console.log("B", myArr);;


const myn2 = myArr.splice(1, 3)
// console.log("C",myn1);
// console.log(myn2);




//Part


const marval_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "batman", "flash"]


// marval_heros.push(dc_heros);
// console.log(marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3, 4, [1, 3, 3], 9, [2, 4, 5, 6], [4, 5, 6, 7]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)



console.log(Array.isArray("Prince"))
console.log(Array.from("Prince"))
console.log(Array.from({ name: "Prince" })) // interestin important

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));