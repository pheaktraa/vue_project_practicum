<template>
  <section class="bg-gradient-to-br from-[#F5F1E8] via-[#F0EDF4] to-[#E8E1F0] py-20">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-8">
          <div class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
            SALE 35% OFF
          </div>

          <h1 class="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Radiant Skin
            <span class="block text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">
              Starts Here
            </span>
          </h1>

          <p class="text-xl text-gray-600 max-w-lg leading-relaxed">
            Discover the perfect skincare routine with our luxurious collection of natural,
            science-backed products designed to transform your skin.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <button
              class="flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full text-lg shadow-lg"
            >
              <ShoppingBag class="w-5 h-5 mr-2" />
              Shop Now
            </button>
            <button
              class="border border-purple-300 text-purple-700 hover:bg-purple-700 hover:text-white duration-300 px-8 py-4 rounded-full text-lg"
            >
              Learn More
            </button>
          </div>
        </div>

        <!-- Image Content -->
        <div class="relative">
          <div class="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60 blur-3xl"></div>
            <img
              src="../assets/vue.svg"
              alt="Premium skincare serum with natural ingredients"
              class="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                <span class="text-sm font-medium text-gray-700">100% Natural</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShoppingBag } from 'lucide-vue-next'
</script>
