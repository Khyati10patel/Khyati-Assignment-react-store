import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    toggleFavourite(state, action) {
      const id = action.payload;
      if (state.includes(id)) {
        return state.filter((fid) => fid !== id);
      } else {
        return [...state, id];
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;