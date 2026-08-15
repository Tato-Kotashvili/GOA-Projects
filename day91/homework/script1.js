let age = 18
if (age >= 0 && age <= 12) {
    console.log("ბავშვი")
}
else if(age >= 13 && age <= 17) {
    console.log("მოზარდი")
}
else if(age >= 18 && age <= 59) {
    console.log('ზრდასრული')
}
else if(age >= 60) {
    console.log('პენსიონერი')
}
else {
    console.log('არასწორი ასაკი')
}