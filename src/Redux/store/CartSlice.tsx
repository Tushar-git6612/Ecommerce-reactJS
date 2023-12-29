import { createSlice } from "@reduxjs/toolkit";
// import product1 from "../../images/product-1.png";
// import product2 from "../../images/product-2.png";

// const cart:{}[] = [
//    {
//       id: 1,
//       image: product1,
//       title: "LifeStyle",
//       description: "Nike Free RN 2019 iD",
//       price: "120.00",
//     },
//     {
//       id: 2,
//       image: product2,
//       title: "LifeStyle",
//       description: "Nike Free RN 2019 iD",
//       price: "150.00",
//       offPercent: "50%",
//       offPrice: "75.00",
//     },
// ]

const cartSlice = createSlice({
  name: "cartSlice",
  // empty cartSlice state
  initialState: [],
  reducers: {
    // that function run operation when user click add to cart button
    addToCart: (state: any, action: { payload: any; type: any }): [] => {
      let combineArray:{}[] = [...state, action.payload];
      let resultOfFilter:{}[] = combineArray.reduce((acc:any, item:{}):any => {
        return acc.includes(item) ? acc : [...acc,item];
      },[]);
      state = resultOfFilter;
      return state;
    },
    // that funtion run opertion to remove the item from cartSlice
    removeFromCart: (state: any, action: { payload: any; type: any }): [] => {
      let newData: {}[] = state.filter(
        (item: any) => item?.id !== action.payload.id
      );
      state = newData;
      return state;
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
