// N1
function editProducts(products) {
    products.unshift('Phone')
    products.push('Headphones')
    products.pop()
    products.splice(2,1,'Webcam')
    return products
}
console.log(editProducts(["Laptop", "Mouse", "Keyboard", "Monitor"]))



// N2
function organizeNumbers(numbers) {
    let n1 = numbers.slice(0,4)
    let n2 = numbers.slice(4)
    n2.unshift(100)
    n1.push(5)
    return n1.concat(n2)
}
console.log(organizeNumbers([10, 20, 30, 40, 50, 60, 70, 80]))



// N3
let studentManager = students => {
    students.shift()
    students.unshift('Mariam')
    students.push('Dato')
    students.splice(3,1,'Gabrieli')
    return students.slice(0,4)
}
console.log(studentManager(["Giorgi", "Nika", "Ana", "Luka", "Saba"]))



// N4
let shoppingCart = cart => {
    cart.unshift('Water')
    cart.push('Chocolate')
    cart.shift()
    cart.splice(2,1,'Yogurt')
    return cart.slice(0,4)
}
console.log(shoppingCart(["Bread", "Milk", "Cheese", "Apple", "Juice"]))



// N5
let finalList = function(numbers) {
    !Array.isArray(numbers)? 'Not an array':
    numbers.shift()
    numbers.unshift(100)
    numbers.pop()
    numbers.push(200)
    numbers.splice(3,0,300)
    return numbers.slice(0)
}
console.log(finalList([15, 25, 35, 45, 55, 65]))



// N6
let students = [
    ["Giorgi", 18],
    ["Nika", 20],
    ["Luka", 17],
    ["Saba", 19]
]
function getStudent(students){
    return [students[0][0], students[1][1], students[2].toSpliced(1,1,18)]
}
console.log(getStudent(students))



// N7
let products = [
    ["Laptop", 2500],
    ["Phone", 1500],
    ["Mouse", 80],
    ["Keyboard", 120]
]
function updateProducts(products){
    products[0].splice(1,1,2300)
    products[2].splice(1,1,100)
    products.splice(2,0,["Tablet", 900])
    products.pop()
    return products
}
console.log(updateProducts(products))



// N8 ????
let store = [
    [
        "Electronics",
        [
            ["Laptop", 2500, ["Black", "Silver"]],
            ["Phone", 1500, ["Black", "White"]],
            ["Tablet", 900, ["Gray", "Blue"]]
        ]
    ],

    [
        "Clothes",
        [
            ["T-Shirt", 80, ["Red", "Black", "White"]],
            ["Jeans", 150, ["Blue", "Black"]],
            ["Jacket", 300, ["Black", "Brown"]]
        ]
    ],

    [
        "Shoes",
        [
            ["Nike", 400, ["Black", "White"]],
            ["Adidas", 350, ["White", "Blue"]],
            ["Puma", 250, ["Black", "Red"]]
        ]
    ]
]
function manageStore(store) {
    store[0][1][2][1] = 1000
    store[0][1][0][2].push('White')
    store[1][1][0][2].splice(2,1,'Green')
    store[1][1][1][2].pop()
    store[2][1][0][2].unshift('Red')
    store[2][1][2][2].splice(1,1,'Green')
    store[2][1].push(["New Balance", 450, ["Gray", "Black"]])
    store[1][1].splice(2,1)
    store.slice(0,1)
    store[2][1].concat([["Reebok", 280, ["Black", "White"]]])
    return [['Phone', 1500,store[0][1][1][2][1]],]
}
console.log(manageStore(store))





// N9
for(let i = 1; i < 10; i++){
    console.log(i)
}



// N10
for(let i = 2; i < 20; i+=2){
    console.log(i)
}



// N11
let sum = 0
for(let i = 1; i < 100; i++){
    sum+=i
}
console.log(sum)



// N14
for(let i = 0; i < 20; i++){
    console.log('tato')
}



// N15
for(let i = 20; i < 50; i+=5){
    console.log(i)
}



// N16
for(let i = 1; i < 11; i++){
    console.log(i, 'tato')
}