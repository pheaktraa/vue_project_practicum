<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="space-y-6">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">C</span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Celeste Skincare</h3>
              <p class="text-sm text-purple-300">Glow Naturally, Shine Elegantly</p>
            </div>
          </div>
          <div class="flex space-x-4">
            <Facebook class="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            <Instagram class="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            <Twitter class="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            <div class="w-6 h-6 bg-gray-400 hover:bg-purple-400 cursor-pointer transition-colors rounded flex items-center justify-center">
              <span class="text-xs font-bold">TT</span>
            </div>
          </div>
        </div>

        <!-- Shop Links -->
        <div>
          <h4 class="font-semibold text-lg mb-4 text-purple-300">Shop</h4>
          <ul class="space-y-2 text-gray-300">
            <li class="hover:text-purple-400 cursor-pointer transition-colors">Bestsellers</li>
            <li class="hover:text-purple-400 cursor-pointer transition-colors">New Arrivals</li>
            <li class="hover:text-purple-400 cursor-pointer transition-colors">By Skin Type</li>
            <li class="hover:text-purple-400 cursor-pointer transition-colors">Gift Sets</li>
            <li class="hover:text-purple-400 cursor-pointer transition-colors">Sale Items</li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="font-semibold text-lg mb-4 text-purple-300">Customer Service</h4>
          <ul class="space-y-2 text-gray-300">
            <li class="hover:text-purple-400 cursor-pointer transition-colors">Contact Us</li>
            <li class="hover:text-purple-400 cursor-pointer transition-colors">FAQ</li>
            <li class="hover:text-purple-400 cursor-pointer transition-colors">Shipping Info</li>
            <li class="hover:text-purple-400 cursor-pointer transition-colors">Returns</li>
            <li class="hover:text-purple-400 cursor-pointer transition-colors">Size Guide</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold text-lg mb-4 text-purple-300">Get In Touch</h4>
          <div class="space-y-3 text-gray-300">
            <p class="hover:text-purple-400 cursor-pointer transition-colors">support@celesteskincare.com</p>
            <p class="hover:text-purple-400 cursor-pointer transition-colors">(+855) 12-345-678</p>
            <div class="pt-4">
              <p class="text-sm text-gray-400 mb-2">We Accept:</p>
              <div class="flex space-x-2">
                <div class="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center font-bold">VISA</div>
                <div class="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center font-bold text-white">MC</div>
                <div class="w-8 h-5 bg-blue-500 rounded text-xs flex items-center justify-center font-bold text-white">PP</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">© 2024 Celeste Skincare. All rights reserved.</p>
        <div class="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
          <span class="hover:text-purple-400 cursor-pointer transition-colors">Privacy Policy</span>
          <span class="hover:text-purple-400 cursor-pointer transition-colors">Terms of Service</span>
          <span class="hover:text-purple-400 cursor-pointer transition-colors">Cookie Policy</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Twitter } from 'lucide-vue-next'
</script>
