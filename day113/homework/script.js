// N1
console.log('                    1')

let students = [
    { name: "Nika", age: 17, score: 85, active: true },
    { name: "Ana", age: 19, score: 45, active: false },
    { name: "Giorgi", age: 21, score: 92, active: true },
    { name: "Mariam", age: 18, score: 67, active: true },
    { name: "Luka", age: 16, score: 38, active: false },
    { name: "Saba", age: 20, score: 74, active: true }
]

let filtered = students.filter(f => f.active === true)
let mapped = students.map(m => m.score < 50 ? `${m.name} Failed` : `${m.name} Passed`)
let index = students.findIndex(f => f.name === "Mariam")
let some = students.some(s => s.score > 90)
let every = students.every(e => e.age >= 16)

students.forEach(i => {
    console.log(`${i.name} --> ${i.score}`)
})
console.log(filtered)
console.log(mapped)
console.log(index)
console.log(some)
console.log(every)



// N2
console.log('                    2')

let products = [
    { name: "Laptop", price: 2500, stock: 5, category: "Electronics" },
    { name: "Phone", price: 1800, stock: 0, category: "Electronics" },
    { name: "Book", price: 40, stock: 12, category: "Education" },
    { name: "Headphones", price: 250, stock: 8, category: "Electronics" },
    { name: "Notebook", price: 15, stock: 0, category: "Education" },
    { name: "Monitor", price: 900, stock: 3, category: "Electronics" }
]

let filtered2 = products.filter(f => f.stock >= 1)
let mappped2 = products.map(m => m.price += 100)
let inde = products.findIndex(i => i.name = "Headphones")
let som = products.some(s => s.price > 2000)
let ever = products.every(e => e.stock >= 1)

products.forEach(i => {
    console.log(`${i.name} - ${i.price} GEL`)
})




// N3
console.log('                    3')

let characters = [
    { name: "Shadow", health: 85, level: 10, alive: true },
    { name: "Dragon", health: 0, level: 15, alive: false },
    { name: "Knight", health: 60, level: 7, alive: true },
    { name: "Wizard", health: 100, level: 20, alive: true },
    { name: "Hunter", health: 25, level: 5, alive: true },
    { name: "Ghost", health: 0, level: 12, alive: false }
]

let filter3 = characters.filter(f => f.alive === true)
let mapped3 = characters.map(m => {
    m.health += 20
    return `${m.name} - ${m.health}`
})

let index3 = characters.findIndex(i => i.name === "Wizard")
let so = characters.some(e => e.level > 18)
let evey = characters.every(e => e.alive === true)

characters.forEach(i => {
    console.log(`${i.name} - ${i.health} hp`)
})
console.log(filter3)
console.log(mapped3)
console.log(index)
console.log(some)
console.log(every)





// N4
console.log('                    4')

let employees = [
    { name: "Gio", salary: 2500, experience: 3, department: "IT" },
    { name: "Nino", salary: 1800, experience: 1, department: "HR" },
    { name: "Luka", salary: 3200, experience: 5, department: "IT" },
    { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
    { name: "Saba", salary: 4000, experience: 7, department: "IT" },
    { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
]

let filte = employees.filter(f => f.department === "IT")
let mapp = employees.filter(m => {
    if(m.experience >= 5){
        m.salary += 500
    }
    else{
        m.salary += 200
    }
    console.log(`${m.name} --> ${m.salary}`)
})

let ind = employees.findIndex(i => i.salary >= 4000)
let s = employees.some(s => s.experience > 6)
let ev = employees.every(e => e.salary > 1000)

employees.forEach(i => {
    console.log(`${i.name} --> ${i.salary}`) 
})
console.log(filte) 
console.log(mapp)
console.log(ind)
console.log(s)
console.log(ev)




// N5
console.log('                    5')

let orders = [
    { id: 101, customer: "Nika", total: 350, delivered: true },
    { id: 102, customer: "Ana", total: 120, delivered: false },
    { id: 103, customer: "Gio", total: 750, delivered: true },
    { id: 104, customer: "Mariam", total: 90, delivered: false },
    { id: 105, customer: "Luka", total: 500, delivered: true },
    { id: 106, customer: "Saba", total: 220, delivered: false }
]

let filt = orders.filter(f => f.delivered === true)
let map = orders.map(m => m.total += 50)
let i = orders.findIndex(i => i.id === 104)
let soo = orders.some(s => s.total > 700)
let e = orders.every(e => e.total > 100)

orders.forEach(i => {
    console.log(`${i.id} --> ${i.customer}`)
})




// N6
console.log('                    6')

let movies = [
    { title: "Avatar", rating: 8.5, year: 2009, watched: true },
    { title: "Titanic", rating: 7.9, year: 1997, watched: true },
    { title: "Joker", rating: 8.4, year: 2019, watched: false },
    { title: "Inception", rating: 9.0, year: 2010, watched: true },
    { title: "Venom", rating: 6.5, year: 2021, watched: false },
    { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
]

let fil = movies.filter(f => f.rating > 8)
let ma = movies.map(m => `${m.title} - ${m.rating}`)
let indd = movies.findIndex(i => i.title === "Interstellar")
let somm = movies.some(s => s.watched === false)
let eve = movies.every(e => e.rating > 6)

movies.forEach(i => {
    console.log(`${i.title} --> ${i.year}`)    
})
console.log(fil)
console.log(ma)
console.log(indd)
console.log(somm)
console.log(eve)