import { configureStore } from "@reduxjs/toolkit";
import storeProduct from "./ProductSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    products: storeProduct.reducer,
    cartSlice: cartSlice.reducer,
  },
});

store.dispatch( () => console.log(store.getState()));

export default store;
