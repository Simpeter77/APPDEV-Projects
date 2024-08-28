let count = 0;

//select value and button

const btns = document.querySelectorAll(`.btn`)
const value = document.querySelector(`#value`)

btns.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains(`decrease`)){
            count--
        }
        else if(styles.contains(`increase`)){
            count++
        }
        else if(styles.contains(`increasebyfive`)){
            count+=5
        }
        else if(styles.contains(`decreasebyfive`)){
            count-=5
        }
        else if(styles.contains('randomize')){
            if (count>=0){
                count = Math.floor(Math.random()*-999)}
            else if(count<0){
                count = Math.floor(Math.random()*999)}
        }
        else {
            count=0
        }
        //changes colors based on count numbers
        if(count>0){
            value.style.color="green"
        }
        if(count<0){
            value.style.color="red"
        }
        if(count==0){
            value.style.color="black"
        }
        value.textContent=count
    })
})
