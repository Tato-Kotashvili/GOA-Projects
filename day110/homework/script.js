// company
console.log('                 company')

let company = {
    name: "TechVision",
    founded: 2010,

    headquarters: {
        country: "Georgia",
        city: "Tbilisi",

        address: {
            street: "Chavchavadze",
            building: {
                number: 25,
                floors: 8,

                departments: {
                    firstFloor: {
                        name: "Reception",
                        employees: 4
                    },

                    fifthFloor: {
                        name: "Development",
                        employees: 35,

                        manager: {
                            name: "Giorgi",
                            age: 32,

                            contact: {
                                email: "giorgi@techvision.com",
                                phone: "555123456"
                            }
                        }
                    }
                }
            }
        }
    },

    projects: {
        project1: {
            name: "Website",
            budget: 15000,

            team: {
                leader: "Nika",
                members: 8,

                technology: {
                    frontend: "React",
                    backend: "Node.js",
                    database: "MongoDB"
                }
            }
        },

        project2: {
            name: "Mobile App",
            budget: 25000,

            team: {
                leader: "Ana",
                members: 12,

                technology: {
                    frontend: "React Native",
                    backend: "Python",
                    database: "PostgreSQL"
                }
            }
        }
    }
};

console.log(1, company.name, company.founded)

console.log(2, company.headquarters.country, company.headquarters.city)

console.log(3, company.headquarters.address.building.number, company.headquarters.address.building.floors)

console.log(4, company.headquarters.address.building.departments.firstFloor.name, company.headquarters.address.building.departments.firstFloor.employees)

console.log(5, company.headquarters.address.building.departments.fifthFloor.name, company.headquarters.address.building.departments.fifthFloor.employees)

console.log(6, company.headquarters.address.building.departments.fifthFloor.manager.name, company.headquarters.address.building.departments.fifthFloor.manager.age)

console.log(7, company.headquarters.address.building.departments.fifthFloor.manager.contact.email, company.headquarters.address.building.departments.fifthFloor.manager.contact.phone)

console.log(8, company.projects.project1.name, company.projects.project1.budget, company.projects.project1.team.leader)

console.log(9, company.projects.project2.team.members, company.projects.project2.team.technology.database)

console.log(10,  company.projects.project2.team.technology.database,  company.projects.project2.team.technology.backend,  company.projects.project2.team.technology.frontend)



// N11
company.name = "TechWorld"
// N12
company.headquarters.city = 'Batumi'
// N13
company.headquarters.address.building.number = 40
company.headquarters.address.building.floors = 10
// N14
company.headquarters.address.building.departments.firstFloor.employees = 7
// N15
company.headquarters.address.building.departments.fifthFloor.name = "Software Development"
// N16
company.headquarters.address.building.departments.fifthFloor.manager.age = 35
// N17
company.headquarters.address.building.departments.fifthFloor.manager.phone = "599123456"
// N18
company.projects.project1.budget = 20000
// N19
company.projects.project2.team.leader = 'Giorgi'
company.projects.project2.team.members = 15
// N20
company.projects.project1.team.technology.frontend = "Vue.js"
company.projects.project1.team.technology.database = "MySQL"






// N21
company.employees = 150
// N22
company.headquarters.postalCode = '0108'
// N23
company.headquarters.address.building.hasElevator = true
// N24
company.headquarters.address.building.departments.firstFloor.phone = "0322000000"
// N25
company.headquarters.address.building.departments.fifthFloor.budget = 50000
// N26
company.headquarters.address.building.departments.fifthFloor.manager.salary = 6000
// N27
company.headquarters.address.building.departments.fifthFloor.manager.contact.linkedIn = "giorgi-techvision"
// N28
company.projects.project1.team.designer = "Mariam"
// N29
company.projects.project2.team.technology.testing = 'Jest'
// N30
company.projects.project2.status = 'In Progress'






// N31
delete company.founded
// N32
delete company.headquarters.country
// N33
delete company.headquarters.address.building.floors
// N34
delete company.headquarters.address.building.departments.firstFloor.employees
// N35
delete company.headquarters.address.building.departments.fifthFloor.manager.age
// N36
delete company.headquarters.address.building.departments.fifthFloor.manager.phone
// N37
delete company.projects.project1.team.technology.database
// N38
delete company.projects.project2.team.members
// N39
delete company.projects.project1.budget
// N40
delete company.projects.project2.team.technology.backend






















