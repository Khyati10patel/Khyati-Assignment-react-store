import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        className="w-full h-40 object-contain mb-2"
      />
      <h2 className="text-lg font-semibold truncate">{product.title}</h2>
      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      <div className="flex justify-between mt-3">
        <span className="font-bold text-green-600">${product.price}</span>
        <button onClick={handleAddToCart} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;