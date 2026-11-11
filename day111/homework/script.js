// N1
console.log('                    1')

let student = {
    name: "Giorgi",
    math: 85,
    english: 92,
    physics: 74,
    chemistry: 88,
    history: 60
};
let moreThan80 = 0
let sum = 0
let scoreList = []
let lessThan70 = 0
for(let i in Object.keys(student)){
    console.log(Object.keys(student)[i],Object.values(student)[i])
    if(typeof Object.values(student)[i] === 'number'){
        scoreList.push(Object.values(student)[i])
        sum += Object.values(student)[i]
        if(Object.values(student)[i] >= 80){
            moreThan80++
        }
        else if(Object.values(student)[i] < 70){
            lessThan70++
        }
    }
}
console.log(`minimum: ${Math.min(...scoreList)} in ${Object.keys(student)[scoreList.indexOf(Math.min(...scoreList)) + 1]}`)
console.log('sum:',sum)
console.log('less than 70:', lessThan70)
console.log('more than 80:', moreThan80)



// N2
console.log('                    2')

let products = {
    laptop: 2500,
    phone: 1800,
    headphones: 250,
    keyboard: 150,
    monitor: 900,
    mouse: 80
};
let count = 0
let expensiveProducts = []
let productssum = 0
for(let i in Object.keys(products)){
    console.log(Object.keys(products)[i], Object.values(products)[i])
    if(Object.values(products)[i] > 500){
        count++
        expensiveProducts.push([Object.keys(products)[i], Object.values(products)[i]])
    }
    productssum += Object.values(products)[i]
}
console.log('expensive:',expensiveProducts)
console.log(`the most expensive: ${Object.keys(products)[Object.values(products).indexOf(Math.max(...Object.values(products)))]} - ${Math.max(...Object.values(products))}`)




// N3
console.log('                    3')

let user = {
    username: "Goga123",
    age: 19,
    city: "Tbilisi",
    score: 450,
    active: true,
    gamesPlayed: 35
};
let countOfNums = 0
let lengthMoreThan5 = 0
let summ = 0
let numericInfo = {
}
for(let i in Object.keys(user)){
    console.log(Object.keys(user)[i], Object.values(user)[i])
    if(typeof Object.values(user)[i] === 'number'){
        countOfNums++
        numericInfo[Object.keys(user)[i]] = Object.values(user)[i]
        summ += Object.values(user)[i]
    }
    if(Object.keys(user)[i].length > 5){
        lengthMoreThan5++
    }
}
console.log('count of nums:',countOfNums)
console.log('length More Than 5:',lengthMoreThan5)
console.log('sum:',summ)
console.log('numbers',numericInfo)


// N4
console.log('                    4')

let exam = {
    Nika: 95,
    Ana: 68,
    Giorgi: 82,
    Mariam: 45,
    Luka: 73,
    Saba: 30,
    Elene: 88
};
let passed = 0
let failed = 0
for(let i in exam){
    let score = exam[i]
    console.log(i, score)
    if(score >= 70){
        console.log(`${i} passed`)
        passed++
    }
    else{
        console.log(`${i} failed`)
        failed++
    }
}
console.log(`${Object.keys(exam)[Object.values(exam).indexOf(Math.max(...Object.values(exam)))]} got the highest score - ${Math.max(...Object.values(exam))}`)
console.log('average:',Math.ceil(Object.values(exam).reduce((a,c) => a+c)/Object.values(exam).length))
console.log('passed:',passed)
console.log('failed:', failed)





// N5
console.log('                    5')

let studen = {
    math: 85,
    english: 92,
    physics: 67,
    chemistry: 78,
    history: 55,
    biology: 90
};
let subjectLi = Object.keys(studen)
let scoreLi = Object.values(studen)
let more80 = 0
let scoresum = 0
console.log('num of subjects:',subjectLi.length)
for(let i of Object.values(studen)){
    if(i >= 80){
        more80++
    }
    scoresum+=i
}
console.log(`${Object.keys(studen)[Object.values(studen).indexOf(Math.max(...Object.values(studen)))]} - ${Math.max(...Object.values(studen))}`)






// N6
console.log('                    6')

let employees = {
    Nika: 2500,
    Ana: 3200,
    Luka: 1800,
    Mariam: 4000,
    Saba: 2200,
    Elene: 3500
};
let employee = Object.keys(employees)
let salary = Object.values(employees)
let bigSalary = salary.filter(f => f > 3000).length
console.log('employee count:',employee.length)
console.log('Min salary:',Math.min(...salary))
console.log('average salary:', Math.ceil(salary.reduce((a,c) => a+c)/salary.length))