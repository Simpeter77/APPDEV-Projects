const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
// #f15025 #AA0123 #ADF000 sample outputs
const quoutes = [
    "Don't explain your philosophy. Embody it.",
    "Wealth consists not in having great possesions, but in having few wants.",
    "If you want to improve, be content to be thought foolish and stupid",
    "It is impossible for a man to learn what he thinks he already knows",
    "He who laughs at himself never runs out of thingsto laugh at"
]
const btn = document.getElementById('btn')
const quoute = document.querySelector('.epictetus')
btn.addEventListener('click', ()=>{
    let hexColor = '#'
    for (let i =0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }
    quoute.textContent = quoutes[getRandomNumberQuoute()]
    document.body.style.backgroundColor = hexColor
})
getRandomNumberQuoute = () => {
    return Math.floor(Math.random() * quoutes.length)
}
getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}