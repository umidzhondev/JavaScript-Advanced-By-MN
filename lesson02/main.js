const movements = [2, 5, 8, 10, 15, 20, 23, -10, -5];

const balance = movements.reduce((prevValue,currentValue,index,array)=>{
    console.log(`Iteration ${index} ${prevValue}`);
    return prevValue + currentValue;
})

console.log(balance);

//  destructuring

const clubs = {
    name: "Real Madrid",
    location: "Madrid",
    categories: ["Spain", "Men", "Women"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a);

const [x, y, z] = arr;
console.log(z, x, y, z);

const nested = [2, 4, [5, 6, [7, 8]]];
const [i, q, [j, k, [m, n]]] = nested;
console.log(i, q, j, k, m, n);

const { name, openingHours, categories } = clubs;
console.log(name, openingHours, categories);
const { name: clubName, openingHours: hours, categories: tags } = clubs;
console.log(clubName, hours, tags);

// spread operators

const arrSpread = [7, 8, 9];
const badNewArr = [1, 2, arrSpread[0], arrSpread[1], arrSpread[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arrSpread];

console.log(newArr);
console.log(...arrSpread);

const newCategory = [...clubs.categories, "Barcelona"];
console.log(newCategory);
console.log(clubs.categories);

// Functions Declaration


function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(2000);
console.log(age1);

// Function expression

const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
};
const age2 = calcAge2(2000);
console.log(age2);

// Arrow function

const calcAge3 = birthYear => {
    return 2022 - birthYear;
};
const age3 = calcAge3(2000);
console.log(age3);