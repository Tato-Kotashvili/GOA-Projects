// N2
let checkNumber = num => num > 0? 'Positive': num < 0? 'Negative' : 'Zero'
console.log(checkNumber(4))
console.log(checkNumber(0))
console.log(checkNumber(-4))



// N3
let getGrade = function(score){
    if(score >= 90 && score <= 100) {
        return 'A'
    }
    else if(score >= 80 && score <= 89){
        return 'B'
    }
    else if(score >= 70 && score <= 79){
        return 'C'
    }
    else if(score >= 60 && score <= 69){
        return 'D'
    }
    else if(score >= 0 && score <= 59){
        return 'F'
    }
    else{
        return 'invalid score'
    }
}
console.log(getGrade(100))
console.log(getGrade(80))
console.log(getGrade(70))
console.log(getGrade(65))
console.log(getGrade(10))
console.log(getGrade(1000))



// N4
let checkWord = word => {
    word.toLowerCase().startsWith('a')?
    console.log('starts with A'):

    console.log('Does not start with A')
}
checkWord('ANDRO')
checkWord('Tato')



// N5
let analyzeNumbers = function(n1,n2,n3) {
    n1 >= n2 && n1 >= n3?
    console.log(n1):

    n2 >= n1 && n2 >= n3?
    console.log(n2):

    n3 >= n1 && n3 >= n2?
    console.log(n3):

    console.log(false)
}
analyzeNumbers(1,2,3)
analyzeNumbers(15,42,27)
analyzeNumbers(3,3,3)
analyzeNumbers(2,2,4)



// N6
let analyzeText = txt => {
    return txt.length + ' ' + txt.toUpperCase() + ' ' + txt.startsWith('Hello')
}
console.log(analyzeText('Hello world'))



// N7
let checkTotal = (price, discount) => {
    if(discount >= 50) {
        return 'Discount too high'
    }
    else if(discount < 0) {
        return 'Invalid discount'
    }
    else {
        return price - price * discount / 100
    }
}
console.log(checkTotal(200, 30))
console.log(checkTotal(100, 50))
console.log(checkTotal(200, -30))



// N8
let validatePassword = pass => {
    if(pass.length >= 8 && pass.includes('@') && pass[0] === pass[0].toUpperCase()) {
        return 'Strong password'
    }
    else {
        return 'Weak password'
    }
}
console.log(validatePassword('tato@12345'))
console.log(validatePassword('Tato@12345'))
console.log(validatePassword('Tato12345'))



// N9
let validateUser = (username, age, password) => {
    if(username && age >= 18 && password.length >= 8) {
        return 'User is valid'
    }
    else{
        return 'User is invalid'
    }
}
console.log(validateUser('', 18, '12345678'))
console.log(validateUser('tato', 20, '12345669'))
console.log(validateUser('tato', 15, '12345669'))
console.log(validateUser('tato', 21, '169'))