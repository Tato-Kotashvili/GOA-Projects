// N1
let li1 = ['goga', 'tato', 'levani', 'andro', 'giorgi']
for(let i = 0; i < li1.length; i++){
    if(li1[i].length > 5 && li1[i].startsWith('g')){
        console.log(li1[i])
    }
}



// N2
let li2 = [1,200,350,4,50,600,777,8,9]
for(let i = 0;i < li2.length; i++){
    if(li2[i] % 2 == 0 || li2[i] > 100){
        console.log(li2[i])
    }
}



// N3
let li3 = ['stringi','hello','world','hiiii']
for(let i = 0; i < li3.length; i++){
    console.log(i+1, li3[i])
}