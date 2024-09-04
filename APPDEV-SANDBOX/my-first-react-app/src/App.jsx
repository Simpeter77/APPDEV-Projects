import Footer from './Footer'
import Header from './Header'
import Body from './Body'
export default function App(){
    return(
        <>
            <Header /><br />
            <Body /><br />
            <Body name="James" food="burger" isHealthy= {false} age='18'></Body><br />
            <Body name="Fenzhel" food="egg" isHealthy= {true} age='18'></Body><br />
            <Body name="Will I am" food="fried chicken" isHealthy= {false} age='18'></Body><br />
            <Body name="Alredo" food="fried dumpling" isHealthy= {false} age='18'></Body><br />
            <Body name="McLovin" food="pizza" isHealthy= {false} age='18'></Body><br />
            <Footer />
        </>
    )
}