let username = "ADMIN_GOGA"
let age = 25
let isActive = true
if(username == '') {
    
}
else if(username.startsWith('admin') && age >= 18 && isActive === true) {
    console.log('Admin access')
}
else if(username.startsWith('user') && age >= 18) {
    console.log('User access')
}
else if(age < 18) {
    console.log('Access denied')
}
else {
    console.log('Unknown account')
}