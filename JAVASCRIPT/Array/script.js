const newArr = [0,1,2,3,4,5,6,7,8,9]
// newArr.unshift(10)
// console.log(newArr);

// slice ,splice
// console.log("A" , newArr)
const myn1 =newArr.slice(1,3)
// console.log(" B " ,myn1);

const myn2 =newArr.splice(1,3)
// console.log(newArr);
// console.log("C",myn2);
// +++++++++++++++++++++++++++++++Adding To  array+++++++++++++++++++++++++++++++++
const marval_heros = ["Thor","Loki","Dr.Strange","IronMan"]
const dc_heros = ["Batman","Superman","Flash" ]

const all_heros=marval_heros.concat(dc_heros)
// console.log(all_heros);

// ++++++++++++++++++++++++++++++++Spreading opertor(adding two array)++++++++++++++++++++++++++++++++++++++
const all_newheros=[...marval_heros,...dc_heros]

// console.log(all_newheros);


const newArr2 = [4,5,6,2,8,[5,5,5],5,[4,5,6,[7,4,5,]]]

const anotherArr= newArr2.flat(Infinity)
// console.log(anotherArr);

// console.log(Array.from("lakhan"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));



