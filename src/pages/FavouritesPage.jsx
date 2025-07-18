import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function FavouritesPage() {
  const favourites = useSelector((state) => state.favourites);
  const allProducts = useSelector((state) => state.products.items);
  const favProducts = allProducts.filter((p) => favourites.includes(p.id));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Your Favourites</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}