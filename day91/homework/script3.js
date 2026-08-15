let age = 20
let price = 150
let isStudent = true
if(price > 100 && isStudent === true) {
    console.log('30% discount')
}
else if(price > 100 || age < 18) {
    console.log('20% discount')
}
else if(age >= 60) {
    console.log('15% discount')
}
else {
    console.log('No discount')
}