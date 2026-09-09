// N1
let songs = ["Song A", "Song B", "Song C"]
songs.push('Song D')
songs.push('Song E')
songs.pop()
songs.push('Song F')
console.log(songs)



// N2
let scores = [45, 67, 89, 34, 72]
scores.push(91)
scores.push(56)
console.log(scores)
console.log(scores.length)



// N3
let students = ["Nika", "Gio", "Luka", "Ana"]
students.shift()
students.unshift('Dato', 'Saba')
console.log(students)



// N4
let messages = ["Hello", "How are you?", "Goodbye"]
messages.shift()
messages.unshift('Important!')
messages.unshift("Warning!")
messages.push("See you!")
messages.pop()
console.log(messages)


// N5
let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"]
let n1 = products.slice(0,3)
let n2 = products.slice(3,6)
let n3 = products.slice(products.indexOf('Phone'),products.indexOf('Watch'))

console.log(n1)
console.log(n2)
console.log(n3)

console.log(products)



// N6
let numbers = [10, 20, 30, 40, 50, 60, 70, 80]
let x1 = numbers.slice(numbers.indexOf(30),numbers.indexOf(60) + 1)
let x2 = numbers.slice(numbers.indexOf(50),numbers.indexOf(80) + 1)

console.log(x1)
console.log(x2)
console.log(numbers)



// N7
let colors = ["red", "blue", "green", "yellow", "black"]
colors.splice(2,1)
colors.splice(2,0,'purple')
colors.splice(3,1,'orange')
console.log(colors)



// N8
let numbers2 = [5, 10, 15, 20, 25, 30]
numbers2.splice(2,2)
numbers2.splice(2,0,100,200)
numbers2.splice(5,1)
console.log(numbers2)



// N9
let fruits = ["apple", "banana", "orange", "kiwi", "mango"]
console.log(fruits.toSpliced(2,1,'watermelon'))
console.log(fruits)



// N10
let numbers3 = [10, 20, 30, 40, 50]
let spliced1 = numbers3.splice(2,1,100)
let numbers3x = [10, 20, 30, 40, 50]
let spliced2 = numbers3x.toSpliced(2,1,100)


console.log(spliced1)
console.log(spliced2)
console.log(numbers3)

// splice() ცვლის სიას და აბრუნებს ამოშლილი ელემენტების სიას, ხოლო toSpliced() საწყისს სიას ტოვებს უბრალოდ მასში ცვლილება შეგვაქ და გამოდის შეცვლილი სია



// N11
let data1 = [10, 20, 30]
let data2 = "Hello"
let data3 = 100
let data4 = ["A", "B"]
console.log(Array.isArray(data1)? 'data1 is array' : 'data1 is not array')
console.log(Array.isArray(data2)? 'data2 is array' : 'data2 is not array')
console.log(Array.isArray(data3)? 'data3 is array' : 'data3 is not array')
console.log(Array.isArray(data4)? 'data4 is array' : 'data4 is not array')



// N12
let sentence = "JavaScript is very interesting"
console.log(sentence.split(' '))
console.log(sentence.split(' ').length)
console.log(sentence.split(' ')[0])
console.log(sentence.split(' ')[3])



// N13
let students2 = "Nika,Gio,Luka,Ana,Saba"
console.log(students2.split(','))
console.log(students2.split(',')[0])
console.log(students2.split(',')[1])
console.log(students2.split(',')[2])
console.log(students2.split(',')[3])
console.log(students2.split(',')[4])



// N14
let words = ["HTML", "CSS", "JavaScript", "React"]
console.log(words.join(' - '))
console.log(words.join(' | '))



// N15
let numbers4 = ["555", "12", "34", "56"]
console.log(numbers4.join('-'))



// N16
let boys = ["Nika", "Gio", "Luka"]
let girls = ["Ana", "Mariam", "Sali"]
console.log(boys.concat(girls))
console.log(boys)
console.log(girls)



// N17
let morning = ["Math", "English"]
let afternoon = ["History", "Physics"]
let evening = ["Programming", "Design"]
console.log(morning.concat(afternoon, evening))
console.log(morning)
console.log(afternoon)
console.log(evening)



// N18
let cart = ["Phone", "Laptop", "Mouse"]
cart.push('Keyboard')
cart.unshift('USB Cable')
cart.pop()
cart.splice(3,1,'Headphones')
let newCart = cart.slice(0,2)
let extraProducts = ["Webcam", "Microphone"]
console.log(newCart.concat(extraProducts))
console.log(newCart.concat(extraProducts).join(' | '))
console.log(cart)



// N19
let data = "apple,banana,orange,kiwi,mango"
data = data.split(',')
console.log(data)
console.log(Array.isArray(data))
data.push('watermelon')
data.unshift('strawberry')
data.pop()
data.shift()
data.splice(2,1,'peach')
let newData = data.slice(1,4)
let newerData = newData.toSpliced(2,1)
let extraFruits = ["grape", "melon"]
newerData = newerData.concat(extraFruits)
console.log(data)
console.log(newData)
console.log(newerData)
console.log(newerData.join(' | '))