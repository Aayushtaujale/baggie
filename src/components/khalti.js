import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

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
    <div>
      <button
        style={buttonStyles}
        onClick={() => checkout.show({ amount: 1000 })}
      >
        Pay via Khalti
      </button>
    </div>
  );
}
