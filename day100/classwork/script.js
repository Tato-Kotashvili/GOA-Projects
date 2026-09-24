// N1
let names = ['goga', 'tato', 'levani', 'ana', 'gio', 'andro']
let i = 0
while(i < names.length){
    if(names[i].length < 4){
        console.log(names[i])
    }
    i++
}
// do{
//     if(names[i] < 4){
//         console.log(names[i])
//     }
//     i++
// }while(i < names.length)


// N2
let nums = [15,21,34,70,51,10]
for(let i = 0; i < nums.length; i++){
    if( nums[i] > 50){
        break
    }
    else{
        console.log(nums[i])
    }
}