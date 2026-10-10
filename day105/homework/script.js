// N1
console.log('                 1')

let prices = [25, 40, 15, 80, 100, 35]
let newPrices = prices.map(price => {
    return price + 20
})
console.log('new:',newPrices)
console.log('old:',prices)



// N2
console.log('                 2')

let scores = [45, 72, 91, 38, 64, 87]
let newScores = scores.map(score => score < 50 ? score += 10 : score)
console.log(newScores)
console.log(scores)



// N3
console.log('                 3')

let names = ["nika", "ana", "gio", "mariam", "luka"];
let newNames = names.map(name => {
    return name.toUpperCase()
})
console.log(newNames)



// N4
console.log('                 4')

let numbers = [2, 5, 7, 10, 12];
let newNumbers = numbers.map(number => number ** 2)
console.log(newNumbers)



// N5
console.log('                 5')

let numbers2 = [12, 7, 20, 15, 8, 31, 44];
numbers2.forEach(number2 => {
    if(number2 % 2 == 0){
        console.log(number2)
    }
})



// N6
console.log('                 6')

let prices2 = [100, 250, 80, 450, 120];
prices2.forEach(price2 => console.log('Product price:', price2))



// N7
console.log('                 7')

let scores2 = [95, 67, 42, 81, 55, 30];
scores2.forEach(score2 => score2 >= 80? console.log('Excellent',score2):
score2 >= 60 && score2 <= 79? console.log('Good',score2):
score2 >= 50 && score2 <= 59? console.log('Average',score2):
console.log('Failed',score2))



// N8
console.log('                 8')

let prices3 = [100, 200, 350, 80, 500];
let newPrices3 = prices3.map(price3 => price3 += 50)
newPrices3.forEach(newPrice3 => console.log('New price:', newPrice3))



// N9
console.log('                 9')

let scores3 = [45, 60, 72, 38, 90];
let newScores3 = scores3.map(score3 => score3 < 50? score3 += 15: score3 += 0)
newScores3.forEach(newScore3 => console.log('Score:', newScore3))



// N10
console.log('                 10')

let names2 = ["nika", "ana", "gio", "mariam", "luka"];
let newNames2 = names2.map(name2 => name2.toUpperCase())
newNames2.forEach(newName2 => console.log('Student:', newName2))



// N11
console.log('                 11')

let numbers3 = [12, 5, 20, 7, 30, 11, 8];
let newNumbers3 = numbers3.map(number3 => number3 % 2 == 0? number3 *= 2: number3 *= 3)
newNumbers3.forEach(newNumber3 => console.log('Result:', newNumber3))



// N12
console.log('                 12')

let prices4 = [120, 450, 80, 300, 50, 700];
let newPrices4 = prices4.map(price4 => price4 < 100? price4 += 20:
    price4 >= 100 && price4 <= 500? price4 += 50 : price4 += 100)
newPrices4.forEach((newPrice4,i) => console.log(`Old price: ${prices4[i]} -> New Price: ${newPrice4}`))



// N13
console.log('                 13')

let numbers4 = [5, 12, 25, 8, 40, 17];
let newNumbers4 = numbers4.map(number4 => number4 < 10? number4 = 'Small':
    number4 >= 10 && number4 < 20? number4 = 'Medium':
    number4 = 'Large')
newNumbers4.forEach(newNumber4 => console.log(newNumber4))



// N14
console.log('                 14')

let numbers5 = [10, 25, 4, 18, 33, 7, 40];
let newNumbers5 = numbers5.map(number5 => 
    number5 > 20? number5 -= 5:
    number5 < 20? number5 += 5:
    number5 *= 2
)
newNumbers5.forEach(newNumber5 => console.log('Number:', newNumber5))



// N15
console.log('                 15')

let nums = [5, 12, 30, 7, 21, 40, 9, 18];
let newNums = nums.map(num => {
    if(num < 10){
        num += 10
        if(num % 2 == 0){
            num += 2
        }
        else{
            num += 1
        }
    }
    else if(num >= 10 && num <= 20){
        num *= 2
        num += 2
    }
    else{
        num -= 5
        if(num % 2 == 0){
            num += 2
        }
        else{
            num += 1
        }
    }
    return num
}
)
newNums.forEach((newNum,j) => console.log(`Original number: ${nums[j]} -> Final result: ${newNum}`))