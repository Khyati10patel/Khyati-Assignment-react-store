// productsThunks.js
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      return await res.json();
    }
  );
  