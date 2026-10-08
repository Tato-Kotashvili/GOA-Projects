// N1
let names = ['goga','andria','tato','levan']
names.forEach( item =>{
    if(item.length > 4){
        console.log(item)
    }
})
// N2
let nums = [41,19,53,25,31,101]
nums.forEach((num,index)=>{
    if(num % 2 != 0 && index % 2 != 0){
        console.log(num)
    }
})
// N3
let scores = [45, 78, 32, 90, 56, 84, 67]
let newScores = scores.map(score => score < 60 ? score += 10 : score += 5)
console.log(newScores)
console.log(scores)