import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} (${item.price})
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                dispatch(
                  updateQuantity({
                    name: item.name,
                    quantity: Number(e.target.value),
                  })
                )
              }
            />
            <button onClick={() => dispatch(removeFromCart(item.name))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
