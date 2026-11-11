// N1
console.log('                    1')

let employees = [
    { name: "Giorgi", salary: 2500, department: "IT" },
    { name: "Nino", salary: 1800, department: "HR" },
    { name: "David", salary: 3200, department: "IT" },
    { name: "Maka", salary: 1500, department: "Sales" },
    { name: "Saba", salary: 2800, department: "Sales" }
];
let salesCount = 0
let salarySum = 0
for(let i in employees){
    console.log(employees[i].name, employees[i].salary)
    if(employees[i].department == 'IT'){
        console.log(`${employees[i].name} - IT department`)
    }
    if(employees[i].salary > 2000){
        console.log(`${employees[i].name} has a salary worth more than 2000`)
    }
    if(employees[i].department == 'Sales'){
        salesCount++
    }
    salarySum += employees[i].salary
}
console.log('salary sum:', salarySum)
console.log('employee count on sales:',salesCount)




// N2
console.log('                    2')

let books = [
    { title: "Harry Potter", price: 35, pages: 320 },
    { title: "The Hobbit", price: 28, pages: 280 },
    { title: "Atomic Habits", price: 45, pages: 250 },
    { title: "The Alchemist", price: 20, pages: 190 },
    { title: "Clean Code", price: 55, pages: 450 }
];
let expensiveBooks = 0
let bookSum = 0
let longBooks = []
for(let i of books){
    console.log('book title:',i.title)
    if(i.price < 30){
        console.log('cheaper books:', i.title)
    }
    if(i.pages > 300){
        console.log('longer books:', i.title)
        longBooks.push(i.title)
    }
    if(i.price > 40){
        expensiveBooks++
    }
    bookSum += i.price
}
console.log('expensive books:', expensiveBooks)
console.log('total price:',bookSum)
console.log('longer book list:',longBooks)




// N3
console.log('                    3')

let players = [
    { name: "Sandro", sport: "Football", goals: 12 },
    { name: "Elene", sport: "Tennis", goals: 8 },
    { name: "Lasha", sport: "Football", goals: 19 },
    { name: "Tako", sport: "Basketball", goals: 15 },
    { name: "Data", sport: "Football", goals: 6 }
];
let fbPlayers = 0
let totalGoals = 0
let topPlayers = []
for(let i of players){
    console.log(i.name,'-',i.sport)
    if(i.sport == "Football"){
        console.log('Fb players:',i.name)
    }
    if(i.goals >= 10){
        console.log('most goals:', i.name)
        topPlayers.unshift(i.name)
    }
    if(i.sport == 'Football'){
        fbPlayers++
    }
    totalGoals += i.goals
}
console.log('football players:',fbPlayers)
console.log('total goals:',totalGoals)
console.log('top players:',topPlayers)





// N4
console.log('                    4')

let orders = [
    { id: 101, customer: "Nika", total: 250, status: "delivered" },
    { id: 102, customer: "Ana", total: 80, status: "pending" },
    { id: 103, customer: "Gio", total: 420, status: "delivered" },
    { id: 104, customer: "Mariam", total: 150, status: "cancelled" },
    { id: 105, customer: "Luka", total: 310, status: "pending" }
];
let pending = 0
let totalSum = 0
let expensiveOrders = []
for(let i of orders){
    console.log(i.id,'-',i.customer)
    console.log(i.status == 'delivered' ? i.id + ' : delivered' : i.id + ' : not delivered')
    if(i.total > 200 && i.status == 'delivered'){
        console.log(i.id + ' - expensive')
        expensiveOrders.push(i.id)
    }
    if(i.status == 'pending'){
        pending++
    }
    totalSum += i.total
}
console.log('pending:', pending)
console.log('total sum:', totalSum)
console.log('expensive orders:',expensiveOrders)



// N5
console.log('                    5')

let products = [
    { name: "Laptop", price: 2500, stock: 8, rating: 4.8 },
    { name: "Mouse", price: 80, stock: 25, rating: 4.2 },
    { name: "Keyboard", price: 180, stock: 12, rating: 4.7 },
    { name: "Monitor", price: 900, stock: 0, rating: 4.9 },
    { name: "Headphones", price: 350, stock: 15, rating: 4.6 },
    { name: "Tablet", price: 1200, stock: 5, rating: 3.9 },
    { name: "Webcam", price: 220, stock: 10, rating: 4.5 }
];
let filtered = products.filter(f => f.price > 200 && f.stock >= 5 && f.rating >= 4.5)
filtered.forEach(i => console.log(`${i.name} costs ${i.price} GEL, Rating: ${i.rating}`))
console.log(filtered)