// N1
console.log('                1')
function factory(name,surname,age,adress,hobby){
    return {
        name : name,
        surname : surname,
        age : age,
        adress : adress,
        hobby : hobby,
        displayUsersName(){
            console.log(name,surname,adress)
        }
    }
}
let tato = factory('tato','kotashvili',15,'tbilisi','literature')
console.log(tato)
tato.displayUsersName()

let levan = factory('levan','beridze',15,'batumi','programming')
console.log(levan)
levan.displayUsersName()

let goga = factory('goga','chalauri',23,'tbilisi','programming')
console.log(goga)
levan.displayUsersName()

let andro = factory('andria','javaxa',15,'tbilisi','guitar')
console.log(andro)
andro.displayUsersName()