// ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow hover:shadow-xl transition">
  <Link to={`/product/${product.id}`}>
    <img
      src={product.image}
      alt={product.title}
      className="h-40 object-contain mx-auto mb-2"
    />
    <h2 className="text-sm font-semibold line-clamp-2">{product.title}</h2>
    <p className="text-blue-600 font-bold mt-1">${product.price}</p>
  </Link>
</div>

  );
}
