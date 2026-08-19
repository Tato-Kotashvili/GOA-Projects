// N1
let name
let nameForGreeting = name || 'guest'
console.log(`Hello ${nameForGreeting}, how you doing?`)
// name ცვლადში არაფერი გვაქ შენახული ამიტომაც name falsy არის და მეორე truthy 'guest' ჩაჯდება
// N2
let st = 'tato'
st.length === 6 ? console.log('medium length') :
st.length > 6 ? console.log('long length') :
console.log('short name')
// N3
let city = 'qutaisi'
switch(city) {
    case 'tbilisi':
        console.log('tbilisi')
        break
    case 'qutaisi':
        console.log('qutaisi')
        break
    default:
        console.log('unknown')
        break
} 