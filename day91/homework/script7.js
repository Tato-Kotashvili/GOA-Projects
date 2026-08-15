let age = 19
let isStudent = true
if(age < 18) {
    console.log('Minor')
}
else if(age >= 18 && isStudent === true) {
    console.log('Adult student')
}
else if(age >= 18 && isStudent === false) {
    console.log('Adult')
}
else if(!age) {
    console.log('Invalid age')
}