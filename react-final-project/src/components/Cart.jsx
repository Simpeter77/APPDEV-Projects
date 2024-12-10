import { useState } from "react";
import Products from "./Products";

function Cart({ cart, removeFromCart, keyboards, clearCart: parentClearCart }) {
    const [showCheckout, setShowCheckout] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        paymentAmount: "",
    });
    const [receipt, setReceipt] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const shopTotal = cart.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
    );

    const handlePayment = () => {
        const { cardNumber, expirationDate, cvv, paymentAmount } = paymentDetails;
    
        const cardNumberValid = /^\d{16}$/.test(cardNumber);
        const expirationDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate);
        const cvvValid = /^\d{3,4}$/.test(cvv);
        const payment = parseFloat(paymentAmount);
        const paymentAmountValid = !isNaN(payment) && payment > 0;
    
        if (expirationDateValid) {
            const [month, year] = expirationDate.split("/").map(Number);
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear() % 100;
            const currentMonth = currentDate.getMonth() + 1;
    
            if (year < currentYear || (year === currentYear && month < currentMonth)) {
                setErrorMessage("Your card is expired.");
                return;
            }
        }
    
        if (!cardNumberValid) {
            setErrorMessage("Invalid card number. It should be 16 digits.");
        } else if (!expirationDateValid) {
            setErrorMessage("Invalid expiration date. Use MM/YY format.");
        } else if (!cvvValid) {
            setErrorMessage("Invalid CVV. It should be 3-4 digits.");
        } else if (!paymentAmountValid) {
            setErrorMessage("Invalid payment amount. Please enter a positive number.");
        } else if (payment < shopTotal) {
            setErrorMessage(`Insufficient balance. You need ₱${(shopTotal - payment).toFixed(2)} more.`);
        } else {
            setErrorMessage("");
            setReceipt({
                items: cart,
                totalAmount: shopTotal,
                paymentAmount: payment,
                change: payment - shopTotal,
            });
        }
    };
    
    const clearCart = () => {
        parentClearCart();
        setPaymentDetails({
            cardNumber: "",
            expirationDate: "",
            cvv: "",
            paymentAmount: "",
        });
        setShowCheckout(false);
        setErrorMessage("");
        setReceipt(null);
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
                            <span className="item-qty">
                                ₱{item.price} x {item.quantity}
                            </span>
                            <span className="item-total">
                                ₱{(item.price * item.quantity).toFixed(2)}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="footer">
                    <div className="total">
                        <span>Total</span>
                        <span>₱{receipt.totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="payment">
                        <span>Payment</span>
                        <span>₱{receipt.paymentAmount.toFixed(2)}</span>
                    </div>
                    <div className="change">
                        <span>Change</span>
                        <span>₱{receipt.change.toFixed(2)}</span>
                    </div>
                </div>
                <div className="thank-you">
                    <p>Thank you for your purchase!</p>
                </div>
                <button className="close-button" onClick={clearCart}>
                    Close
                </button>
            </div>
        );
    };

    return (
        <>
        <div className="cart-container">
            {cart.length === 0 ? (
                <>
                    <h1 className="cart-header">Add Something to Your Cart</h1>
                    <img id="empty-cart" src="src/assets/emptyCart.png" alt="Empty Cart" />
                    <Products keyboards={keyboards} />
                </>
            ) : (
                <>
                    <hr />
                    <h1 className="cart-header">What's in Your Cart:</h1>
                    {cart.map((cartItem, index) => (
                        <div className="cart-details" key={index}>
                            <img src={cartItem.img} alt={cartItem.name} width="50" />
                            <p>{cartItem.name}</p>
                            <p>₱{cartItem.price}</p>
                            <p>Switch: {cartItem.switch}</p>
                            <p>Quantity: {cartItem.quantity}</p>
                            <button onClick={() => removeFromCart(cartItem)}>Remove</button>
                        </div>
                    ))}
                    <h3 id="shop-total">Total Price: ₱{shopTotal}</h3>
                    <button id="checkout" onClick={() => setShowCheckout(true)}>
                        Proceed to Checkout
                    </button>

                    {showCheckout && (
                        <div className="checkout-form">
                            <h2>Payment Details</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="cardNumber">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={paymentDetails.cardNumber}
                                        onChange={handleInputChange}
                                        placeholder="Enter card number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="expirationDate">Expiration Date</label>
                                    <input
                                        type="text"
                                        id="expirationDate"
                                        name="expirationDate"
                                        value={paymentDetails.expirationDate}
                                        onChange={handleInputChange}
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvv">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        value={paymentDetails.cvv}
                                        onChange={handleInputChange}
                                        placeholder="Enter CVV"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="paymentAmount">Payment Amount</label>
                                    <input
                                        type="number"
                                        id="paymentAmount"
                                        name="paymentAmount"
                                        value={paymentDetails.paymentAmount}
                                        onChange={handleInputChange}
                                        placeholder="Enter payment amount"
                                        required
                                    />
                                </div>
                                <button type="button" onClick={handlePayment}>
                                    Submit Payment
                                </button>
                                {errorMessage && <p className="error-message">{errorMessage}</p>}
                            </form>
                        </div>
                    )}
                     {receipt && renderReceipt()}
                    <h1 id="recommended">You May Also Like</h1>
                    <Products keyboards={keyboards} />
                </>
            )}
        </div>
        </>
    );
}

export default Cart;
