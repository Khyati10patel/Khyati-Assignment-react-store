import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FavouritesPage from "./pages/FavouritesPage";

export default function App() {
  return (
    <div className="p-4">
      <nav className="flex justify-between mb-6">
        <Link to="/">Products</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}