
// ProductDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../features/favourites/favouritesSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const isFavourite = favourites.includes(Number(id));

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  return product ? (
    <div className="max-w-3xl mx-auto p-6 bg-white border rounded-xl shadow">
    <img
      src={product.image}
      alt={product.title}
      className="h-60 object-contain mx-auto mb-4"
    />
    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
    <p className="text-gray-500 italic mb-2">{product.category}</p>
    <p className="mb-4">{product.description}</p>
    <p className="text-xl font-bold text-blue-600">${product.price}</p>
    <button
      onClick={() => dispatch(toggleFavourite(product.id))}
      className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  </div>
  
  ) : (
    <p>Loading...</p>
  );
}
