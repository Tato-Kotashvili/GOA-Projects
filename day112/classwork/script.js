// let products = [
//     { name: "Laptop", price: 2500, category: "Electronics", inStock: true },
//     { name: "Phone", price: 1800, category: "Electronics", inStock: false },
//     { name: "Book", price: 40, category: "Education", inStock: true },
//     { name: "Headphones", price: 150, category: "Electronics", inStock: true },
//     { name: "Notebook", price: 15, category: "Education", inStock: false }
// ];
// let sum = 0
// products.forEach(i => {
//     // N1
//     console.log(i.name)
//     // N2
//     console.log(`${i.name} - ${i.price}`)
//     // N3
//     if(i.inStock){
//         console.log(`${i.name} in stock`)
//     }
//     // N4
//     if(i.price > 1000){
//         console.log(`${i.name}'s price is more than 1000`)
//     }
//     // N5
//     if(i.category == 'Education'){
//         console.log(`${i.name}'s category is education`)
//     }
//     // N6
//     sum += i.price
// })
// console.log(sum)



let students = [
    { name: "Nika", age: 17, score: 92, attendance: 95 },
    { name: "Mariam", age: 19, score: 68, attendance: 80 },
    { name: "Giorgi", age: 18, score: 85, attendance: 90 },
    { name: "Ana", age: 16, score: 45, attendance: 60 },
    { name: "Luka", age: 20, score: 78, attendance: 88 },
    { name: "Saba", age: 17, score: 96, attendance: 98 },
    { name: "Elene", age: 19, score: 55, attendance: 75 },
    { name: "Data", age: 18, score: 89, attendance: 92 }
];
// N1
let newList = students.filter(f => f.score > 80 && f.attendance > 90)
newList.forEach(i => {
    console.log(`სახელი - ${i.name} \n ასაკი - ${i.age} \n ქულა - ${i.score} \n დასწრება - ${i.attendance}`)
})
// N3
newList.forEach(i => {
    console.log(`${i.name} - Age: ${i.age}, Score: ${i.score}, Attendance: ${i.attendance}%`)
})
// N4
console.log('count of students who passed:',newList.length)