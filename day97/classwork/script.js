// N1
let names = ['goga', 'tato', 'levani', 'andro']
names.pop()
names.push(true, 'gigi')

names.shift()
names.unshift('avtomobili')
console.log(names)



// N2
let st = ['hello', 'world', 'tato', 'stringi', 'sia']
let nums = [1, 2, 3, 4, 5]
let mixed = st.concat(nums)
mixed.push(true)
console.log(mixed)

let newArr = mixed.slice(3, 6)
console.log(newArr)
console.log(Array.isArray(newArr))
