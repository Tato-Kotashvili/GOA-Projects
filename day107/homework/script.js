// N1
console.log('                  1')

const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64];
let filtered1 = scores.filter(score => score >= 60)
let mapi = filtered1.map(filt => filt += 5)
let filtered2 = mapi.filter(m => m > 80)
let reduced = filtered1.reduce((acc, curr) => acc + curr)
let indexOf100 = filtered2.findIndex(i => i == 100)
let ifSome = scores.some(j => j < 30)
let ifEvery = scores.every(k => k > 20)
filtered2.forEach(l => {
    console.log(l)
})
console.log('index of 100:',indexOf100)
console.log('reduced:',reduced)
console.log('some:',ifSome)
console.log('every:',ifEvery)



// N2
console.log('                  2')

const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60];
let filte1 = prices.filter(price => price > 200)
let mapp = filte1.map(fi => fi -= 50)
let newMapp = mapp.map(n => n *= 2)
let red = newMapp.reduce((a,c) => a + c)
let first20 = prices.findIndex(inn => inn > 20)
let som = prices.some(s => s > 40)
let eve = prices.every(e => e > 0)
newMapp.forEach(fo => {console.log(fo)})
console.log('reduced:',red)
console.log('first >20:',first20)
console.log('some more than 40:',som)
console.log('every item positive:',eve)



// N3
console.log('                  3')

const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11];
let numFiltered = numbers.filter(s => s % 2 == 0)
let times3 = numFiltered.map(u => u *= 3)
let ag = times3.filter(r => r > 50)
let re = ag.reduce((acc, curr) => acc + curr)
let index = numbers.findIndex(num => num > 20)
let so = numbers.some(s => s > 40)
let ev = numbers.every(e => e > 0)
ag.forEach(i => {console.log(i)})
console.log('sum:',re)
console.log('index:',index)
console.log('some:',so)
console.log('every:',ev)



// N4
console.log('                  4')

const words = [
  "javascript",
  "html",
  "programming",
  "css",
  "developer",
  "react",
  "computer",
  "code",
  "algorithm"
];
let wofil = words.filter(word => word.length > 5)
let womap = wofil.map(t => t.toUpperCase())
let filt = womap.filter(f => f.length > 8)
let redcu = filt.reduce((ac,cu) => ac+cu.length,0)
let ind = words.findIndex(i => i.length > 8)
let s = words.some(s => s.length > 10)
let e = words.every(e => e.length >= 3)
filt.forEach(i => {console.log(i)})
console.log('words length:',redcu)
console.log('some:',s)
console.log('every:',e)
console.log('index:',ind)



// N5
console.log('                  5')

const nums = [14, 28, 35, 42, 19, 56, 63, 70, 25, 84, 91, 100, 32];
let fil = nums.filter(f => f > 20)
let ma = fil.map((m,index) => m += index)
let fil2 = ma.filter(f => f % 2 == 0)
let ma2 = fil2.map(m => m *= 2)
let ree = ma2.reduce((a,c) => a+c)
let reee = ma2.reduce((max,c) => c > max ? c : max)
let inde = nums.findIndex(i => i > 60)
let ss = ma2.some(s => s > 200)
let ee = ma2.every(e => e % 2 == 0)
ma2.forEach(i => console.log(i))
console.log('sum:',ree)
console.log('max:',reee)
console.log('index:',inde)
console.log('some:',ss)
console.log('every:',ee)



// N6
console.log('                  6')

const scoress = [
  45, 88, 72, 96, 54, 100, 63, 81,
  39, 92, 77, 68, 85, 49, 98, 59
];
let sfilt = scoress.filter(f => f >= 60)
let smap = sfilt.map(m => m += 7)
let mfilt = smap.filter(f => f >= 80)
let filmap = mfilt.map((m,index) => m -= index)
let mapfiltered = filmap.filter(f => f % 2 != 0)
let reduc = mapfiltered.reduce((a,c) => a+c)
let reducc = mapfiltered.reduce((a,c) => (a+c))/mapfiltered.length
let indee = scoress.findIndex(i => i > 90)
let soo = mapfiltered.some(s => s < 90)
let evee = mapfiltered.every(e => e > 70)
mapfiltered.forEach(i => {
    if(i > 80){
        console.log('Passed:', i)
    }
    else{
        console.log('Failed:', i)
    }
})
console.log('sum:', reduc)
console.log('avg:', reducc)
console.log('index:', indee)
console.log('some:',soo)
console.log('every:',evee)



// N7
console.log('                  7')

const nums1 = [
  18, 45, 72, 91, 34, 120, 57, 86,
  103, 64, 39, 150, 77, 98, 25, 132
];
let filted3 = nums1.filter(f => f > 30)
let mapped = filted3.map((m,index) => m += index)
let again = mapped.filter(a => a % 2 == 0)
let agmap = again.map(m => m += 20 ) // აღარ დაგვრჩებოდა კენტები წინადან
let fil1 = agmap.filter(f => f > 100)
let sum = fil1.reduce((a,c) => a + c, 0)
let avg = fil1.reduce((a,c) => (a+c),0)/fil1.length
let indexx = nums1.findIndex(i => i < 100 && i % 2 == 0)
let somee = nums1.some(s => s > 140)
let everyy = fil1.every(e => e > 100 && e % 2 == 0)
fil1.forEach((i) => {
    if(i > 200){
        console.log(i, 'more than 200', fil1.indexOf(i))
    }
    else{
        console.log(i, 'less than 200', fil1.indexOf(i))
    }
})
console.log('sum:',sum)
console.log('every:',everyy)
console.log('some:',somee)
console.log('index:',index)
console.log('average:',avg)