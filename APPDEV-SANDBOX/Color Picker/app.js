const colors=['green', 'red', 'rgba(133,122,200)' , '#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector(".color")
//function for changing the colors of the HTML file
btn.addEventListener('click', () => {
    console.log(document.body) // this is not required
    // this gets a random number from the function getRandomNumber()
    const randomNumber = getRandomNumber()
    //referencing the  background of the document body
    document.body.style.backgroundColor = colors[randomNumber]
    //change the text for the span tag
    color.textContent = colors[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}