// Methods





// N1

let player = {
    name: "Shadow",
    health: 100,
    energy: 80,
    level: 1,
    showInfo(){
        return player.name, player.health, player.energy, player.level
    },
    takeDamage(amount){
        player.health - amount 
    },
    heal(amount){
        player.health + amount 
    },
    levelUp(){
        player.level++
    },
    useEnergy(amount){
        player.energy - amount
    }
};
player.takeDamage(20);
player.heal(10);
player.levelUp();
player.showInfo();




// N2
let bankAccount = {
    owner: "Goga",
    balance: 1500,
    currency: "GEL",
    showBalance(){
        return bankAccount.owner, bankAccount.balance
    },
    deposit(amount){
        bankAccount.balance + amount
    },
    withdraw(amount){
        if(amount > bankAccount.balance){
            return "Not enough money!"
        }
        bankAccount.balance - amount
    },
    showInfo(){
        return bankAccount.owner, bankAccount.balance, bankAccount.currency
    }
};






// N3
let product = {
    name: "Laptop",
    price: 2500,
    quantity: 10,
    showInfo(){
        return product.name, product.price, product.quantity
    },
    calculateTotal(){
        return product.price * product.quantity
    },
    sell(amount){
        if(amount < product.quantity){
            product.quantity - amount
        }
    },
    restock(amount){
        product.quantity + amount
    },
    changePrice(newPrice){
        product.price = newPrice
    }
}




// N4
let car = {
    brand: "BMW",
    model: "M5",
    speed: 0,
    fuel: 60,
    showInfo(){
        return car.brand, car.fuel, car.model, car.speed
    },
    accelerate(amount){
        car.speed + amount
    },
    brake(amount){
        car.speed -= amount
        if(car.speed < 0){
            car.speed = 0
        }
    },
    drive(distance){
        if(car.fuel - distance * 0.1 > 0){
            car.fuel - distance * 0.1
        }
        else{
            return 'Not enough fuel'
        }
    }
};





// N5
let student = {
    name: "Nika",
    scores: [85, 90, 70, 100],
    showScores(){
        return scores
    },
    addScore(score){
        student.scores.push(score)
    },
    calculateAverage(){
        return student.scores.reduce((a,c) => a + c)/student.scores.length
    },
    getHighestScore(){
        return student.scores.reduce((a,c) => {return c > a ? c : a})
    },
    getLowestScore(){
        return student.scores.reduce((a,c) => {return c < a ? c : a})
    }
};





// N6
let playe = {
    name: "Shadow",
    health: 100,
    attack: 25,
    showInfo(){
        console.log(playe.name, playe.health, playe.attack) 
    },
    attackEnemy(enemy1){
        enemy1.health -= playe.attack
    }
};
let enemy = {
    name: "Dragon",
    health: 150,
    attack: 20,
    showInfo(){
        console.log(enemy.name, enemy.health, enemy.attack) 
    },
    attackPlayer(player){
        player.health -= enemy.attack
    }
};
playe.attackEnemy(enemy)
enemy.attackPlayer(playe)
playe.showInfo()
enemy.showInfo()


// let player1 = {
//     name: "Shadow",
//     health: 100,
//     attack: 25,

//     showInfo() {
//         console.log(`Player Name: ${this.name}, Health: ${this.health}, Attack: ${this.attack}`);
//     },

//     attackEnemy(enemy) {
//         enemy.health -= this.attack;
//         if (enemy.health < 0) {
//             enemy.health = 0;
//         }
//     }
// };

// let enemy = {
//     name: "Dragon",
//     health: 150,
//     attack: 20,

//     showInfo() {
//         console.log(`Enemy Name: ${this.name}, Health: ${this.health}, Attack: ${this.attack}`);
//     },

//     attackPlayer(player1) {
//         player1.health -= this.attack;
//         if (player.health < 0) {
//             player.health = 0;
//         }
//     }
// };

// player1.attackEnemy(enemy);
// enemy.attackPlayer(player1);


// enemy.showInfo();
// player1.showInfo();