import React, { useState } from "react";
import Login from "./Login";

export default function Shop(props) {
  const { items, isLoggedIn } = props;
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [receipt, setReceipt] = useState(null);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;  
      } else {
        updatedCart.push({ ...item, quantity: 1 });  
      }

      updateTotal(updatedCart);
      return updatedCart;
    });
  };

  const updateTotal = (updatedCart) => {
    const newTotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const handlePayment = () => {
    const payment = parseFloat(paymentAmount);

    if (isNaN(payment) || payment <= 0) {
      setErrorMessage("Please enter a valid payment amount.");
    } else if (payment < total) {
      setErrorMessage(`Insufficient balance. You need $${(total - payment).toFixed(2)} more.`);
    } else {
      setReceipt({
        items: cart,
        totalAmount: total,
        paymentAmount: payment,
        change: payment - total,
      });
      clearCart();
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setPaymentAmount("");
    setErrorMessage("");
  };

  const renderItems = () => {
    return (
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-container">
            <img src={item.img} alt={item.name} />
            <li>{item.name}</li>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };

  const renderCart = () => {
    return (
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id}>
            <li>{item.name} (x{item.quantity})</li>
            <p>Price: ${item.price} each</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  };

  const renderReceipt = () => {
    return (
      <div className="receipt-container">
        <div className="header">
          <h3>Receipt</h3>
        </div>
        <div className="items-container">
          {receipt.items.map((item) => (
            <div key={item.id} className="receipt-item">
              <span className="item-name">{item.name}</span>
              <span className="item-qty">x{item.quantity}</span>
              <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="footer">
          <div className="total">
            <span>Total</span>
            <span>${receipt.totalAmount.toFixed(2)}</span>
          </div>
          <div className="payment">
            <span>Payment</span>
            <span>${receipt.paymentAmount.toFixed(2)}</span>
          </div>
          <div className="change">
            <span>Change</span>
            <span>${receipt.change.toFixed(2)}</span>
          </div>
        </div>
        <div className="thank-you">
          <p>Thank you for your purchase!</p>
        </div>
        <button className="close-button" onClick={() => setReceipt(null)}>Close</button>
      </div>
    );
  };

  if (!isLoggedIn) return <Login />;

  return (
    <div className="Shop">
      <h1>Welcome to the Shop</h1>
      
      <h3>Items for Sale</h3>
      {renderItems()}

      <h4>Your Cart</h4>
      {renderCart()}

      <h4>Total: ${total.toFixed(2)}</h4>

      <input
        type="number"
        value={paymentAmount}
        onChange={(e) => setPaymentAmount(e.target.value)}
        placeholder="Enter payment amount"
        min="0"
      />
      <br />
      <button onClick={handlePayment}>Proceed to Payment</button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {receipt && renderReceipt()}
    </div>
  );
}
