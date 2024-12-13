import { useState, useEffect } from "react";

export default function Artisan({ artisan }) {
  useEffect(()=>{
    window.scrollTo(0,0);
},[]);
  const [gasket, setGasket] = useState(null);
  const [switches, setSwitches] = useState(null);
  const [keycap, setKeycap] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    paymentAmount: "",
  });
  const [receipt, setReceipt] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGasketChange = (selectedGasket) => {
    setGasket(selectedGasket);
  };

  const handleSwitchChange = (selectedSwitch) => {
    setSwitches(selectedSwitch);
  };

  const handleKeycapChange = (selectedKeycap) => {
    setKeycap(selectedKeycap);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    return gasket?.price + switches?.price + keycap?.price || 0;
  };

  const handlePayment = () => {
    const { cardNumber, expirationDate, cvv, paymentAmount } = paymentDetails;
    const totalPrice = calculateTotal();

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
    } else if (payment < totalPrice) {
      setErrorMessage(`Insufficient balance. You need ₱${(totalPrice - payment).toFixed(2)} more.`);
    } else {
      setErrorMessage("");
      setReceipt({
        gasket,
        switches,
        keycap,
        totalAmount: totalPrice,
        paymentAmount: payment,
        change: payment - totalPrice,
      });
    }
  };

  const clearSelections = () => {
    setGasket(null);
    setSwitches(null);
    setKeycap(null);
    setShowCheckout(false);
    setPaymentDetails({
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      paymentAmount: "",
    });
    setErrorMessage("");
    setReceipt(null);
  };
  function renderGasket() {
    return (
      <div className="gasket-container">
        {artisan[0].gasket.map((gas, index) => (
          <div
            className="gasket-details"
            key={index}
            onClick={() => handleGasketChange(gas)}
            style={{ cursor: "pointer" }}
          >
            <img src={gas.img} alt={gas.name} className="gasket-img" />
            <div className="gasket-info">
              <p className="gasket-name">{gas.name}</p>
              <p className="gasket-price">₱{gas.price.toFixed(2)}</p>
              <p className="gasket-layout">Layout: {gas.layout}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderSwitches() {
    return (
      <div className="switches-container">
        {artisan[0].switches.map((sw, index) => (
          <div
            className="switch-details"
            key={index}
            onClick={() => handleSwitchChange(sw)}
            style={{ cursor: "pointer" }}
          >
            <img src={sw.img} alt={sw.name} className="switch-img" />
            <div className="switch-info">
              <p className="switch-color">{sw.color}</p>
              <p className="switch-price">₱{sw.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  function renderKeycaps() {
    return (
      <div className="keycap-container">
        {artisan[0].keycap.map((kc, index) => (
          <div
            className="keycap-details"
            key={index}
            onClick={() => handleKeycapChange(kc)}
            style={{ cursor: "pointer" }}
          >
            <img src={kc.img} alt={kc.name} className="keycap-img" />
            <div className="keycap-info">
              <p className="keycap-theme">{kc.theme}</p>
              <p className="keycap-price">₱{kc.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const renderReceipt = () => {
    return (
      <div className="receipt-container">
        <div className="header">
          <h3>Receipt</h3>
        </div>
        <div className="items-container">
          <div className="receipt-item">
            <span className="item-name">layout: {receipt.gasket?.layout || "No Gasket"}</span>
            <span className="item-total">₱{receipt.gasket?.price.toFixed(2) || "0.00"}</span>
          </div>
          <div className="receipt-item">
            <span className="item-name">switch: {receipt.switches?.color || "No Switch"}</span>
            <span className="item-total">₱{receipt.switches?.price.toFixed(2) || "0.00"}</span>
          </div>
          <div className="receipt-item">
            <span className="item-name">keycap: {receipt.keycap?.theme || "No Keycap"}</span>
            <span className="item-total">₱{receipt.keycap?.price.toFixed(2) || "0.00"}</span>
          </div>
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
        <button className="close-button" onClick={clearSelections}>
          Close
        </button>
      </div>
    );
  };

  return (
    <div className="artisan">
      <h1>Choose Your Keyboard Components</h1>
      <h2>Gaskets</h2>
      {renderGasket()}
      <h2>Switches</h2>
      {renderSwitches()}
      <h2>Keycaps</h2>
      {renderKeycaps()}
      <hr />
      <h1>Selected Components</h1>
      <div className="selected-components">
        <div>
          {gasket ? (
            <div className="artisan-cart">
              <p>{gasket.layout}</p>
              <img src={gasket.img} alt={gasket.name} className="selected-gasket-img" />
              <p>₱{gasket.price}</p>
            </div>
          ) : (
            <p>No gasket selected</p>
          )}
        </div>
        <div>
          {switches ? (
            <div className="artisan-cart">
              <p>{switches.color}</p>
              <img src={switches.img} alt={switches.name} className="selected-switch-img" />
              <p>₱{switches.price}</p>
            </div>
          ) : (
            <p>No switch selected</p>
          )}
        </div>
        <div>
          {keycap ? (
            <div className="artisan-cart">
              <p>{keycap.theme}</p>
              <img src={keycap.img} alt={keycap.name} className="selected-keycap-img" />
              <p>₱{keycap.price}</p>
            </div>
          ) : (
            <p>No keycap selected</p>
          )}
        </div>
        <div>
          {keycap && switches && gasket ? (
            <div className="artisan-checkout">
              <p>Total: ₱{calculateTotal()}</p>
              <button id="artisan-button" onClick={() => setShowCheckout(true)}>
                Checkout
              </button>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
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
    </div>
  );
}
