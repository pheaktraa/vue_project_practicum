import { defineStore } from 'pinia';

export default defineStore('cart', {
  state: () => ({
    items: [],
  }),

  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ product, quantity });
      }
      this.saveCart();
    },

    removeFromCart(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
      this.saveCart();
    },

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },

    loadCart() {
      const saved = localStorage.getItem('cart');
      if (saved) {
        try {
          this.items = JSON.parse(saved);
        } catch (e) {
          console.error('Failed to load cart from localStorage:', e);
        }
      }
    },

    clearCart() {
      this.items = [];
      this.saveCart();
    },
  },
});
