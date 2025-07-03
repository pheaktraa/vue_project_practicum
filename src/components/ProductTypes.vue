<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of skincare solutions designed for every skin type and concern
          </p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="type in productTypes"
            :key="type.id"
            class="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white rounded-lg"
          >
            <div class="p-0">
              <div class="relative">
                <img
                  :src="type.image"
                  :alt="type.name"
                  class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 bg-white/90 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  {{ type.icon }}
                </div>
              </div>
  
              <div class="p-6">
                <h3 class="font-bold text-xl mb-2 text-gray-900">{{ type.name }}</h3>
                <p class="text-gray-600">{{ type.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProductTypes',
    data() {
      return {
        productTypes: [
          {
            id: 1,
            name: 'Face Care',
            description: 'Complete facial skincare solutions',
            image: 'https://images.unsplash.com/photo-1621091849319-7b5c8e8f5c1a?w=300&h=300&fit=crop',
            icon: '🧴',
          },
          {
            id: 2,
            name: 'Body Care',
            description: 'Nourishing body treatments',
            image: 'https://images.unsplash.com/photo-1620916297067-e6c18c4dcdde?w=300&h=300&fit=crop',
            icon: '🧴',
          },
          {
            id: 3,
            name: 'Treatment & Serums',
            description: 'Targeted skin treatments',
            image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&h=300&fit=crop',
            icon: '💧',
          },
          {
            id: 4,
            name: 'Cleansers',
            description: 'Gentle daily cleansing',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
            icon: '🧼',
          },
          {
            id: 5,
            name: 'Moisturizers',
            description: 'Hydrating skin essentials',
            image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop',
            icon: '🧴',
          },
          {
            id: 6,
            name: 'Gift Sets',
            description: 'Perfect skincare bundles',
            image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop',
            icon: '🎁',
          },
        ],
      };
    },
  };
  </script>
  