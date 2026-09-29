// let Naruto = {
//     Characters: {
//         Naruto: "Uzumaki",
//         Sasuke: "Uchiha",
//         Sakura: "Haruno",

//         Jutsu: function techniques(naruto, sasuke, sakura){
//             let j = {
//                 Naruto: naruto,
//                 Sasuke: sasuke,
//                 Sakura: sakura
//             }

//             console.log(j);
//         }
//     }
// }

// Naruto.Characters.Jutsu("Rasengan", "Chidori", "Medical Ninjutsu");



// let Theater = {
//     Movies: {
//         Movie1: "Pushpa 2",
//         Movie2: "RRR",
//         Movie3: "Kalki",

//         Shows: function(){
//             return {
//                 Morning: "10:00 AM",
//                 Matinee: "2:00 PM",
//                 Evening: "6:00 PM",
//                 Night: "9:30 PM"
//             }
//         }
//     }
// }

// console.log(Theater.Movies.Shows());



// let Restaurant = {
//     Menu: {
//         Pizza: 300,
//         Burger: 180,
//         Pasta: 250,

//         Order: function(pizza, burger, pasta){
//             return {
//                 Pizza: pizza,
//                 Burger: burger,
//                 Pasta: pasta
//             }
//         }
//     }
// }

// console.log(Restaurant.Menu.Order(2, 3, 1));



let Bank = {
    Accounts: {
        Savings: "Savings Account",
        Current: "Current Account",

        Customer: function(name, age, balance){
            return {
                Name: name,
                Age: age,
                Balance: balance
            }
        }
    }
}

console.log(Bank.Accounts.Customer("Rahul", 22, 50000));