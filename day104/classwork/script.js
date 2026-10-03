// N1
let player1 = Math.floor(Math.random() * 31) 
let player2 = Math.floor(Math.random() * 31)  
console.log(player1)
console.log(player2)
if(player1 == 20){
    player1 += 5
}
if(player2 == 20){
    player2 += 5
}


if(player1 > player2){
    console.log('Player 1 won')
}
else if(player2 > player1){
    console.log('Player 2 won')
}
else {
    console.log('Draw')
}