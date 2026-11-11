// N1
console.log('                  1')

let player = {
    _name: "Shadow",
    _level: 15,
    _experience: 850,
    _health: 75,
    _isOnline: true,
    get displayName(){
        return this._name.length < 3 ? 'Invalid name!' : this._name
    },
    get displayLevel(){
        return this._level >= 10 ? "Advanced Player" : this._level >= 5 ? "Intermediate Player" : "Beginner Player"
    },
    get displayStatus(){
        return this._health == 0 ? "Player is dead" : this._health < 30 ? "Critical condition" : "Player is healthy"
    }
};
console.log(player.displayName)
console.log(player.displayLevel)
console.log(player.displayStatus)



// N2
console.log('                  2')

let person = {
    name : 'tato',
    _email : 'tato@gmail.com',
    _password : 1234,
    set changeEmail(newEmail){
        this._email = newEmail
    },
    get changeEmail(){
        return this._email
    },
    set changePass(newPass){
        this._password = newPass
    },
    get changePass(){
        return this._password
    }
}
console.log('before:', person.changeEmail)
person.changeEmail = 'goga@icloud.com'
console.log('after:',person.changeEmail)
console.log('before:', person.changePass)
person.changePass = 101010
console.log('after:',person.changePass)