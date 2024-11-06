import Shop from "./Shop"
import { useState } from "react"
import AdminPanel from "./AdminPanel"
export default function Login(){
    let items =[{id:1 ,name: "grapes" ,price: 50, img:"https://static.vecteezy.com/system/resources/thumbnails/044/868/984/small_2x/fruits-purple-grape-with-leaves-isolated-on-a-transparent-background-png.png"},
            {id:2 ,name: "oranges" ,price: 20, img:"https://i.pinimg.com/originals/7d/4d/4e/7d4d4e05feb3a49bdf499d0730eaae75.png"},
            {id:3 ,name: "kiwis" ,price: 40, img:"https://static.vecteezy.com/system/resources/previews/029/200/056/non_2x/kiwi-transparent-background-free-png.png"},
            {id:4, name:"bananas", price: 30, img: "https://clipart-library.com/image_gallery2/Banana.png"},
            {id:5, name:"cucumbers", price: 25, img:"https://wallpapers.com/images/hd/fresh-cucumber-slices-transparent-background-pioi2sene9whowhf.jpg"}
    ]

    let accounts = [{
        id: 1, username: "customer" , password: "customer", role: "customer"},
        {id: 2, username: "admin" , password: "admin", role: "admin"},
        {id: 3, username: "peter", password: "12345678", role: "admin"},
    ]

    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [role, setRole]= useState("")
    const [enteredUserNames, setEnteredUserNames] = useState("")
    const [enteredPasswords, setEnteredPasswords] = useState("")

    function getUserName(event){
        setEnteredUserNames(event.target.value)
    }
    function getPassword(event){
        setEnteredPasswords(event.target.value)
    }

    function handleLogin(){
        accounts.map((account) => {
            if(account.username === enteredUserNames
                && account.password === enteredPasswords
            ){
                setIsLoggedIn(true)
                setRole(account.role)
            }
            else{
                return(
                    <>  
                        <h1>Mali password mo</h1>
                    </>
                )
            }
        })
    }

    function renderLogin(){
        return(
            <div className="Login">
                <h1>Login: </h1>
                Username: <input type="text" placeholder="Enter your UserName" id="username" onChange={getUserName} />
                <br />
                Password: <input type="text" placeholder="Enter your Password" id="password" onChange={getPassword} />
                <br />
                <button onClick={handleLogin}>Login</button>

            </div>
        )
    }

    function renderShop(){
        return(
            <div>
                <Shop isLoggedIn={isLoggedIn} items={items}/>
            </div>
        )
    }

    function renderAdmin(){
        return(
            <AdminPanel isLoggedIn={isLoggedIn} accounts = {accounts}/>
        )
    }
    
    if(isLoggedIn === false){
        return renderLogin()
    }
    else{
        if(role ==='admin'){
            return renderAdmin()
        }
        else{
            return renderShop()
        }
    }
}