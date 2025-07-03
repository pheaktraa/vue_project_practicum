<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-sm">C</span>
          </div>
          <div>
            <h1 class="text-lg font-bold text-gray-900">Celeste Skincare</h1>
            <p class="text-xs text-purple-600">Glow Naturally, Shine Elegantly</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <a
            v-for="item in navigationItems"
            :key="item"
            href="#"
            class="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            {{ item }}
          </a>
        </nav>

        <!-- User Actions -->
        <div class="flex items-center space-x-4">
          <button class="hidden md:flex text-purple-600 hover:text-purple-700 text-sm px-3 py-1 rounded">
            Sign Up
          </button>
          <router-link to="/home">
            <button class="hidden md:flex bg-purple-600 hover:bg-purple-700 text-white text-sm px-6 py-1 rounded-full">
              Log In
            </button>
          </router-link>
          <button class="p-2">
            <ShoppingBag class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Button -->
          <button class="lg:hidden p-2" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <Menu class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="lg:hidden py-4 border-t">
        <nav class="flex flex-col space-y-3">
          <a
            v-for="item in navigationItems"
            :key="item"
            href="#"
            class="text-gray-700 hover:text-purple-600 transition-colors font-medium px-2"
          >
            {{ item }}
          </a>
          <div class="flex flex-col space-y-2 pt-3 border-t">
            <button class="text-purple-600 hover:text-purple-700 text-sm text-left px-3 py-1">
              Sign Up
            </button>
            <button class="bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 rounded-full">
              Log In
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, ShoppingBag } from 'lucide-vue-next' // You must install lucide-vue-next

const isMobileMenuOpen = ref(false)

const navigationItems = [
  "Bestsellers",
  "New Arrivals", 
  "By Skin Type",
  "Cleansers",
  "Serums",
  "Moisturizers"
]
</script>
