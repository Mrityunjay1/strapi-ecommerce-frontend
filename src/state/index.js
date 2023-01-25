import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.items = action.payload;
    },
    addTocart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].count += 1;
      } else {
        const tempProduct = { ...action.payload.item, cartCount: 1 };
        state.cart.push(tempProduct);
      }

      // state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count--;
        }
        return item;
      });
    },
    clearCart: (state, actions) => {
      state.cart = [];
    },
    setOpenCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItem,
  addTocart,
  removeFromCart,
  incCount,
  decCount,
  setOpenCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
