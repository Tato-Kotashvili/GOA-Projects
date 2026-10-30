// N1
console.log('                    1')
const names = ["levan", "giorgi", "nino"];

names.forEach(name => console.log("hello, " + name))























// N2
console.log('                    2')

const prices = [12, 45, 100, 5, 80, 20];

const expens = prices.filter(price => price > 20)
const withTax = expens.map(price => price * 1.2)
let total = withTax.reduce((a,c) => a + c)
console.log('with tax:',withTax)
console.log('total:',total);




















// N3
console.log('                    3')

const scores = [65, 80, 42, 95, 70]

let pass = scores.every(score => score > 40)
let Top = scores.some(score => score >= 90)
const failedInd = scores.findIndex(score => score < 50)

console.log('did everyone pass?', pass)
console.log('more than 90p?', Top)
console.log('failed?(index)', failedInd)
