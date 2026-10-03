// N1
console.log('                 1')

let dice1 = Math.floor(Math.random() * 6) + 1
let dice2 = Math.floor(Math.random() * 6) + 1
console.log(dice1)
console.log(dice2)
if(dice1 + dice2 >= 10){
    console.log("ძალიან კარგი შედეგია!")
}
else if(dice1 + dice2 >= 7 && dice1 + dice2 <= 9){
    console.log("კარგი შედეგია!")
}
else {
    console.log("ცუდი შედეგია!")
}

if(dice1 == dice2){
    console.log("დუბლი!")
}



// N2
console.log('                 2')

let hero = Math.floor(Math.random() * 21) + 20
let monster = Math.floor(Math.random() * 21) + 15
console.log('hero:',hero)
console.log('monster:',monster)
if(hero == 30){
    hero += 10
}
if(hero > monster){
    console.log("გმირმა მოიგო!")
}
else if(hero < monster){
    console.log("მონსტრმა მოიგო!")
}
else {
    console.log("ბრძოლა ფრედ დასრულდა!")
}



// N3
console.log('                 3')
let carSpeed = Math.floor(Math.random() * 81) + 40
console.log('car speed:', carSpeed)
if(carSpeed >= 40 && carSpeed <= 60){
    console.log("ნელა მიდის")
}
else if(carSpeed >= 61 && carSpeed <= 90){
    console.log("ნორმალური სიჩქარე")
}
else if(carSpeed >= 91 && carSpeed <= 110){
    console.log("სწრაფად მიდის")
}
else if(carSpeed >= 111 && carSpeed <= 120){
    console.log("ძალიან სწრაფად მიდის")
}

if(carSpeed == 100){
    console.log("ზუსტად 100 კმ/სთ!")
}



// N4
console.log('                 4')

let rand = Math.floor(Math.random() * 10) + 1
console.log('random:',rand)
if(rand >= 1 && rand <= 3){
    console.log("ცარიელი ყუთი")
}
else if(rand >= 4 && rand <= 6){
    console.log("10 მონეტა")
}
else if(rand == 7 && rand == 8){
    console.log("30 მონეტა")
}
else if(rand == 9){
    console.log("50 მონეტა")
}
else if(rand == 10){
    console.log("100 მონეტა და ბონუსი!")
    let newRand = Math.floor(Math.random() * 5) + 1
    console.log('1-5:', newRand)
    if(newRand == 5){
        console.log("სუპერ ბონუსი!")
    }
    else{
        console.log("ჩვეულებრივი ბონუსი!")
    }
}



// N5
console.log('                 5')

let player1 = Math.floor(Math.random() * 21) + 10
let player2 = Math.floor(Math.random() * 21) + 10

let Player1 = Math.floor(Math.random() * 10) + 1
let Player2 = Math.floor(Math.random() * 10) + 1
if(player1 == 20){
    player1 += 5
}
else if(player2 == 20){
    player2 += 5
}

if(Player1 == 10){
    Player1 += 3
}
else if(Player2 == 10){
    Player2 += 3
}
console.log('player1 power:',player1,'player1 def:',Player1)
console.log('player2:',player2,'player2 def:',Player2)

if(player1 + Player1 > player2 + Player2){
    console.log('Player 1 won')
}
else if(player1 + Player1 < player2 + Player2){
    console.log('Player 2 won')
}
else{
    console.log('draw')
}



// N6
console.log('                 6')

let n1 = Math.floor(Math.random() * 20) + 1
let n2 = Math.floor(Math.random() * 20) + 1
let n3 = Math.floor(Math.random() * 20) + 1
let sum = n1 + n2 + n3
console.log('number1:',n1)
console.log('number2:',n2)
console.log('number3:',n3)
console.log('sum:', sum)

if(n1 == n2 && n2 == n3 && n1 == n3){
    console.log("ჯეკპოტი!")
}
else if(n1 == n2 || n2 == n3 || n1 == n3){
    console.log("ორი ერთნაირი რიცხვი!")
}
else{
    console.log("სამივე განსხვავებულია")
}

if(sum > 40){
    console.log("დიდი ჯამი")
}
else{
    console.log("პატარა ჯამი")
}



// N7
console.log('                 7')

let play1 = 0
let play2 = 0
for(let i = 0; i < 3; i++){
    if(Math.floor(Math.random() * 10) + 1 == 10){
        play1 += Math.floor(Math.random() * 10) + 1 + 5
    }
    else if(Math.floor(Math.random() * 10) + 1 > 5){
        play1 += Math.floor(Math.random() * 10) + 1 + 3
    }
}
for(let i = 0; i < 3; i++){
    if(Math.floor(Math.random() * 10) + 1 == 10){
        play2 += Math.floor(Math.random() * 10) + 1 + 5
    }
    else if(Math.floor(Math.random() * 10) + 1 > 5){
        play2 += Math.floor(Math.random() * 10) + 1 + 3
    }
}
console.log('player1:', play1)
console.log('player2:', play2)

if(play1 > play2){
    console.log('player1 won')
}
else if(play1 < play2){
    console.log('player2 won')
}
else{
    console.log('draw')
}