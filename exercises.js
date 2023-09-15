'use strict'

document.addEventListener('DOMContentLoaded', function () {
    console.log('CONTENT LOADED');
    // ---------------------
    // Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
    // myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
    // ---------------------

    // Put your answer below -------------------------



    function myFunc(string, integer) {
        let array = [];
        while (integer > 0) {
            array.push(string);
            integer--;
            // console.log(integer);
        }
        return array;
        // let array = [string.repeat(integer)];
        // console.log(array);
    };

    const result = (myFunc("Doberman", 3));
    console.log(result);

    // console.log(myFunc("German Shepherd", 9));
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and reverses all the values in an array
    // The function should not mutate the original array
    // ---------------------

    // Put your answer below -------------------------

    const myArray = [5, 4, 3, 2, 1];

    const revArray = [...myArray].reverse();

    const davidArray = myArray.slice().reverse();

    const maryArray = [];

    myArray.forEach((e) => maryArray.unshift(e))    // pushes the last value of array to the front

    console.log(myArray);
    
    // console.log(revArray);
    
    // console.log(davidArray);

    console.log(maryArray);

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and removes all falsy values from the array
    // ---------------------

    // Put your answer below -------------------------

    // const array = [true, false, false, true];

    // function deleteFalseValues(array) {
    //     for (let i = 0; i < array.length; i++) {
    //         if (!array[i]) {
    //             array.splice(i, 1);
    //         }
    //     }
    // }

    // deleteFalseValues(array);
    // console.log(array);

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
    // const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
    // returns { name: 'Charlie', color: 'brown', age: 10 };
    // ---------------------

    // Put your answer below -------------------------

    // const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];

    

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and removes duplicate values
    // [1,2,3,4,5,4,3] should return [1,2,3,4,5]
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
    // [1,2,3,4] and [1,2,3,4] should return true
    // [1,2,3,4,5] and [1,2,3,4] should return false
    // [1,2,3,4] and [1,2,3,4,4] should return false
    // [1,2,3,4] and [1,4,3,2] should return true
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //            ___  ____  _  ____  ______        //
    //           / _ )/ __ \/ |/ / / / / __/        //
    //          / _  / /_/ /    / /_/ /\ \          //
    //         /____/\____/_/|_/\____/___/          //
    //                                              //
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // ---------------------
    // Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
    // [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
    // [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
    // DO NOT USE Array.prototype.flat()
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and splits it into parts of size i
    // ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
    // ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------
});