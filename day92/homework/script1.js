// N1
let score = 87
score >= 0 && score <= 39 ? console.log('Failed'):
score >= 40 && score <= 59 ? console.log('Passed'):
score >= 60 && score <= 74 ? console.log('Good'):
score >= 75 && score <= 89 ? console.log('Very good'):
score >= 90 && score <= 100 ? console.log('Excellent'):
console.log('invalid score')
// N2
let age = 20
let isStudent = true
age < 18 ? console.log('Minor'):
age >= 18 && isStudent && age < 65 ? console.log('Adult Student'):
age >= 18 && !isStudent && age < 65 ? console.log('Adult'):
age >= 65 ? console.log('Senior'):
console.log('invalid')
// N3
let number = -14
number > 0 ? console.log('Positive'):
number < 0 ? console.log('Negative'):
console.log('zero')
// N4
let username = 'adminGoga'
switch(true) {
    case !username: 
        console.log('Username is empty')
        break
    case username.startsWith('admin'):
        console.log('Admin')
        break
    case username.startsWith('user'):
        console.log('User')
        break
    default:
        console.log('Unknown user')
        break
}
// N5
let temperature = 28
temperature < 0 ? console.log('Freezing'):
temperature >= 0 && temperature <= 10 ? console.log('Cold'):
temperature >= 11 && temperature <= 20 ? console.log('Cool'):
temperature >= 21 && temperature <= 30 ? console.log('Warm'):
temperature >= 31 ? console.log('Hot'):
console.log('invalid')
// N6
let a = 45
let b = 78
let c = 32
a > b && a > c ? console.log('a'):
a < b && b > c ? console.log('b'):
c > a && b < c ? console.log('c'):
console.log('equals')
// N7
let day = 4
switch(day) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('Ivalid day')
        break
}
// N8
let grade = 'B'
switch(grade) {
    case 'A':
        console.log("Excellent")
        break
    case 'B':
        console.log("Very Good")
        break
    case 'C':
        console.log("Good")
        break
    case 'D':
        console.log("Passed")
        break
    case 'F':
        console.log("Failed")
        break
    default:
        console.log('Invalid grade')
        break
}
// N10
let a1 = 20
let b1 = 5
let operator = '*'
switch(operator) {
    case '+':
        console.log(a1 + b1)
        break
    case '-':
        console.log(a1-b1)
        break
    case '*':
        console.log(a1 * b1)
        break
    case '/':
        console.log(a1 / b1)
        break
    case '%':
        console.log(a1 % b1)
        break
    default:
        console.log('Invalid operator')
        break
}
// N11
let action = 'withdraw'
let balance = 500
let amount = 200
switch(action) {
    case 'balance':
        console.log(balance)
        break
    case 'deposit':
        console.log(balance + amount)
        break
    case 'withdraw':
        balance - amount >= 0 ? console.log(balance - amount):
        console.log('Insufficient balance')
        break
    case 'exit':
        console.log('Goodbye!')
        break
    default:
        console.log('invalid action') 
}