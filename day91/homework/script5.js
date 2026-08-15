let password = 'JavaScript'
if(password == '' || password.length === 0) {
    console.log('Password is empty')
}
else if(password.length < 6) {
    console.log('Too short')
}
else if(password.length >= 6 && password.length <= 10) {
    console.log('Medium password')
}
else if(password.length > 10) {
    console.log('Strong password')
}