// N1
let text = 'tato'
console.log(typeof text)
text = true
console.log(typeof text)
text = 10
console.log(typeof text)
// N2
let age = 15
let name = 'tato'
console.log(`my name is ${name} and my age is ${age}`)
console.log('my name is ' + name + ' and my age is ' + age) // age გახდა სტრინგ ტიპის
// N3
let name1 = 'tato'
if(name1 == 'saba') {
    console.log("this variable is holding saba")
}
else {
    console.log("this variable holding other name")
}