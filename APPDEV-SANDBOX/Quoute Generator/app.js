const marcus = ["The happiness of your life depends upon the quality of your thoughts.",
"Waste no more time arguing about what a good man should be. Be one.",
"The best revenge is to be unlike him who performed the injury.",
"If it is not right do not do it; if it is not true do not say it.",
"The soul becomes dyed with the color of its thoughts.",]
const colors = ['red', 'green', 'blue', 'purple', 'gold']
const btn = document.getElementById("btn")
const quoute = document.querySelector(".quoute")
let i = 0
let j = 0
btn.addEventListener("click", () => {
    console.log("document.body")
    if (i >= marcus.length){
        i = 0
    }
    quoute.textContent = marcus[i]
    i++
    if(j >= colors.length){
        j=0
    }
    document.body.style.backgroundColor = colors[j]
    j++

})