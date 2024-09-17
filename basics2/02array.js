const heroes = ["thor","ironman","superman"]
const dc_heroes=["flash","batman","Xman"]

// console.log(heroes);
// heroes.push(dc_heroes);
// console.log(heroes)

const all_heroes = heroes.concat(dc_heroes)
console.log(all_heroes);

const allNewHeroes = [...heroes, ...dc_heroes]
console.log(allNewHeroes);

const another_array = [1,2,3,[4,5,6],7,[4,5]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("kshitiz"))
console.log(Array.from("kshitiz"))