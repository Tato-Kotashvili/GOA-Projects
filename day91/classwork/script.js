// N1
let age = 0
if(age > 0) {
    console.log('positive')
}
else if (age < 0) {
    console.log('negative')
}
else {
    console.log('zero')
}
// N2
let name = 'goga'
if (name == 'tato') {
    console.log('we have same name')
}
else {
    console.log('we do not have same name')
}
// N3
let x = 4
if(x > 0 && x % 2 == 0) {
    console.log('positive and even')
}
else {
    console.log('other number')
}
// N4
let name1 = 'akaki'
if(name1.startsWith('g') || name1 == 'levani') {
    console.log('good name')
}
else if (name1.startsWith('a') && name1 == 'akaki') {
    console.log('excellent name')
}
else {
    console.log('other name')
}