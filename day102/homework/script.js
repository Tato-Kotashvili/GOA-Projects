// N1
console.log('////    1')
function processNumber(number,operation){
    return operation(number)
}
function double(number){
    return number * 2
}
function triple(number){
    return number * 3
}
function square(number){
    return number ** 2
}
console.log(processNumber(5, double))
console.log(processNumber(5, triple))
console.log(processNumber(5, square))
console.log('////    2')



// N2
let processText = (text, action) => {
    return action(text)
}
function makeUpperCase(text) {
    return text.toUpperCase()
}
function makeLowerCase(text) {
    return text.toLowerCase()
}
function getLength(text) {
    return text.length
}
console.log(processText("JavaScript", makeUpperCase))
console.log(processText("JavaScript", makeLowerCase))
console.log(processText("JavaScript", getLength))
console.log('////    3')


// N3
let calculate = function(a, b, operation) {
    return operation(a, b)
}
function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b    
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}
console.log(calculate(10, 5, add))
console.log(calculate(10, 5, subtract))
console.log(calculate(10, 5, multiply))
console.log(calculate(10, 5, divide))