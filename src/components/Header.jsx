import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartItems = useSelector((state) => state.cart);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow mb-6">
      <div className="flex gap-4">
        <Link to="/">Products</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/cart">Cart <span className="ml-1 text-sm bg-blue-500 text-white px-2 py-0.5 rounded-full">{itemCount}</span></Link>
      </div>
    </nav>
  );
}