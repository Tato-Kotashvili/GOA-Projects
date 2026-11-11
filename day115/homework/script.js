// N1
console.log('                1')

function createCharacter(name, health, damage){
    return {
        name,
        health,
        damage,
        attack(target){
            target.health -= this.damage
            if(target.health <= 0){
                console.log("Target is already defeated!")
                target.health = 0
            }
            else{
                console.log(`target health left: ${target.health}`)

            }
        },
        heal(amount){
            if(this.health + amount >= 100){
                this.health = 100
                console.log('Already full health')
            }
            else{
                this.health += amount
            }
            if(this.health - amount == 0){
                console.log(`${this.name} is already dead`)
                this.health = 0
            }
        },
        getStatus(){
            return `Name: ${this.name}, Health: ${this.health}`
        }
    }
}


let player1 = createCharacter('Shadow',60,40)
let player2 = createCharacter('Dark knight',60,80)
let player3 = createCharacter('Slayer',70,20)


player1.attack(player2)
console.log('health:',player1.health)
player1.heal(30)
console.log('after heal:',player1.health)



player2.attack(player3)
console.log('health:',player2.health)
player2.heal(40)
console.log('after heal:',player2.health)


player3.attack(player1)
console.log('health:',player3.health)
player3.heal(80)
console.log('after heal:',player3.health)


console.log(player1.getStatus())
console.log(player2.getStatus())
console.log(player3.getStatus())

// N2
console.log('                2')

function createBankAccount(owner,balance,pin){
    return {
        owner,
        balance,
        pin,
        deposit(amount){
            if(amount > 0){
                this.balance += amount
            }
            else{
                console.log('invalid amount for deposit')
            }
        },
        withdraw(amount, enteredPin){
            if(enteredPin != this.pin){
                console.log('incorrect pin!')
            }
            else{
                if(amount > this.balance){
                    console.log('Not enough money!')
                }
                else{
                    this.balance -= amount
                }
            }
        },
        getBalance(){
            return `Current balance: ${this.balance}`
        },
        changePin(oldPin, newPin){
            if(oldPin == this.pin){
                newPin.length == 4 ? this.pin = newPin : console.log('invalid pin') 
            }
            else{
                console.log('incorrect pin')
            }
        }
    }
}
console.log('             acc1')

let acc1 = createBankAccount('goga', 300, '1234')
acc1.deposit(400)
console.log('balance after deposit:',acc1.balance)
acc1.withdraw(400,'1234')
console.log('balance after withdrawal:',acc1.balance)
console.log('old pin:',acc1.pin)
acc1.changePin('1234','4444')
console.log('new pin:',acc1.pin)
console.log(acc1.getBalance())

console.log('             acc2')

let acc2 = createBankAccount('gio', 100, '0000')
acc2.deposit(400)
console.log('balance after deposit:',acc2.balance)
acc2.withdraw(1000,'0000')
console.log('balance after withdrawal:',acc2.balance)
console.log('old pin:',acc2.pin)
acc2.changePin('4321','4444')
console.log('new pin:',acc2.pin)
console.log(acc2.getBalance())




// N3
console.log('                3')

function createStudent(name,age,grades){
    return {
        name,
        age,
        grades,
        addGrade(grade){
            if(grade >= 0 && grade <= 100){
                this.grades.push(grade)
            }
        },
        getAverage(){
            let avg = Math.ceil(this.grades.reduce((a,c) => a+c)/this.grades.length)
            return avg
        },
        getResult(){
            if(this.getAverage() >= 90){
                return "Excellent"
            }
            else if(this.getAverage() >= 70 && this.getAverage() <= 89){
                return "Good"
            }
            else if(this.getAverage() >= 50 && this.getAverage() <= 69){
                return "Average"
            }
            else{
                return 'Failed'
            }
        },
        getInfo(){
            console.log(name,age,grades,this.getAverage(),this.getResult())
        }
    }
}

console.log('            student1')
let st1 = createStudent('tato',15,[90,76,100,96,85])
st1.addGrade(100)
st1.getInfo()
console.log('Average:',st1.getAverage())

console.log('            student2')
let st2 = createStudent('gio',15,[70,59,87,63,40])
st2.addGrade(30)
st2.getInfo()
console.log('Average:',st2.getAverage())




// N4
console.log('                4')

function createCart(){
    return {
        items : [],
        addProduct(name, price, quantity){
            let same = false
            for(let i of this.items){
                if(i.name == name){
                    i.quantity += quantity
                    same = true
                    break
                }
            }
            if(!same){
                this.items.push({name,price,quantity})
            }
        },
        removeProduct(name){
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].name == name) {
                    this.items.splice(i, 1)
                    break
                }
            }
        },
        increaseQuantity(name,amount){
            for(let i of this.items){
                if(i.name == name){
                    i.quantity += amount
                    break
                }
            }
        },
        getTotal(){
            let total = 0
            for(let i of this.items){
                total += i.price * i.quantity
            }
            return total
        },
        getCartInfo(){
            return this.items
        }
    }
}

let cart = createCart()
cart.addProduct('apple',2,5)
cart.addProduct('pear',5,1)
cart.addProduct('banana',6,4)
cart.addProduct('melon',7,2)
cart.removeProduct('pear')
cart.increaseQuantity('melon',1)
console.log('total price:',cart.getTotal())
console.log('cart',cart.getCartInfo())