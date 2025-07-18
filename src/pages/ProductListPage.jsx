import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { setSearch, setCategory, setSort } from "../features/filters/filtersSlice";
import ProductCard from "../components/ProductCard";

export default function ProductListPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const { search, category, sort } = useSelector((state) => state.filters);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(debouncedSearch));
    }, 500);
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  const filtered = products
    .filter((p) => category === "all" || p.category === category)
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6 bg-white p-4 rounded shadow">
  <input
    type="text"
    placeholder="Search products..."
    value={debouncedSearch}
    onChange={(e) => setDebouncedSearch(e.target.value)}
  />
  <select value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
    <option value="all">All Categories</option>
    <option value="men's clothing">Men</option>
    <option value="women's clothing">Women</option>
    <option value="electronics">Electronics</option>
    <option value="jewelery">Jewelry</option>
  </select>
  <select value={sort} onChange={(e) => dispatch(setSort(e.target.value))}>
    <option value="default">Sort by</option>
    <option value="low">Price: Low to High</option>
    <option value="high">Price: High to Low</option>
  </select>
</div>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
