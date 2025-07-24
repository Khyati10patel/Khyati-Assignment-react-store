import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p className="text-green-600 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-xl mt-4">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;