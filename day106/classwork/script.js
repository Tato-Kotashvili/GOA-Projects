// N1
// filter() ფილტრავს მითითებულ მასივს რაიმე წესის მიხედვით

// N2
let ages = [20,15,40,53,12,32,17,18,19,33,29,85,67]
let newAges1 = ages.filter(age => age < 18)
console.log(newAges1)
let newAges2 = ages.filter(age => age >= 18)
console.log(newAges2)
// N3
numbers = [25,111,921,321,432,545,133,987,436]
let newNumbers = numbers.map(number => number % 2 == 0? number *= 13 : number *= 16)
let filteredNums = newNumbers.filter(fil => fil % 2 == 0)
console.log(filteredNums)