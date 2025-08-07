import { defineStore } from 'pinia';
import axios from 'axios';

const detailcard = defineStore('detailcard', {
  state: () => ({
    repository: [],
  }),
  actions: {
    async fetchLipbutter() {
      const res = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick');
      this.repository.push(...res.data);
    },
    async fetchLipoil() {
      const res = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lip_gloss&product_type=lipstick');
      this.repository.push(...res.data);
    },
    async fetchAll() {
      await Promise.all([this.fetchLipbutter(), this.fetchLipoil()]);
    },
  },
});

export default detailcard;
