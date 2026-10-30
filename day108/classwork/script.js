// N1
let Prices = [20,100,2,500,132,315,15]
let Items = ["phone","book","mask","glasses","sticker","bottle","coke"]
Prices.forEach(price => {
    console.log(Items[Prices.indexOf(price)] + ': ' + price)
})

console.log('')
// N2
const packets = [120, 505, -45, 999, 14, 700, 33, 842];
let filtered = packets.filter(invalid => invalid % 7 != 0 && invalid > 500)
filtered.forEach(i => {
    if(i > 0 && i < 1000 && i % 3 != 0){
        console.log(i, ' - valid')
    }
    else{
        console.log(i, 'invalid')
    }
})

console.log('')
// N3
const rawEnergies = [5, 45, 120, 200, 12, 88, -10, 150];
let filtEnergy = rawEnergies.filter(f => f > 10 && f < 150)
let tran = filtEnergy.map(m => m = m * 3 - 5)
tran.forEach(i => console.log(`Q-${i}`))
// N4
const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"];
const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"];
const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"];
console.log('first server:', tokens_serv1.every(e => e.startsWith('SEC-') && e.length >= 8))
console.log('second server:', tokens_serv2.every(e => e.startsWith('SEC-') && e.length >= 8))
console.log('third server:', tokens_serv3.every(e => e.startsWith('SEC-') && e.length >= 8))
