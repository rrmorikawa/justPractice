'use strict';

//Reverse a string
function getString() {
    let input = document.getElementById("textField").value.toString();
    let reverse;

    reverse = input.split("").reverse().join("");
    document.getElementById("newString").innerHTML = reverse;
}

// **********************************************************************

//generate an array using random numbers
let random = [];

let getArray = () => {
    for (let i = 0; i < 5; i++) {
        let integer = Math.floor(Math.random() * 100);
        random.push(integer);
    }
    if (document.getElementById("randomArray")) {
        document.getElementById("randomArray").innerHTML = random;
    }

}

//sorts an array in from smallest to largest
function sortArray(someArray) {
    for (let i = 0; i < someArray.length; i++) {

        for (let j = 0; j < someArray.length - 1; j++) {
            let x = someArray[j + 1];
            if (someArray[j] > someArray[j + 1]) {

                someArray[j + 1] = someArray[j];
                someArray[j] = x;
            }
        }
    }
    document.getElementById("sortedArray").innerHTML = someArray;
}


// **********************************************************************

//find number in a sorted array using for loop.
let scores = [4, 8, 25, 48, 55, 69, 73, 81, 99];
document.getElementById("scoreArray").innerHTML = scores;
let findIndex = (scores) => {
    for (let i = 0; i < scores.length; i++) {
        console.log(i);
        if (scores[i] === 25) {
            document.getElementById("foundNumber").innerHTML = "The number is at index " + i;
            break;
        }
    }
}

//find number in sorted array using binary search
let searchNumber;
let binarySearch = searchNumber => {
    searchNumber = document.getElementById("myNumber").value; //get the search value from the text box
    let minIndex = 0;
    let maxIndex = (random.length - 1);
    let midIndex;
    let midElement;

    while (minIndex <= maxIndex) {
        midIndex = ((minIndex + maxIndex) / 2 | 0); //finds the middle index of the array
        midElement = random[midIndex]; //assigns value at the middle index to midElement
        if (midElement < searchNumber) { //if midElement value is less than the searchNumber value, then set new minimum to the midIndex +1
            minIndex = midIndex + 1; //now min index is at the midway point and maxIndex is still the same.
        }
        else if (midElement > searchNumber) {
            maxIndex = midIndex - 1;
        }
        else {
            return document.getElementById("newString").innerHTML = "Magic 8 ball says: Your number is at index " + midIndex;
        }
    }
    return document.getElementById("newString").innerHTML = "Magic 8 ball says: Stop giving me numbers that dont exist.";
}


// **********************************************************************

