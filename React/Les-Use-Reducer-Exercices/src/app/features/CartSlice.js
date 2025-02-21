import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Tableau pour stocker les pizzas dans le panier
  },
  reducers: {
    addToCart: (state, action) => {
      const pizza = action.payload;
      const existingPizza = state.items.find((item) => item.id === pizza.id);

      if (existingPizza) {
        existingPizza.quantity += 1;
      } else {
        state.items.push({ ...pizza, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const pizzaId = action.payload;
      state.items = state.items.filter((item) => item.id !== pizzaId);
    },
    incrementQuantity: (state, action) => {
      const pizzaId = action.payload;
      const pizza = state.items.find((item) => item.id === pizzaId);
      if (pizza) {
        pizza.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const pizzaId = action.payload;
      const pizza = state.items.find((item) => item.id === pizzaId);
      if (pizza && pizza.quantity > 1) {
        pizza.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
