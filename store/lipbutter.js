import axios from 'axios'
import { defineStore } from 'pinia'

const lipbutter = defineStore('lipbutterRepository', {
    state: () => ({
        lipbutterRepository: []
    }),

    actions: {
        async fetchRepository() {
            try {
                const { data } = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick')
                this.repository = data;
                console.log(this.repository)
            } catch (error) {
                console.error('Failed to fetch lipbutter:', error)
            }
        }
    }
})

export default lipbutter

