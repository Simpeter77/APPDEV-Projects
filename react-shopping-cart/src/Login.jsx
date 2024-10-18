import Shop from "./Shop"
import { useState } from "react"
import AdminPanel from "./AdminPanel"
export default function Login(){
    let items = [{id:1 ,name: "grapes" ,price: 50},
            {id:2 ,name: "orange" ,price: 20},
            {id:3 ,name: "pickles" ,price: 40},]

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
            <div className="">
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