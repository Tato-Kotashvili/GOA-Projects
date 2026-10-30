// N1
console.log('                   1')

let user = {
    username: "Shadow",
    age: 19,
    email: "shadow@gmail.com",
    city: "Tbilisi",
    status: "active"
};
console.log(user.username)
console.log(user.age)
console.log(user.city)
user.username = "DarkKnight"
user.age = 21
user.phone = "555123456"
delete user.email
user.isVerified  = true
user.status  = true
console.log(user)

// N2
console.log('                   2')

let player = {
    name: "Dragon",
    health: 100,
    energy: 80,
    level: 5,
    weapon: "Sword",
    armor: "Basic"
}
console.log(player.name)
console.log(player.health)
console.log(player.weapon)
player.health = 65
player.weapon = "Bow"
player.damage = 40
player.magic = true
delete player.armor
player.level = 6
player.rank = "Gold"
delete player.energy
console.log(player)


// N3
console.log('                   3')

let product = {
    title: "Gaming Laptop",
    price: 2500,
    brand: "ASUS",
    stock: 12,
    color: "Black",
    category: "Electronics",
    discount: false
};
console.log(product.title)
console.log(product.price)
console.log(product.stock)
product.price = 2800
product.stock = 8
product.rating = 4.8
product.warranty = "2 years"
delete product.color
product.discount = true
delete product.category
product.isAvailable = true
console.log(product.price)
console.log(product.brand)
console.log(product.rating)
console.log(product.isAvailable)

// N4
console.log('                   4')

let movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    duration: 169,
    language: "English"
}
console.log(movie.title)
console.log(movie.director)
console.log(movie.year)
movie.year = 9.0
movie.duration = 170
movie.genre = "Science Fiction"
movie.country = "USA"
movie.availableOnPlatform = true
delete movie.language
delete movie.year
movie.releaseYear = 2014
console.log(movie)

// N5
console.log('                   5')

let computer = {
    brand: "Lenovo",
    model: "Legion 5",
    ram: 16,
    storage: 512,
    processor: "Intel i5",
    graphicsCard: "RTX 3060",
    price: 3200,
    isGaming: true
};
console.log(computer.brand)
console.log(computer.model)
console.log(computer.price)
computer.ram = 32
computer.storage = 1024
computer.processor = "Intel i7"
computer.screenSize = 15.6
computer.hasWarranty = true
delete computer.graphicsCard
delete computer.isGaming
computer.price = 3500
computer.operatingSystem = "Windows 11"
console.log(computer.ram)
console.log(computer.storage)
console.log(computer.processor)
console.log(computer.operatingSystem)
console.log(computer)

// N6
console.log('                   6')

let game = {
    playerName: "Shadow",
    level: 12,
    health: 85,
    coins: 450,
    weapon: "Sword",
    armor: "Steel",
    isAlive: true,
    rank: "Silver"
}
console.log(game["playerName"])
console.log(game["health"])
console.log(game["rank"])
game["level"] = 15
game.coins = 700
game["weapon"] = "Dragon Sword"
game["magicPower"] = 90
game.pet = "Wolf"
delete game["armor"]
delete game.isAlive
game.achievements = 5
game["rank"] = "Gold"
console.log(game)

// N7
console.log('                   7')

let account = {
    username: "DarkKnight",
    password: "abc12345",
    followers: 2500,
    following: 430,
    posts: 85,
    verified: false,
    email: "dark@gmail.com",
    country: "Georgia",
    theme: "dark",
    notifications: true,
    accountType: "personal"
}
console.log(account["username"])
console.log(account["followers"])
console.log(account["email"])
console.log(account["accountType"])
account["username"] = "NightWolf"
account["password"] = "secure9876"
account.followers = 5000
account["following "] = 600
account["likes"] = 12000
account["bio"] = "JavaScript Developer"
account["isPrivate"] = false
delete account["country"]
delete account.notifications
account["verified"] = true
account["theme"] = "light"
delete account["accountType"]
account["website"] = "mywebsite.com"
console.log(account["username"])
console.log(account["followers"])
console.log(account["likes"])
console.log(account["bio"])
console.log(account["isPrivate "])
console.log(account["website"])
console.log(account)


console.log(console.timeEnd(60))