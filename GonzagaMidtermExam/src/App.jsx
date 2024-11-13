import Header from "./Header";
import Footer from "./Footer";
import Identification from "./Identification";
import FavoriteFood from "./FavoriteFood";
import Counter from "./Counter";
import Function from "./Function";
import Paragraph from "./Paragraph";
export default function App(){
  const fruits = [
    {id:1,name:"Apple",color:"Red",rating:4},
    {id:2,name:"Banana",color:"Yellow",rating:3},
    {id:3,name:"Kiwi",color:"Green",rating:5},
    {id:4,name:"Orange",color:"Orange",rating:5},
    {id:5,name:"Grapes",color:"Purple",rating:4},
  ]
  return(
    <>  
    <Header/>
    <Identification/>
    <FavoriteFood item = {fruits} type ='Fruits'/>
    <Counter/>
    <Function/>
    <Paragraph/>
    <Footer/>
    </>
    
  )
}
