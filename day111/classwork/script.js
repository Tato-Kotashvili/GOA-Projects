// N1
let company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    city: "Tbilisi",
    departments: 4,
    budget: 120000,
    active: true,
    projects: 8
};
let keyArray = Object.keys(company)
let valueArray = Object.values(company)
console.log(keyArray)
console.log(valueArray)
for(let i of Object.keys(company)){
    console.log(i)
}
console.log('          ')
for(let i in valueArray){
    console.log(valueArray[i])
}
let nums = valueArray.filter(f => Number(f) === f)
console.log(nums)

console.log('         ')
console.log('         ')
console.log('         ')
console.log('         ')

// N2
let company1 = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    budget: 120000,
    marketing: 15000,
    development: 45000,
    design: 12000,
    support: 8000,
    active: true
};
for(let i in company1){
    console.log(i, company1[i])
}
let filtered = Object.values(company1).filter(f => Number(f) === f)
let sum = filtered.reduce((a,c) => a+c)
console.log('sum:',sum)
let keys = Object.keys(company1)
let count = 0
for(let i=0; i < keys.length; i++){
    if(keys[i].length > 6){
        count++
    }
}
console.log('count:', count)