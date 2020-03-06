// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// var myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

let myLife = {
    name: {
        first: 'Paolo',
        last: 'Drago',
    },
    age: '23',
    city: 'Montreal',
    siblings: 1,
    petName: 'Bruh',
    monthOfBirth: 'June'
}


console.log(myLife); 
console.log(myLife.name.first);
console.log(myLife.petName);
console.log(myLife.city); 


//-------------------------------------------------

// Exercise 1.1
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

let myLife = {
    name: {
        first: 'Paolo',
        last: 'Drago',
    },
    age: '23',
    city: 'Montreal',
    siblings: 1,
    petName: 'Bruh',
    monthOfBirth: 'June',
    bestTV: 'Sopranos',
    occupation: 'student:(',
    favsport: 'hockey',
}


console.log(myLife); 
console.log(myLife.occupation);
console.log(myLife.bestTV);
console.log(myLife.favsport); 

//-------------------------------------------------

// Exercise 1.2
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

var favoriteMovie = {
    title: 'Pulp Fiction',
    Director: 'Quentin Tarantino',
    YearReleased: 1994,
    Rating: 8.9,
    Actors: {
        first: 'Bad',
        last: 'MotherFucker',
        first: 'My',
        last: 'Watch!',
        first: "Royale",
        last: 'Cheese',
    }
}


//-------------------------------------------------

// Exercise 1.3
// ------------
// Fix the attempts to access values in the `person` object:

const key = "name";
const person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};

console.log(person.age);    // => 26
console.log(person.name);     // => "Alyssa P. Hacker"


//-------------------------------------------------

// Exercise 1.4
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
    name: {
        first: "Alyssa",
        middle: "P.",
        last: "Hacker"
    },
    age: 26,
};

function fullName(person) {
return Object.values(alyssa.name);
}

console.log(fullName(alyssa));// => "Alyssa P. Hacker"

// Exercise 1.5
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name?

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
    name: {
        first: "Rick",
        last: "Sanchez"
    },
    age: 66,
};

function betterFullName(person) {
let x = Object.values(rick.name);
let y = x.join(); // is this doing anything?// 
return y;
}

console.log(betterFullName(rick)); // => "Rick Sanchez"