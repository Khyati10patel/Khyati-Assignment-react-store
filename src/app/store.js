//store.js

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import filtersReducer from "../features/filters/filtersSlice";
import favouritesReducer from "../features/favourites/favouritesSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    favourites: favouritesReducer,
  },
});