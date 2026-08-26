// N1
function x(){
    let name = 'tato'
    let surname = 'kotashvili'
    console.log(name,surname)
}
x()
// N2
function hey(name = 'goga', surname = 'chalauri', age = 23){
    console.log(`Hello my name is ${name} ${surname} and im ${age} old`)
}
hey('tato')
hey('tato', 'kotashvili')
hey('tato', 'kotashvili', 15)
hey()