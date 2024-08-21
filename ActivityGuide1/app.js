//This is the component or the first item
const btn1 = document.getElementById("btn1")
//for displaying the information
btn1.addEventListener("click", () => {
//create and initialize our variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    //display message in a template
    let x = `Hello ${name}, I see that you are from 
    ${address} and you are also pursuing ${major} 
    and you can be contacted using ${telephone}`
    document.getElementById("output1").innerHTML = x;
} )

//this is the component for the second item
const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
    let totalSales = document.getElementById("totalSales").value
    let profit =  totalSales*0.23 + totalSales*1
    let showprofit = document.getElementById("profit").innerHTML= `Your annual profit is: ${profit}`
})

//this is the component for the third item
const btn3 = document.getElementById("btn3")


btn3.addEventListener("click", () => {
    let Speed = 60
    let time1 = 5
    let time2 = 8
    let time3 =10
    let distance1 = Speed*time1;
    let distance2 = Speed*time2;
    let distance3 = Speed*time3;
    let display =`The distance the car will travel in 5 hours is: ${distance1} miles <br>
    The distance the car will travel in 8 hours is: ${distance2} miles <br>
    The distance the car will travel in 12 hours is: ${distance3} miles <br>`
    document.getElementById("print").innerHTML= display

})

//this is the component for the third item
const btn4 = document.getElementById("btn4")


btn4.addEventListener("click", () => {
    let travelled = document.getElementById("travelled").value
    let gallons = document.getElementById("gallons").value
    let MiPerGal = travelled/gallons
    document.getElementById("MPG").innerHTML = `Your car travels ${MiPerGal} mile/s per gallon`

})

const btn5 = document.getElementById("btn5")


btn5.addEventListener("click", () => {
    let cel = document.getElementById("celcius").value
    let fahrenheit = ((9/5)*cel)+32
    document.getElementById("convTemp").innerHTML = `${cel} degrees Celcius in Fahrenheit is: ${fahrenheit} degrees Fahrenheit`

})

const btn6 = document.getElementById("btn6")


btn6.addEventListener("click", () => {
    let cookies = document.getElementById("cookies").value
    let cal = cookies/4*300
    document.getElementById("calorie").innerHTML = `There are ${cal} calories in ${cookies} cookies`

})

const btn7 = document.getElementById("btn7")

btn7.addEventListener("click", () => {
    let male = document.getElementById("male").value
    let female = document.getElementById("fem").value
    let malepercent = (male*1/(male*1+female*1))*100
    let femalepercent = (female*1/(male*1+female*1))*100
    document.getElementById("percentage").innerHTML=`There are ${malepercent}% males and ${femalepercent}% females`
})

    
