// N1
console.log('                 1')

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNumbers = numbers.filter(number => number % 2 == 0)
console.log(newNumbers)



// N2
console.log('                 2')

let fruits = ["ვაშლი", "მსხალი", "ატამი", "კივი", "ბანი"]
let newFruits = fruits.filter(fruit => fruit.length > 4)
console.log(newFruits)



// N3
console.log('                 3')

let nums = [-5, 10, -3, 0, 8, -1, 15]
let newNums = nums.filter(num => num >= 0)
console.log(newNums)



// N4
console.log('                 4')

let names = ["ანა", "გიორგი", "არჩილი", "დავითი", "ანანო"]
let newNames = names.filter(name => name.startsWith('ა'))
console.log(newNames)



// N5
console.log('                 5')

let list = [0, "გამარჯობა", "", null, undefined, "JS", false]
let newList = list.filter(item => item)
console.log(newList)



// N6
console.log('                 6')

let nums1 = [5, 12, 45, 8, 20, 100, 33]
let newNums1 = nums1.filter(num1 => num1 >= 10 && num1 <= 50)
console.log(newNums1)



// N7
console.log('                 7')

let li = ["apple", "banana", "cherry", "date", "avocado"]
let newLi = li.filter(it => it.startsWith('a'))
console.log(newLi)



// N8
console.log('                 9')

let l = [10, "ვაშლი", true, 25, "მსხალი", false, 50]
let st = l.filter(i => i === String(i))
let n = l.filter(j => j === Number(j))
let b = l.filter(x => x === Boolean(x))
console.log('strings:',st)
console.log('numbers:',n)
console.log('boolean:',b)