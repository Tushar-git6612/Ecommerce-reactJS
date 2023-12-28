import { createSlice } from "@reduxjs/toolkit";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import product3 from "../../images/product-3.png";
import product4 from "../../images/product-4.png";
import product5 from "../../images/product-5.png";
import product6 from "../../images/product-6.png";
import product7 from "../../images/product-7.png";
import product8 from "../../images/product-8.png";

let product$: {}[] = [
  {
    id: 1,
    image: product1,
    title: "LifeStyle",
    description: "Nike Free RN 2019 iD",
    price: "120.00",
  },
  {
    id: 2,
    image: product2,
    title: "LifeStyle",
    description: "Nike Free RN 2019 iD",
    price: "150.00",
    offPercent: "50%",
    offPrice: "75.00",
  },
  {
    id: 3,
    image: product3,
    title: "LifeStyle",
    description: "Nike Free RN 2019 iD",
    price: "100.00",
  },
  {
    id: 4,
    image: product4,
    title: "LifeStyle",
    description: "Nike Free RN 2019 iD",
    price: "50.00",
  },
  {
    id: "5",
    image: product5,
    title: "LifeStyle",
    description: "Nike Free RN 2019 iD",
    price: "40.00",
  },
  {
    id: 6,
    image: product6,
    title: "LifeStyle",
    description: "Nike Free RN 2019 iD",
    price: "180.00",
    offPercent: "50%",
    offPrice: "90.00",
  },
  {
    id: 7,
    image: product7,
    title: "LifeStyle",
    description: "Nike Free RN 2019 iD",
    price: "100.00",
  },
  {
    id: 8,
    image: product8,
    title: "LifeStyle",
    description: "Nike Free RN 2019 iD",
    price: "190.00",
  },
];

const storeProduct = createSlice({
  name: "products",
  // a poduct array 
  initialState: product$,
  reducers: {
    helloWorld: (state:{}[], action:{type:any;payload:any}) => {
      console.log(state);
    },
    // a function that filter procduct array by user's price demand
    filterData: (state:{}[], action:{type:any; payload:any}) => {
      state = [...action.payload];
      return state;
    },
    // a fucntion that reset above filter fucntion
    reset: (state:{}[],action:{type:any;payload:any}) => {
      state = [...product$];
      return state;
    },
  },
});

export default storeProduct;

export const { helloWorld, filterData, reset } = storeProduct.actions;
