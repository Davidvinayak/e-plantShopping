import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart items array
  },
  reducers: {
    // Add item or increase quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
      }
    },

    // Remove item completely by name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Update quantity of existing item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// ✅ Export action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export reducer to use in store.js
export default CartSlice.reducer;
