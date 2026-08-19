let username = 'adminGoga'
if(!username) {
    console.log('Username is empty')
}
else if(username.startsWith('admin')) {
    console.log('Admin')
}
else if(username.startsWith('user')) {
    console.log('User')
}
else {
    console.log('Unknown user')
}