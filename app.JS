//Q1
var city = prompt("Enter City")

if(city == "karachi"){
    alert('Welcome to city of lights ✨')
}
else if(city == "lahore"){
    alert('Welcome to lahore')
}
else if(city == "islamabad"){
    alert('Welcome to islamabad')
}
else if(city == "peshawar"){
    alert('Welcome to peshawar')
}
else if(city == "punjab"){
    alert('Welcome to punjab')
}
else if(city){
  alert('Please Enter Correct City')
}

//Q2
var gender = prompt("Enter Your Gender")
if(gender == "male"){
    alert('Good Morning Sir ☀')
}
else if(gender == "female"){
    alert('Good Morning Maam ☀')
}
else if(gender){
    alert('Please enter Correct gender')
}

//Q3
var signalColor = prompt("Enter color of road traffic signal 🚦")
if(signalColor == "red"){
    alert('Red : Must Stop 🛑')
}
else if(signalColor == "yellow"){
    alert('Yellow : Ready to move 🚖')
}
else if(signalColor == "green"){
    alert('Green : Move Now 🚙')
}

//Q4
var fuel = prompt("Enter remaining fuel in car")
if(fuel <= 5){
    alert('Please refill the fuel in your car ⛽')
}
else if (fuel > 5){
    alert('Fuel is full ✅')
}else{
    alert("enter your remaining fuel in number")
}

//Q5
//  var a = 12;
// if(++a === 13){
//    document.write("given condition for variable a is true");
// }

//Q6
var percentage = +prompt("Enter Your Percentage")
if(percentage >= 80 && percentage <= 100){
     alert('GRADE : A+ \n REMARKS : Excellent')
}
else if(percentage >= 70 && percentage <= 80){
    alert('GRADE : A \n REMARKS : Good')
}
else if(percentage >= 60 && percentage <= 70){
    alert('GRADE : B \n REMARKS : You need to improve')
}
else if(percentage >=0 && percentage <=60){
    alert('FAIL \n REMARKS : Sorry')
}

///Q7 Guess game
var val = prompt("Guess Game" ,"Guess the secret number")
if(val == 6){
   alert('Bingo! Correct answer 😀')
}
else if (val == 7){
    alert('Close enough to the correct answer')
}
else{
    alert('Wrong answer')
}

//Q10 Temperature
var T = prompt("Enter temperature")
if(T > 30){
    alert('It is too hot outside 🔥')
}
else if (T > 10 ){
    alert('The Weather today is Normal.')
}
else if (T > 5){
    alert('Today’s Weather is cool.')
}
else if (T > 0){
    alert('OMG! Today’s weather is so Cool 🥶')
}

//Q11 Calculator

var firstNum =  +prompt("Calculator","Enter first number")
var operation =  prompt("Enter operation","+ - * / %")
var secondNum = +prompt("Enter second number")
if(operation === "+"){
    alert(firstNum+secondNum)
}
else if (operation === "-"){
    alert(firstNum-secondNum)
}
else if (operation === "*"){
    alert(firstNum*secondNum)
}
else if (operation === "/"){
    alert(firstNum/secondNum)
}
else if (operation === "%"){
    alert(firstNum/secondNum*100 + '%')
}


// document.write(`<h1 id="Name">Hassan Raza</h1>`)
// document.write(`<marquee>Muhammad Hassan Raza</marquee>`)