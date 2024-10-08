// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(cat1, cat2) {
    if(cat1 > cat2) {
        return cat1
    } else {
        return cat2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0) {
        return null;
    }
   let longestWord= "" 
    for (let i = 0; i < arr.length; i++)
        if (arr[i].length > longestWord.length){
            longestWord = arr[i];
        }
        
       return longestWord;
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(addedNumbers) {
    let sum = 0;
    for (let i = 0; i < addedNumbers.length; i++) {
        sum += addedNumbers[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  return average;
    }





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToSearch) {
    if (words.length === 0) {
        return null;
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i] === wordToSearch) {
            return true;
        }
    }
    return false;
}