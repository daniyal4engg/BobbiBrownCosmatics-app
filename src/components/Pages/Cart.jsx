import "../styles/cart.css";
import { useCart } from "react-use-cart";
export const Cart = () => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  //   float 2 digit
  const cartTOTAL = cartTotal.toFixed(2);
  //   cartTotal = cartTotal.toFixed(2);
  //   console.log("item", items);
  if (isEmpty) {
    return <div>Cart is Empty</div>;
  }
  return (
    <div>
      {/* <div> cartTotal ({cartTotal})</div> */}

      {items.map((e) => {
        return (
          <div key={e.id} className="flex">
            <div>
              <img src={e.image_link} alt="" className="img" />
            </div>
            <div> {e.name}</div>
            <div>${e.price}</div>
            <div>{e.category}</div>
            <div className="plusMinus">
              <button
                onClick={() => updateItemQuantity(e.id, e.quantity - 1)}
                className="btnDec"
              >
                -
              </button>
              <div style={{ marginRight: "5px" }}>{e.quantity}</div>
              <button
                onClick={() => updateItemQuantity(e.id, e.quantity + 1)}
                className="btnInc"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  removeItem(e.id);
                }}
                className="removBtn"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="totalAmount">
        <h2>
          Cart Total :
          <span style={{ fontWeight: "bold" }}> $ {cartTOTAL} </span>
        </h2>
        <button onClick={emptyCart}>Clear Cart</button>
      </div>
    </div>
  );
};
