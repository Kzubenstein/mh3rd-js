console.log("Fibonacci sequence of numbers up to 20th");

let i =0
let firstNum = 1
let secondNum = 2

while (i<=9) {
    i++
    console.log(`${2*i-1} Fibonacci number  — ${firstNum}`);
    console.log(`${2*i} Fibonacci number — ${secondNum}`);
    firstNum += secondNum
    secondNum += firstNum
}
console.log(" ");


console.log("Every 5th number that is divisible by 3 in range from 100 to 300");

let divisibleNumCount=0
let divisibleNum = 0
for (divisibleNum=100;divisibleNum<=300;divisibleNum++){
    if (divisibleNum%3==0) {
        divisibleNumCount++
        if (divisibleNumCount%5==0) {
            console.log(divisibleNum);
    }
    
}
}
console.log(" ");


console.log("Horoscope");

function Horoscope() {
    let zodiac = prompt("Enter your zodiac sign")
switch (zodiac) {
    case "pisces":
        alert("You're apt to feel rather tense today and blame it on boredom and discontent with your current life");
        break;

    case "aquarius":
        alert("You're romantic by nature, but today you're probably more interested in sensuality than roses and champagne");
        break;

    case "capricorn":
        alert("Traffic in your neighborhood could be congested beyond anything you've seen before");
            break;

    default:
        alert("Your horoscope is still in development or you spelled the name wrong");
        break;
}
}
// Horoscope()

console.log(" ");


// console.log("Birth Number");

// function birthNumber() {
//     let dateOfBirth = prompt("Enter your date of birth")
//     let monthOfBirth = prompt("Enter your birth month number")

//    let birthday = dateOfBirth + monthOfBirth

//    birthdayDay = birthday - (birthday - birthday%10)
//    birthdayMonth = birthday - birthday%10
//    birthdayDDMM = birthdayDay + birthdayMonth
//    if (birthdayDDMM>=10) {
//         birthday = birthdayDDMM
//         birthdayDay = birthday - (birthday - birthday%10)
//         birthdayMonth = birthday - birthday%10
//         birthdayDDMM = birthdayDay + birthdayMonth
//         if (birthdayDDMM<10) {
//             console.log(birthdayDDMM);
//         }
//    }
// }
// birthNumber() 
// СЛишком долго на нём сидел, отложил

function addSugar() {
    let answer 
    let count = 0

    do{
    answer = prompt("Добавить сахар в кофе?")
    if (answer==="Да") {
        count++
    alert("Ложек сахара в кофе - "+count)
    }
    else{
        alert("Приятного кофепития!")
    }
}
while (answer==="Да");
    
}
addSugar()


