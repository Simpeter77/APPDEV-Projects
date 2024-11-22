import { Link } from "react-router-dom"
export default function Navigation(){
    return(
        <>
        <nav>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/games'><li>Games</li></Link>
            </ul>
        </nav>
        </>
    )
}
