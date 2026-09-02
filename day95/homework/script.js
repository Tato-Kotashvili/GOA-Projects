// N7
let name = "Goga";

function first() {
    let age = 20
    let city = "Tbilisi"
    
    function second() {

        console.log(name)
        console.log(age)
        console.log(city)
    }

    second();
}

first();
// name --> global
// age --> block(local) first
// city --> block(local) second
// second() შეუძლია გამოიყენოს name, age და city, რადგან მისთვის ისინი ბლოკის გარეთ არის ანუ გლობალური ხოლო city მის ბლოკში მოთავსებული ცვლადია.
// first() შეუძლია გამოიყენოს age და name, მისთვის age მისნაირ ბლოკში მოთავსებული ცვლადია ხოლო name გლობალური ცვლადია რომელიც არ არის ბლოკში მოთავსებული და ყველგან შეგვიძლია გამოვიყენოთ.







// N8
let score = 100

if (score > 50) {
    let message = "Passed"
    console.log(message)
}

// console.log(message)    --->     message ცვლადს ვერ მივწვდებით გარედან რადგან იგი იმყოფება ბლოკში და გლობალური სკოუპიდან მას ვერ მივწვდებით.











// N9
let x = 10

function outer() {
    let x = 20

    function middle() {
        // let y = 30

        function inner() {
            let x = 40

            console.log(x)
            console.log(y)
        }

        inner()
    }

    middle()
}

outer()
// 40 და 30 დაიბეჭდება, რადგან ყველაზე ლოკალურ ბლოკში რა მნიშვნელობაც უწერია x ცვლადს ის გამოვა ხოლო 30 გამოვიდა რადგან y ცვლადი inner() ფუნქციის ბლოკის გარეთ იმყოფება და შეგვიძლია მას მივწვდეთ.
// inner() ში გამოიყენება x = 40, რადგან ლოკალური მნიშვნელობა ცვლადისა მეტი პრიორიტეტით სარგებლობს.
// თუ let y = 30 წავშლით მაშინ გამოგვიტანს შეცდომას, რადგან ეს ცვლადი აღარ არსებობს.










// N10
let country = "Georgia"

function school() {
    let students = 20

    if (students > 10) {
        let teacher = "Goga"

        console.log(country) // global scope
        console.log(students) // local scope (global)
        console.log(teacher) // local scope
    }
}





// N11 ---> scope არის ის თუ სად შეგვიძლია ცვლადს მივწვდეთ, ანუ სად არის იგი ხელმისაწვდომი და გვაქვს 2 სახის scope, ესენია: global და local სკოუპები global არის ისეთი რომელსაც ყველგან მივწვდებით ნებისმიერი ბლოკიდან ანუ ისეთია რომელიც ბლოკის გარეთაა, ხოლო local არის ბლოკში მყოფი ცლვადი რომელსაც მხოლოდ ლოკალურად შეგვიძლია მივწვდეთ ანუ იმ ბლოკში სადაც იგი იმყოფება.