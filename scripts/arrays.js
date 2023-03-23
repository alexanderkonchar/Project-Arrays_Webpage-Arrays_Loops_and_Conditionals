"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition

   Author: Alex Konchar
   Date: 3/22/2023
*/

/**
 * Books
 */
// Create an array of book titles
const titles = ["Don Quixote", "Lord of the Rings", "Harry Potter and the Sorcerer's Stone",
    "And Then There Were None", "Alice's Adventures in Wonderland",
    "The Lion, the Witch, and the Wardrobe", "Pinocchio"];

// Create an array of authors corresponding to their titles
const authors = ["Miguel de Cervantes", "J.R.R. Tolkien", "J.K. Rowling",
    "Agatha Christie", "Lewis Carroll", "C.S. Lewis", "Carlo Collodi"];

// Create a table with appropriate headers
let booksHTML = `<table>
                          <tr><th>Name</th><th>Author</th></tr>`;

// Iterate through the books
for (let i = 0; i < titles.length; ++i) {
    // Add the current title and author to a table row
    booksHTML += `<tr>
                    <td>${titles[i]}</td>
                    <td>${authors[i]}</td>
                  </tr>`;
}

booksHTML += `</table>`;

// Display the table of books to the user
document.getElementById("books").innerHTML = booksHTML;


/**
 * All Months
 */
// Create an empty months array
let months = [];

// Add the months to the array
const listOfMonthsToAdd = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
listOfMonthsToAdd.forEach((month) => {
    months.push(month);
})

// Shuffle the months and store the result in the unorderedMonths variable
const unorderedMonths = shuffleArray(months);

// Create an unordered list to be populated with months
let monthsHTML = `<ul>`;

// Iterate through the unorderedMonths array
unorderedMonths.forEach((month) => {
    // Add a list item for the current month
    monthsHTML += `<li>${month}</li>`;
})

monthsHTML += '</ul>';

// Display the list of months to the user
document.getElementById("allMonths").innerHTML = monthsHTML;


/**
 * Months that start with J
 */
// Stores the months that start with J
let jMonths = [];

// Iterate through an unsorted list of months
shuffleArray(months).forEach((month) => {
    // If the month starts with J, it's added to the jMonths array
    if (month[0].toLowerCase() === 'j') jMonths.push(month);
})

// Create an unordered list to be populated with months that start with J
let jMonthsHTML = `<ul>`;

// Iterate through the months that start with J
jMonths.forEach((month) => {
    // Add a list item for the current month
    jMonthsHTML += `<li>${month}</li>`;
})

jMonthsHTML += `</ul>`;

// Display the list of months that start with J to the user
document.getElementById("jMonths").innerHTML = jMonthsHTML;


/**
 * Months that don't start with J
 */
// Create an array of unsorted months
let nonJMonths = shuffleArray(months);

// Iterate through that array
for (let i = 0; i < nonJMonths.length; ++i) {
    // Check if the current position matches an element in the jMonths array
    const index = jMonths.indexOf(nonJMonths[i]);
    if (index !== -1) {
        // If it does, use the splice method to remove that element from the array
        nonJMonths.splice(i, 1);
        --i; // Decrement i to account for the removed element
    }
}

// Create an unordered list to be populated with months that don't start with J
let nonJMonthsHTML = `<ul>`;

// Iterate through the months that don't start with J
nonJMonths.forEach((month) => {
    // Add a list item for the current month
    nonJMonthsHTML += `<li>${month}</li>`;
})

nonJMonthsHTML += `</ul>`;

// Display the list of months that don't start with J to the user
document.getElementById("nonJMonths").innerHTML = nonJMonthsHTML;


/**
 * Months that contain R
 */
// Create an unsorted array of months that contain R
const rMonths = shuffleArray(months).filter(checkIfContainsR);

// Create an unordered list to be populated with months that contain R
let rMonthsHTML = `<ul>`;

// Iterate through the months that contain R
rMonths.forEach((month) => {
    // Add a list item for the current month
    rMonthsHTML += `<li>${month}</li>`;
})

rMonthsHTML += `</ul>`;

// Display the list of months that contain R to the user
document.getElementById("filterMonths").innerHTML = rMonthsHTML;

// Checks if a string contains the letter R
function checkIfContainsR(string) {
    return string.toLowerCase().indexOf('r') !== -1;
}

// Shuffles an array using the Durstenfeld shuffle algorithm
function shuffleArray(array) {
    // Iterate reversely through the array
    for (let i = array.length - 1; i > 0; --i) {
        // Generate a random index within the remaining unshuffled portion of the array
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the current element with the randomly selected one
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


/**
 * Sorting Arrays
 */
// Create a shuffled array full of words
let loremIpsum = shuffleArray(["Lorem", "ipsum", "dolor", "sit", "amet"]);

// Create a shuffled array full of numbers
let numbers = shuffleArray([-47, Math.PI, 16, -3872.938, Math.E, Math.sqrt(-1 * -1)]);

// Create a <p> tag
let twoArraysHTML = `<p>`;

// Iterate through the loremIpsum array
loremIpsum.forEach((word) => {
    // Add the current word and a space
    twoArraysHTML += word + " ";
})

// Close the <p> tag and open another one
twoArraysHTML += `</p>
                  <p>`;

// Iterate through the numbers array
numbers.forEach((num) => {
    // Add the current number along with a comma and a space
    twoArraysHTML += num.toString() + ", ";
})

// Remove the last comma and space
twoArraysHTML = twoArraysHTML.slice(0, -2);

// Close the last <p> tag
twoArraysHTML += `</p>`;

// Display the "paragraphs" to the user
document.getElementById("twoArrays").innerHTML = twoArraysHTML;


// Sort the arrays
loremIpsum = loremIpsum.sort();
numbers = numbers.sort();

// Create a <p> tag
let sortedArraysHTML = `<p>`;

// Iterate through the loremIpsum array
loremIpsum.forEach((word) => {
    // Add the current word and a space
    sortedArraysHTML += word + " ";
})

// Close the <p> tag and open another one
sortedArraysHTML += `</p>
                  <p>`;

// Iterate through the numbers array
numbers.forEach((num) => {
    // Add the current number along with a comma and a space
    sortedArraysHTML += num.toString() + ", ";
})

// Remove the last comma and space
sortedArraysHTML = sortedArraysHTML.slice(0, -2);

// Close the last <p> tag
sortedArraysHTML += `</p>`;

// Display the "paragraphs" to the user
document.getElementById("sortedArrays").innerHTML = sortedArraysHTML;


// Sort the arrays numerically
numbers = numbers.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

// Create a <p> tag
let sortedNumberArrayHTML = `<p>`;

// Iterate through the numbers array
numbers.forEach((num) => {
    // Add the current number along with a comma and a space
    sortedNumberArrayHTML += num.toString() + ", ";
})

// Remove the last comma and space
sortedNumberArrayHTML = sortedNumberArrayHTML.slice(0, -2);

// Close the last <p> tag
sortedNumberArrayHTML += `</p>`;

// Display the "paragraphs" to the user
document.getElementById("sortedNumberArray").innerHTML = sortedNumberArrayHTML;


/**
 * Footer Section
 */
const lastModified = document.lastModified;

const currentDate = new Date();

const footerHTML = `<h4>Last Modified: ${lastModified}</h4>
                           <h4>Current Date: ${currentDate}</h4>`;

document.getElementById("dates").innerHTML = footerHTML;