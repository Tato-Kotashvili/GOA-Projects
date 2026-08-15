let username = 'User123'
username = username.toLowerCase()
if(!username) {
    console.log('Empty')
}
else if(username.startsWith('adming') && username.length > 10) {
    console.log('Strong adming username')
}
else if(username.startsWith('user')) {
    console.log('Regular user')
}
else if(username.length < 5) {
    console.log('Too short')
}
else {
    console.log('Valid username')
}