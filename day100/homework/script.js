// N1
let number = 100
// for(let i = 1; i <= number; i++){
//     console.log(i)
// }
let c = 0
for(let i = 1; i <= number; i++){
    if(i % 3 == 0){
        console.log(i)
        c++
    }
}
console.log('3ის ჯერადები:', c)



// N2
const numbers = [-5, 10, -2, 8, 0, 15, -7]
let i = 0
let pos = 0
let neg = 0
let zer = 0
while(i < numbers.length){
    if(numbers[i] > 0){
        pos++
    }
    else if(numbers[i] < 0){
        neg++
    }
    else{
        zer++
    }
    i++
}
console.log('positive:', pos)
console.log('negative:', neg)
console.log('zeros:', zer)



// N4
let j = 1
do{
    console.log(j);
    j++;
}while(j < 10) //მხოლოდ ერთხელ შესრულდა რადგან თავიდანვე გამოაქვს j = 1 და შემდეგ ამოწმებს



// N5
function analyzeNumbers(nums){
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    return sum
}
console.log(analyzeNumbers([1,2,3,4,5]))



// N6
const prices = [100, 250, 80, 400, 150]
function calculateDiscount(disc){
    let off = []
    for(let i = 0; i < prices.length; i++){
        off.push(prices[i] - prices[i] * disc/100)
    }
    return off
}
console.log(calculateDiscount(20))



// N7
function findDivisors(num){
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            console.log('divisor:', i)
        }
    }
}
findDivisors(100)



// N8
function countVowels(st){
    let vows = 'aeiou'
    let count = 0
    st = st.toLowerCase()
    for(let i = 0; i < st.length; i++){
        if(vows.includes(st[i])){
            count++
        }
    }
    return count
}
console.log(countVowels('GoGA'))



// N9
const numbers1 = [4, 8, 12, 25, 30, 40, 50]
let x = 0
while(x < numbers1.length){
    if(numbers1[x] > 20){
        console.log('more than 20:', numbers1[x])
        break
    }
    x++
}



// N10
let calculateSum = n => {
    let sumn = 0
    let y = 1
    do{
        sumn += y;
        y++;
    }
    while(y <= n)
    return sumn
}
let sumn = 0
console.log('sum:', calculateSum(10))
console.log(sumn)



// N11
const text = "JavaScript is fun and JavaScript is powerful"
function analyzeText(){
    let spaceCount = 0
    let a = 0
    for(let i = 0; i < text.length; i++){
        if(text[i] == ' '){
            spaceCount++
        }
        if(text[i] == 'a'){
            a++
        }
        if('aeiou'.includes(text[i].toLowerCase())){
            console.log('symbol is a vowel:    ', text[i])
        }
    }
    for(let i = text.length - 1; i >= 0; i--){
        console.log(text[i])
    }
    console.log('how many spaces?',spaceCount)
    console.log('a count:', a)
}
analyzeText()



// N12
let numberGame = function(sec){
    let guess = 1
    let loopCount = 0
    while(guess < sec){
        guess++
        loopCount++
        if(guess == sec){
            break
        }
    }
    return 'You found it: ' + guess + '   ' + 'Loop count: ' + loopCount
}
console.log(numberGame(50))



// N13
let three = 0
let five = 0
let threefive = 0
let sum = 0
let biggestSeven
for(let i = 1; i <= 500; i++){
    if(i % 5 == 0 && i % 3 == 0){
        threefive++
    }
    else if(i % 5 == 0){
        five++
    }
    else if(i % 3 == 0){
        three++
    }
    else if(i % 7 == 0){
        biggestSeven = i
    }
    sum++
}
console.log('3ის ჯერადი:', three)
console.log('5ის ჯერადი:', five)
console.log('sum:', sum)
console.log('3ისა და 5ის ჯერადი:', threefive)
console.log('უდიდესი 7ის ჯერადი:', biggestSeven)



// N14
let number1 = 58374629
let len = String(number1).length
let even = 0
let odd = 0
let sumnn = 0
let biggest = String(number1)[0]
let smallest = String(number1)[0]
let moreThan5 = 0
for(let i = 0; i < String(number1).length; i++){
    if(String(number1)[i] % 2 == 0){
        even++
    }
    else if(String(number1)[i] % 2 != 0){
        odd++
    }
    if(biggest < String(number1)[i]){
        biggest = String(number1)[i]
    }
    if(smallest > String(number1)[i]){
        smallest = String(number1)[i]
    }
    if(String(number1)[i] > 5){
        moreThan5++
    }
    sumnn += Number(String(number1)[i])
}
console.log('length:', len)
console.log('biggest:', biggest)
console.log('sum:', sumnn)
console.log('smallest:', smallest)
console.log('more than 5:', moreThan5)
console.log('odd count:', odd)
console.log('even count:', even)



// N15
let numbers2 = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5]
let sum1 = 0
let breakIndex = 0
for(let i = 0; i < numbers2.length; i++){
    if(numbers2[i] % 2 != 0){
        continue
        
    }
    if(numbers2[i] > 50){
        breakIndex = i
        break
    }
    
}
for(let i = breakIndex; i < numbers2.length; i++){
    if(numbers2[i] % 2 == 0){
        console.log(numbers2[i])
    }
}
console.log("ჯამი:", sum1)
console.log(breakIndex)