// N1
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 2500, rating: 4.8, inStock: true },
    { id: 2, name: "Phone", category: "Electronics", price: 1800, rating: 4.5, inStock: false },
    { id: 3, name: "Headphones", category: "Accessories", price: 300, rating: 4.2, inStock: true },
    { id: 4, name: "Keyboard", category: "Accessories", price: 450, rating: 3.9, inStock: true },
    { id: 5, name: "Monitor", category: "Electronics", price: 1200, rating: 4.9, inStock: false },
    { id: 6, name: "Mouse", category: "Accessories", price: 150, rating: 4.6, inStock: true },
    { id: 7, name: "Tablet", category: "Electronics", price: 900, rating: 3.7, inStock: true }
];
products.forEach(f => {
    if(f.inStock){
        console.log(`${f.name} costs ${f.price} GEL - in stock`)
    }
    else{
        console.log(`${f.name} costs ${f.price} GEL - out of stock`)
    }
})
let filtered1 = products.filter(f => f.category == 'Electronics')
let filtered2 = products.filter(f => f.price > 500 && f.rating > 4.5)
let filtered3 = products.filter(f => !f.inStock)

let mapped1 = products.map(m => `${m.name} - ${m.price} GEL`)
let mapped2 = products.map(m => m.price += 100)
let index = products.findIndex(i => i.name == 'Monitor')
let first = products.findIndex(i => i.rating < 4)
let som1 = products.some(s => s.price > 2000)
let som2 = products.some(s => !s.inStock)
let ever = products.every(e => e.price > 100)
let every = products.every(e => e.rating > 3.5)
let filt = products.filter(f => f.inStock)
let filtmap = products.map(m => `${m.name} - ${m.price} lari`)