# 2.7.1 - JS - array.sort()

---

## .sort() - without parameters

```js
const characters = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

characters.sort();

// outcome?
// sorts them in alphabetical order
// but what happens when one of the names is not capitalized? it doesn't sort that word.
```

---

This method will sort the array items by their `unicode` numbers.

(sort of alphabetical...)

---

This will work for _most_ cases, but what about when it doesn't?

---

### Example

This doesn't work as _expected_.

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort();

// outcome?
// it sorts out as 'alphabetical' so 9 is going to be the last number on list cause it is largest// 

```

---

## Solution: Define out own sorting function!

---

## .sort() - with a function parameters

- This method can accept a function as a parameter.
- This function acts as a sorting function.

---

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort((a, b) => {
    return a - b;
    })

// outcome?
//sorts them from smallest to largest 
// or 
numbers.sort((a, b) => b - a)

//returns largest to smallest 

```

---

