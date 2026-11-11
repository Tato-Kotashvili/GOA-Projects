// N1
console.log('                  1')

let bankAccount = {
    _owner : 'Goga',
    _balance : 2500,
    _pin : '1234',
    _isBlocked : false,
    set owner(newName){
        newName ? this._owner = newName : 'invalid name'
    },
    get owner(){
        return this._owner
    },
    set balance(newBalance){
        newBalance && newBalance > 0 ? this._balance = newBalance : console.log("Invalid balance!")
    },
    get balance(){
        return this._balance
    },
    set pin(pinn){
        pinn.length === 4 ? this._pin = pinn : console.log("PIN must contain exactly 4 digits!")
    },
    get pin(){
        return "PIN is hidden"
    },
    get accountStatus(){
       return this._isBlocked ? "Blocked" : "Active"
    },
    set deposit(amount){
        if(!this._isBlocked){
            if(amount && amount > 0){
                this._balance += amount
            }
            else{
                console.log("Invalid deposit amount!")
            }
        }
        else{
            console.log("Account is blocked!")  
        }
    },
    set withdraw(amount){
        if(!this._isBlocked){
            if(amount <= this._balance){
                this._balance -= amount
            } 
            else{
                console.log("Insufficient balance!")
            }
        } 
        else{
            console.log("Account is blocked!")
        }
    }
}
console.log('before:', bankAccount.owner)
bankAccount.owner = 'tato'
console.log('after:',bankAccount.owner)
console.log('before:', bankAccount.pin)
bankAccount.pin = '1010'
console.log('after:',bankAccount.pin)
console.log('before:', bankAccount._balance)
bankAccount.deposit = 1000
console.log('after:',bankAccount._balance)
console.log('before:', bankAccount._balance)
bankAccount.withdraw = 10000
console.log('after:',bankAccount._balance)
console.log(bankAccount.accountStatus)





// N2
console.log('                  2')

let player = {
    _name : "Shadow",
    _health : 100,
    _energy : 80,
    _level : 1,
    _experience : 0,
    _isAlive : true,
    set name(newName){
        newName && newName.length > 3 ? this._name = newName : console.log("Name must contain at least 3 characters!") 
    },
    get name(){
        return this._name
    },
    set health(newHealth){
        if(newHealth >= 0 && newHealth <= 100){
            if(newHealth == 0){
                this._isAlive = false
                this._health = newHealth
            }
            else{
                this._isAlive = true
                this._health = newHealth 
            }
        }
        else{
            console.log('Invalid health!')
        }
    },
    get health(){
        return this._health
    },
    set energy(newEnergy){
        if(newEnergy >= 0 && newEnergy <= 100){
            this._energy = newEnergy
        }
        else{
            console.log('Invalid energy!')
        }
    },
    get energy(){
        return this._energy
    },
    set experience(newExp){
        if(newExp >= 0){
            this._experience = newExp
            while(this._experience >= 100){
                this._level += 1
                this._experience -= 100
            }
        }
        else{
            console.log('invalid exp')
        }
    },
    get experience(){
        return this._experience
    },
    get level(){
        return this._level
    },
    get status(){
        return this._isAlive && this._energy > 0 ? 'Ready' : 'Exhausted'
    },
    set attack(dmg){
        if(this._isAlive == true){
            if(dmg > this._energy){
                console.log("Not enough energy!")
            }
            else{
                this._energy -= dmg
                console.log("Attack successful!")
            }
        }
        else{
            console.log('Player is dead')
        }
    }
}
console.log('before:', player._energy)
player.attack = 80
console.log('after:',player._energy)
console.log('before:', player.energy)
player.energy = 100
console.log('after:',player.energy)
console.log(player.status)
console.log('before:',player._experience)
console.log('before:',player._level)
player.experience = 350
console.log('after:',player._experience)
console.log('after:',player._level)








// N3
console.log('                  3')

let storeAccount = {
    _username : "Goga",
    _email : "goga@gmail.com",
    _balance : 1800,
    _password : "goga1234",
    _isActive : true,
    _loginAttempts : 0,
    set username(newUser){
        newUser && newUser.length >= 4 ? this._username = newUser : "Invalid username!"
    },
    get username(){
        return this._username
    },
    set email(newEmail){
        newEmail && newEmail.includes('@') && newEmail.endsWith('.com') ? this._email = newEmail : "Invalid email address!"
    },
    get email(){
        return this._email
    },
    set password(newPass){
        newPass && newPass.length >= 8 ? this.password = newPass : "Weak password!"
    },
    get password(){
        return "Password is protected"
    },
    get accountStatus(){
        return this._isActive ? "Account is active" : "Account is inactive"
    },
    set login(pass){
        if (pass !== this._password) {
            this._loginAttempts++
            console.log("Incorrect password!")
            if (this._loginAttempts >= 3) {
                this._isActive = false
                this._loginAttempts = 0
                console.log("account inactive after 3 failed attempts")
            }
        }
        else {
            this._loginAttempts = 0
            console.log("Login successful!")
        }
    },
    set purchase(price){
        if(this._isActive){
            if(price && price > 0){
                if(price > this._balance){
                    console.log("Insufficient balance!")
                }
                else{
                    this._balance -= price
                    console.log("Purchase successful!")
                    if(this._balance < 100){
                        console.log("Low balance warning!")
                    }
                }
            }
        }
        else{
            console.log("Account is inactive!")
        }
    },
    set addBalance(amount){
        if(this._isActive){
            amount && amount > 0 ? this._balance += amount : "Invalid amount!"
        }
        else{
            console.log("Account is inactive!")
        }
    }
}
console.log(storeAccount.accountStatus)
console.log('before:',storeAccount._balance)
storeAccount.addBalance = 800
console.log('after:', storeAccount._balance)
console.log('before:',storeAccount._balance)
storeAccount.purchase = 2560
console.log('after:', storeAccount._balance)
console.log('before:',storeAccount._loginAttempts)
storeAccount.login = 1320132
storeAccount.login = "goga1234"
console.log('after:', storeAccount._loginAttempts)