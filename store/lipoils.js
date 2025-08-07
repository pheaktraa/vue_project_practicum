import axios from 'axios'
import { defineStore } from 'pinia'

const lipoil = defineStore('lipoilRepository', {
  state: () => ({
    repository: [], // ✅ fixed typo
  }),

  actions: {
    async fetchRepository() {
      try {
        const { data } = await axios.get(
          'https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lip_gloss&product_type=lipstick'
        )
        this.repository = data
        console.log('Fetched lipoil data:', this.repository)
      } catch (error) {
        console.error('Failed to fetch lipoil:', error)
      }
    },
  },
})

export default lipoil
