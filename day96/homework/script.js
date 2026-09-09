// N1
let numbers = [12, 45, 7, 23, 89, 34, 16, 50]
numbers[0] = 100
numbers[7] = 200
numbers[2] += 10
numbers[4] = numbers[4] /= 2
[numbers[3], numbers[6]] = [numbers[6], numbers[3]]
console.log(numbers)



// N2
let numbers1 = [15, 8, 42, 8, 31, 42, 19, 8]
numbers1[1] = 80
numbers1[2] = 420
numbers1[7] = 800
numbers1[1] += 5
console.log(numbers1)



// N3
let fruits = ["apple", "banana", "orange", "kiwi", "mango", "peach"]
let index = 0 // 3
console.log(fruits[index])
fruits[index] = 'watermelon'
console.log(fruits[index])
console.log(fruits)



// N4
let names = ['tato', 'goga', 'levan', 'andro', 'vaja']
// let index1 = Number(prompt('Enter your index:'))
// console.log(names[index1])



// N5
let students = [
    "Giorgi",
    "Nika",
    "Saba",
    "Luka",
    "Dato",
    "Ana"
]
let position = 4
let newName = "Goga"
!students[position - 1] ? console.log('invalid position') : console.log(students[position - 1])



// N6
let colors = ["red", "blue", "green", "yellow", "black", "white"]
colors.splice(2, 1)
colors.splice(2, 0, 'purple')
colors.splice(4, 1, 'pink')
colors.splice(0, 1)
colors.splice(5, 0, 'red')
console.log(colors)



// N7
let numbers2 = [5, 10, 15, 20, 25, 30, 35, 40]
numbers2[1] *= 10
numbers2[2] *= 10
numbers2[3] *= 10
numbers2[4] *= 10
numbers2[5] *= 10
console.log(numbers2)



// N8
let numbers3 = [10, 20, 30, 40, 50, 60, 70, 80]
numbers3[0] += 5
numbers3[1] *= 2
numbers3[2] += 5
numbers3[3] *= 2
numbers3[4] += 5
numbers3[5] *= 2
numbers3[6] += 5
numbers3[7] *= 2
console.log(numbers3)