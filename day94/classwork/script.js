// N1
let checkNumber = function(num) {
    num > 0 && num % 2 === 0 ?
    console.log("Positive Even"):

    num > 0 && num % 2 !== 0 ?
    console.log("Positive Odd"):

    num < 0 && num % 2 === 0 ?
    console.log("Negative Even"):

    num < 0 && num % 2 !== 0 ?
    console.log("Negative Odd"):

    console.log('Zero')
}
checkNumber(4)
checkNumber(3)
checkNumber(-1)
checkNumber(-10)



// N2
let greet = name => {
    if(name.startsWith('g')){
        return 'good name'
    }
    else{
        return 'still good name'
    }
}
console.log(greet('goga'))

// N3
let checkNum = num => num % 2 == 0? 'even': 'odd'
console.log(checkNum(4))
console.log(checkNum(-3))
