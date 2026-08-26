// N1
function calculatePrice(price, quantity = 1){
    return price * quantity
}
console.log(calculatePrice(10, 8))
console.log(calculatePrice(20))
console.log(calculatePrice(800, 2))
// N2
function getResult(name, score = 0) {
    score >= 90 && score <= 100 ?
    console.log(name + ': Excellent'):

    score >=70 && score <= 89 ?
    console.log(name + ': Good'):

    score >= 50 && score <= 69 ?
    console.log(name + ': Passed'):

    score < 50 && score >= 0 ?
    console.log(name + ': Failed'):

    console.log('invalid score')
}
getResult('tato', 50)
getResult('tato', 75)
getResult('tato', 90)
getResult('tato', 1000)
getResult('tato')
// M4
function checkAge(name, age = 18) {
    switch(true){
        case age >= 18:
            return name + ' is adult'
            break
        case age < 18 && age > 0:
            return name + ' is minor'
            break
        default:
            return 'invalid age'
            break
    }
}
console.log(checkAge('goga', 23))
console.log(checkAge('goga', 16))
console.log(checkAge('goga'))
console.log(checkAge('goga', 'c'))
// N3
function calculateShipping(price, shipping = 10) {
    if(price >= 100) {
        return price
    }
    else {
        return price + shipping
    }    
}
console.log(calculateShipping(200, 20))
console.log(calculateShipping(90, 30))
console.log(calculateShipping(80))
// N5
function addPoints(score, points = 10) {
    return score + points
}
console.log(addPoints(100, 20))
console.log(addPoints(90))

// N6
function createMessage(name, message = 'Hello') {
    return `${message}, ${name}!`
}
console.log(createMessage('Goga', 'Welcome'))
console.log(createMessage('Goga'))
// N7
function calculateDiscount(price, discount = 10) {
    return price - discount
}
console.log(calculateDiscount(200))
console.log(calculateDiscount(200, 80))
// N8
function convertTemperature(value, type = "C") {
    switch(type) {
        case 'C':
            console.log(value * 1.8 + 32)
            break
        case 'F':
            console.log((value - 32) * 5 / 9)
            break
        default:
            console.log('invalid type')
    }
}
convertTemperature(30, 'C')
convertTemperature(30)
convertTemperature(59, 'F')
// N9
function calculateSalary(salary, bonus = 0) {
    salary < 1000 ?
    console.log(salary + bonus * 2):

    console.log(salary + bonus)
}
calculateSalary(800, 100)
calculateSalary(1500, 200)
calculateSalary(900)
// N10
function checkExam(name, score = 0) {
    switch(true) {
        case score >= 90 && score <= 100:
            console.log(`${name}: Excellent`)
            break
        case score >= 75 && score <= 89:
            console.log(`${name}: Very Good`)
            break
        case score >= 60 && score <= 74:
            console.log(`${name}: Good`)
            break
        case score >= 50 && score <= 59:
            console.log(`${name}: Passed`)
            break
        case score >= 0 && score <= 49:
            console.log(`${name}: Failed`)
            break
        default:
            console.log('invalid score')
    }
}
checkExam('tato')
checkExam('tato', 90)
checkExam('tato', 75)
checkExam('tato', 65)
checkExam('tato', 51)
checkExam('tato', -5)
// N11
function ticketPrice(age, price = 50) {
    switch(true) {
        case age < 5 && age >= 0:
            console.log(0)
            break
        case age >= 5 && age <= 12:
            console.log(price * 0.5)
            break
        case age >= 13 && age <= 59:
            console.log(price)
            break
        case age >= 60:
            console.log(price * 0.3)
    }
}
ticketPrice(4, 50)
ticketPrice(10, 50)
ticketPrice(25, 50)
ticketPrice(65, 50)
ticketPrice(20)
// N12
function analyzeNumber(number, limit = 100) {
    number < 0 ?
    console.log('Negative'):

    number === 0 ?
    console.log('Zero'):

    number > 0 && number < 100 ?
    console.log('Small postive'):

    number > 0 && number >= 100 ?
    console.log('Large positive'):

    console.log('invalid number')
}
analyzeNumber(-50, 60)
analyzeNumber(50, 70)
analyzeNumber(0)
analyzeNumber(200, 150)