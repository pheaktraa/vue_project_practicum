<!-- src/components/ProductShowcase.vue (without Card/CardContent) -->
<template>
    <section class="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of skincare essentials, loved by thousands of customers
          </p>
          <div class="mt-4">
            <p class="text-gray-600">{{ products.length }} products available</p>
          </div>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="product in products"
            :key="product.id"
            class="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white rounded-xl"
          >
            <div class="p-0">
              <div class="relative">
                <span
                  v-if="product.isBestSeller"
                  class="absolute top-3 left-3 z-10 bg-purple-600 text-white font-semibold px-3 py-1 text-sm rounded"
                >
                  Best Seller
                </span>
                <span
                  v-if="product.isOnSale"
                  class="absolute top-3 right-12 z-10 bg-red-500 text-white font-semibold px-3 py-1 text-sm rounded"
                >
                  Sale
                </span>
                <button
                  class="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <Heart class="w-4 h-4" />
                </button>
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
  
              <div class="p-6">
                <div class="flex items-center gap-1 mb-2">
                  <Star
                    v-for="i in 5"
                    :key="i"
                    class="w-4 h-4"
                    :class="i <= product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'"
                  />
                  <span class="text-sm text-gray-500 ml-1">({{ product.reviews }})</span>
                </div>
  
                <h3 class="font-bold text-lg mb-1 text-gray-900">{{ product.name }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ product.function }}</p>
  
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl font-bold text-purple-600">${{ product.price }}</span>
                    <span
                      v-if="product.originalPrice"
                      class="text-lg text-gray-400 line-through"
                    >
                      ${{ product.originalPrice }}
                    </span>
                  </div>
                  <button class="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 py-2 text-sm flex items-center gap-1">
                    <ShoppingBag class="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { Heart, ShoppingBag, Star } from 'lucide-vue-next';
  
  export default {
    name: 'ProductShowcase',
    components: {
      Heart,
      ShoppingBag,
      Star,
    },
    data() {
      return {
        products: [
          // same product list as above
          {
            id: 1,
            name: 'Product 1',
            description: 'Description 1',
            image: 'https://a.espncdn.com/i/headshots/nba/players/full/1966.png',
          },
          {
            id: 2,
            name: 'Product 2',
            description: 'Description 2',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 3,
            name: 'Product 3',
            description: 'Description 3',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 4,
            name: 'Product 4',
            description: 'Description 4',
            image: 'https://via.placeholder.com/150',
          },
          
        ],
      };
    },
  };
  </script>
  