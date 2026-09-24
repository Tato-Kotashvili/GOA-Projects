// N1
let sayHello = () => {
    return "Hello, student!"
}
let greeting = sayHello()
console.log(greeting)



// N2
function add(a, b) {
    return a + b;
}
let calculate = add;
console.log(calculate(1,2))



// N3
let multiply = (a,b) => {
    return a * b
}
let subtract = (a,b) => {
    return a - b
}
let operation = subtract
console.log(operation(5,4))



// N4
let add1 = function(a,b) {
    return a + b
}
let subtract1 = function(a,b) {
    return a - b
}
let multiply1 = function(a,b) {
    return a * b
}
let operation1 = multiply1
console.log(operation1(20,5))



// N5
function calculate2(a, b, operation2) {
    return operation2(a, b)
}
function add2(a, b) {
    return a + b
}
function multiply2(a, b) {
    return a * b
}
console.log(calculate2(5, 3, add2))
console.log(calculate2(5, 3, multiply2))



// N6
function double(number) {
    return number * 2
}
function square(number) {
    return number ** 2
}
function negative(number) {
    return number > 0? -number : number
}
function processNumber(number, operation3) {
    return operation3(number)
}
console.log(processNumber(5, double))
console.log(processNumber(5, square))
console.log(processNumber(5, negative))



// N7
let passed = score => {
    return 'Student passed'
}
let failed = score => {
    return 'Student failed'
}
function showResult(score, resultFunction) {
    return resultFunction(score)
}
console.log(showResult(90, passed))
console.log(showResult(40, failed))



// N8
let price = 200
function discount(price) {
    return price - price * 0.2
}
function tax(price) {
    return price + price * 0.18
}
function shipping(price) {
    return price + price * 0.3
}
function processPrice(price, operation4) {
    return operation4(price)
}
console.log(processPrice(price, discount))
console.log(processPrice(price, tax))
console.log(processPrice(price, shipping))



// N9
function transform(number, operation5) {
    return operation5(number)
}
function double3(number) {
    return number * 2
}
function square3(number) {
    return number ** 2
}
function addTen(number) {
    return number + 10
}
function half(number) {
    return number / 2
}
console.log(transform(20, double3))
console.log(transform(20, square3))
console.log(transform(20, addTen))
console.log(transform(20, half))