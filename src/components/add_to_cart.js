import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const buynow=(e)=>{
    setTimeout(() => {
               
      window.location.replace("/booking");
      
      
      
    });
  }
  


  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cardTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();


  if (isEmpty) return <h1 className="text-center">Your card is Empty</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) Total Items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={'http://localhost:90/'+item.image} style={{ height: "6rem" }} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <button
                      className="btn btn-danger-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger-info ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <div className="col-auto ms-auto">
          <h2> Total: Rs. {cardTotal}</h2>
        </div> */}
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            {" "}
            Clear Cart
          </button>
          <button className="btn btn-primary" onClick={() => buynow()}> Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
