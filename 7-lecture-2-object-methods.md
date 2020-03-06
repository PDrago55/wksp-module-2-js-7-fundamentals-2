# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
Object.keys(friendsAge);
[
    0: 'Kevin'
    1: 'Rick'
    2: 'Morty'
    3: 'Jerry'
]
```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
Object.keys(friendsAge).forEach(friend => {
    console.log(friendAge[friend]);
});

// gets the ages
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```
//pulls out the value of each key....
const age = Object.values(friendsAge);
creates an array of just the numbers :).


const friends = [
    {name: 'Kevin', 32}
    {name: 'Rick' 60}
    {name: 'Morty' 14}
    {name: 'Jerry' 35}
]
friends.sort((a,b) => a.name, - b.name);
---
