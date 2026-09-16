// N1
let prices = [120, 45, 300, 80, 150, 25, 400]
for(let i = 0; i < prices.length; i++){
    if(prices[i] > 100){
        prices[i] = prices[i] - prices[i] * 0.2
        console.log(prices[i])
    }
    else if(prices[i] >= 50 && prices[i] <= 100){
        prices[i] = prices[i] - prices[i] * 0.1
        console.log(prices[i])
    }
    else{
        console.log(prices[i])
    }
}
console.log(prices)
for(let i = prices.length - 1; i >= 0; i--){
    console.log(prices[i])
}



// N2
let messages = [
  "  Hello Goga  ",
  "JAVASCRIPT is fun",
  "  I LOVE CODING ",
  "React is awesome",
  "  Learn JavaScript  "
]
let count = 0
for(let i = 0; i < messages.length; i++){
    messages[i] = messages[i].trim()
    messages[i] = messages[i].toLowerCase()
    if(messages[i].includes("javascript")){
        console.log("JavaScript message found")
        count++
    }
}
for(let i = messages.length - 1; i >= 0; i--){
    if(messages[i].length > 15){
        console.log(messages[i])
    }
}
console.log(count)
console.log('   ')



// N3
let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21]
let maximum = numbers[0]
let sum = 0
let minimum = numbers[0]
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i])
        if(numbers[i] > 10 && numbers[i] < 25){
        console.log('Special number', numbers[i])
        }
    }
    else if(numbers[i] > 10 && numbers[i] < 25){
        console.log('Special number', numbers[i])
    }

    /////
    else if(maximum < numbers[i]){
        maximum = numbers[i]
    }
    else if(minimum > numbers[i]){
        minimum = numbers[i]
    }

    /////
    else{
        sum += numbers[i]
    }
}
console.log('      ')
for(let i = numbers.length - 1; i >= 0; i--){
    if(numbers[i] % 3 == 0){
        console.log(numbers[i])
    }
}



// N4
let names = [
  "  goga ",
  "NIKA",
  "  ana  ",
  "Giorgi",
  "  mariam"
]
let count1 = 0
for(let i = 0; i < names.length; i++){
    names[i] = names[i].trim()
    names[i] = names[i][0].toUpperCase() + names[i].slice(1)
    if(names[i].toLowerCase().startsWith('a')){
        count++
    }
}
for(let i = names.length - 1; i >= 0; i--){
    if(names[i] == 'goga'){
        console.log('Hello Goga!')
    }
    console.log(names[i])
}
console.log(count)



// N5
let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95]
let sum1 = 0
let failedStudents = 0
let max = scores[0]
let min = scores[0]
for(let i = 0; i < scores.length; i++){
    if(scores[i] >= 90){
        console.log('Excellent', scores[i])
        sum1+=scores[i]
    }
    else if(scores[i] >= 70 && scores[i] <= 89){
        console.log('Good', scores[i])
        sum1+=scores[i]
    }
    else if(scores[i] >= 50 && scores[i] <= 69){
        console.log('Passed', scores[i])
        sum1+=scores[i]
    }
    else if(scores[i] < 50){
        console.log('Failed', scores[i])
        sum1+=scores[i]
    }
}
// console.log(sum1)
let average = sum1 / scores.length
console.log(average)
let new1 = []
for(let i = scores.length - 1; i >= 0; i--){
    if(scores[i] > 80){
        new1.push(scores[i])
    }
}
console.log(new1)
let moreThanAvarageScoreCount = 0
for(let i = 0; i < scores.length; i++){
    if(max < scores[i]){
        max = scores[i]
    }
    else if(min > scores[i]){
        min = scores[i]
    }
}
for(let i = 0; i < scores.length; i++){
    if(scores[i] > average){
        moreThanAvarageScoreCount++
    }
}
console.log(max, min)
console.log(moreThanAvarageScoreCount)



// N6
let names1 = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"]
let count2 = 0
let scores1 = [85, 42, 96, 67, 51, 73]
for(let i = 0; i < names1.length; i++){
    names1[i] = names1[i].trim()
    names1[i]= names1[i][0].toUpperCase() + names1[i].slice(1)
    if(scores1[i] >= 90 && scores1[i] <= 100){
        console.log('Excellent', scores1[i])
    }
    else if(scores1[i] >= 75 && scores1[i] <= 89){
        console.log('Very Good', scores1[i])
    }
    else if(scores1[i] >= 60 && scores1[i] <= 74){
        console.log('Good', scores1[i])
    }
    else if(scores1[i] >= 50 && scores1[i] <= 59){
        console.log('Passed', scores1[i])
    }
    else if(scores1[i] < 50){
        console.log('Failed', scores1[i])
        count2++
    } 
}
let max1 = scores1[0]
let moreThan80Sum = 0
let sum2 = 0
for(let i = 0; i < scores1.length; i++){
    if(max1 < scores1[i]){
        max1 = scores1[i]
    }
}
for(let i = 0; i < scores1.length; i++){
    if(scores1[i] > 80){
        moreThan80Sum += scores1[i]
        sum2 += scores1[i]
    }
    else{
        sum2 += scores1[i]
    }
}
for(let i = names1.length - 1; i >= 0; i--){
    console.log(names1[i], scores1[i])
}
// console.log(names1)
console.log('Failed students:', count2)
console.log(max1, names1[scores1.indexOf(max1)])
console.log(moreThan80Sum)
console.log(sum2 / scores1.length)



// N7
let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"]

let prices1 = [2500, 1800, 80, 150, 900, 300]

let quantities = [3, 5, 20, 12, 4, 8]
let sumn = 0
let c = 0
for(let i = 0; i < products.length; i++){
    if(prices1[i] * quantities[i] > 5000){
        console.log('High sales:', products[i])
        sumn += prices1[i] * quantities[i]
    }
    else if(prices1[i] * quantities[i] >= 1000 && prices1[i] * quantities[i] < 5000){
        console.log('Medium sales:', products[i])
        sumn += prices1[i] * quantities[i]
    }
    else{
        console.log('Low sales:', products[i])
        sumn += prices1[i] * quantities[i]
    }
}
for(let i = 0; i < products.length; i++){
    if(quantities[i] > 10){
        c++
    }
}
for(let i = products.length - 1; i >= 0; i--){
    console.log(products[i], prices1[i] * quantities[i])
}
console.log(c)
console.log(sumn)