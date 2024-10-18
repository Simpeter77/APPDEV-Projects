import React, {useState} from "react"
export default function Shop(props){
    let ShopItems = props.items
    const [cart, setCart]=useState([])

    function addItem(item){
        setCart(c=>[...c,item])
    }

    const renderItems = () => {
        return(
            ShopItems.map((item) => {
                return(
                    <>
                    <hr />
                    <li key = {item.id}> {item.name} </li>
                    <p>Price:${item.price}</p>
                    <button onClick={() => addItem(item)}>Add to Cart</button>
                    <hr />
                    </>
                )
            })
        )
    }

    const renderCart = () => {
        return(
            cart.map((product)=>{
                return(
                    <>
                        <hr />
                        <li key={product.id}>{product.name}</li>
                        <p>Price:${product.price}</p>
                        <br />
                        <hr />
                    </>
                )
            })
        )
    }

    if(props.isLoggedIn === false){
        return<Login/>
    }
    else{
        return(
            <div className="Shop">
            <h1>This is the shop</h1>
            <ul>{renderItems()}</ul>
            <h4>This are the cart items</h4>
            <ul>{renderCart()}</ul>
            </div>
        )
    }
}