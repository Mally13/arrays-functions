/**
 * Qsn 1: What are the differences between mutating array methods and
 * non-mutation array methods in JavaScript. List 5 array methods that
 * fall under each of them.
 * 
 * Answer
 * 
 * Mutating array methods are methods that change an object after being used. 
 *          Examples are:  push(), pop(), shift(), splice(), fill(), reverse(), sort()
 * Non mutating array methods leave the object as it was before they were used.
 *          Examples are: map(), slice(), concat(), filter(), indexOf(), find(), includes(), count()
 */

/** 
 * Qsn 2: Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
    - Add ‘Kotlin’ to the end of the array
    - Add ‘Java’ after ‘Ruby’
    - Remove the first item in the array
    - Add ’Scala’ and ‘Swift’ to the beginning of the array
    - Replace ‘PHP’ with ‘Go’ and ‘Rust’
*/
//Add ‘Kotlin’ to the end of the array
const languages = ['c#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.push('Kotlin');
console.log(languages);

//Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java');
console.log(languages);

//Remove the first item in the array
languages.shift();
console.log(languages);

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages);

//Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

/**
 * Qsn 3: What will be the value of fruit after calling the function changeFruit?
    '''let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}'
 * 
 * Answer
 * 
 * [ 'apple', 'mango', 'orange' ]
 */

/**
 * Qsn 4: Write a function that accepts an array of numbers as an argument.
 *  Return the maximum value in the array.e.g., max([4, 5, 10, -2]) // maximum value is 10
 */

let numbers = [4, 5, 10, -2];

function max_value(numbers){
    let max = numbers[0] ;
    let size = numbers.length;

    for (let i = 0; i < size; i++){
        if (max < numbers[i]){
            max = numbers[i];
        }
    }
    return (max);
}
let max = max_value(numbers);
console.log(`maximum value is ${max}`);

/**
 * Qsn 5: Write a function called valTimesIndex which accepts an array of numbers and
 * returns a new array with each value multiplied by the index it is at in the array:
 * e.g.valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]
 */
let numArr = [5,10,15];

function valTimesIndex(numbers){
    let size = numbers.length;
    let numArr2 = [];
    for (let i = 0; i < size; i++){
        numArr2[i] = (i * numbers[i]);
    }
    return numArr2;
}
console.log(valTimesIndex(numArr));