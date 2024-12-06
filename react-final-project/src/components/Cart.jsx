import React from "react";

function Cart({ cart }) {
    return (
        <div className="cart-container">
            <h1>What's in your cart:</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                cart.map((cartItem, index) => (
                    <div className="cart-details" key={index}>
                        <img src={cartItem.img} alt={cartItem.name} width="50" />
                        <p>{cartItem.name}</p>
                        <p>₱{cartItem.price}</p>
                        <p>Quantity: {cartItem.quantity}</p>
                        <p>Total: ₱{(cartItem.quantity * cartItem.price).toFixed(2)}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;