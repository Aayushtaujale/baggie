import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
import '../styles/khalti.css'

export default function Khalti() {
  let checkout = new KhaltiCheckout(config);
  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
    
  };
  return (
    <div className="firsttop">
      <h1>Payments</h1>
    <div className="style">
      <button
        style={buttonStyles}
        onClick={() => checkout.show({ amount: 10000 })}
      >
        Pay via Khalti
      </button>
      <br/>
      <br/>
      <button type="button" class="btn btn-success">eSewa</button>
      <br/>
      <br/>
      <button type="button" class="btn btn-danger">PayPal</button>
    </div>
    </div>
  );
}
