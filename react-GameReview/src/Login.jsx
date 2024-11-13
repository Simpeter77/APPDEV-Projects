import {useState} from 'react'
import Reviews from './Reviews'
export default function Login(props) {
    const account = {
        username: "admin",
        password: "admin"
    }
    const [userName,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function handleUserNameChange(event){
        setUserName(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleLogin(){
        if(account.username === userName && account.password === password){
            setIsLoggedIn(true)
        }
        else{
            {renderLoginForm}
        }
    }
    const renderLoginForm = () => {
        return(
            <div>
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            Username: 
            <input type="text" name="username" id="username" onChange={handleUserNameChange} value={userName} />
            <br />
            <br />
            Password:
            <input type="password" name="password" id="password" onChange={handlePasswordChange} value={password}/>
            <br />
            <br />
            <button type="button" onClick={handleLogin}>Login</button>
            </div>
        );
    }
    const renderReview = () =>{
        return(
            <>
            <Reviews/>
            </>
        )
    }
    return (
        <div>
          {isLoggedIn ? (renderReview()) : (renderLoginForm())}
        </div>
      );
}