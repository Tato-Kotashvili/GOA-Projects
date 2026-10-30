// N1
const scores = [45, 80, 25, 90, 60, 35, 100, 70];
let sum = scores.reduce((acc,curr) => {
    console.log(acc, curr)
    if(curr >= 50){
        return acc + curr
    }
    return acc
}, 0)
console.log('sum:',sum)