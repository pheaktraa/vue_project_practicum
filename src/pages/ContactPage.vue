<template>
  <div class="flex flex-col min-h-screen">
  
    <!-- Main Content -->
    <main class="flex-grow">
      <div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 opacity-30 pointer-events-none">
          <div class="absolute inset-0 bg-purple-200/5" :style="{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }"></div>
        </div>

        <!-- Navigation link -->
        <div class="absolute top-3 left-3 z-10 sm:top-4 sm:left-4 md:top-6 md:left-6">
          <router-link to="/"
            class="inline-flex items-center gap-1 sm:gap-2 bg-purple-700/90 backdrop-blur-sm border border-white/20 text-white sm:px-2.5 px-2 py-1 sm:py-2 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-105 text-[10px] sm:text-xs md:text-sm">
            <ArrowLeft class="w-3 h-3 md:w-5 md:h-5 sm:w-3 sm:h-3" :color="'white'" />
            <span class="pl-0.5">Back to Home</span>
          </router-link>
        </div>

        <!-- Form Container -->
        <div class="container mx-auto px-2 sm:px-4 py-8 flex items-center justify-center min-h-screen">
          <div class="w-full max-w-lg md:max-w-2xl">
            <!-- Header -->
            <div class="text-center my-8 md:mb-12 animate-fade-in">
              <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-purple-700 tracking-wide">
                CONTACT US
              </h1>
              <p class="text-base md:text-lg text-purple-800 max-w-xl mx-auto leading-relaxed">
                You can reach out for our help via email by filling the information down below.
              </p>
            </div>

            <!-- Form -->
            <div class="bg-white/90 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-2xl animate-scale-in">
              <h2 class="text-xl md:text-2xl font-semibold text-purple-700 mb-6 md:mb-8 text-center tracking-wide">
                YOUR INFORMATION
              </h2>

              <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
                <!-- First Name and Last Name -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div class="flex flex-col space-y-2">
                    <label for="firstName" class="text-purple-700 font-medium">First Name</label>
                    <input id="firstName" name="firstName" v-model="formData.firstName" required
                      class="bg-white border border-purple-200 text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-purple-400 transition-all duration-300 rounded-xl h-11 md:h-12 pl-3 md:pl-4 text-sm md:text-base"
                      placeholder="Enter your first name" />
                  </div>
                  <div class="flex flex-col space-y-2">
                    <label for="lastName" class="text-purple-700 font-medium">Last Name</label>
                    <input id="lastName" name="lastName" v-model="formData.lastName" required
                      class="bg-white border border-purple-200 text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-purple-400 transition-all duration-300 rounded-xl h-11 md:h-12 pl-3 md:pl-4 text-sm md:text-base"
                      placeholder="Enter your last name" />
                  </div>
                </div>

                <!-- Email and Phone -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div class="flex flex-col space-y-2">
                    <label for="email" class="text-purple-700 font-medium">Email</label>
                    <input id="email" name="email" v-model="formData.email" type="email" required
                      class="bg-white border border-purple-200 text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-purple-400 transition-all duration-300 rounded-xl h-11 md:h-12 pl-3 md:pl-4 text-sm md:text-base"
                      placeholder="example@gmail.com" />
                  </div>
                  <div class="flex flex-col space-y-2">
                    <label for="phone" class="text-purple-700 font-medium">Phone Number</label>
                    <input id="phone" name="phone" v-model="formData.phone" type="tel" required
                      class="bg-white border border-purple-200 text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-purple-400 transition-all duration-300 rounded-xl h-11 md:h-12 pl-3 md:pl-4 text-sm md:text-base"
                      placeholder="Enter your phone number" />
                  </div>
                </div>

                <!-- Message -->
                <div class="flex flex-col space-y-2">
                  <label for="message" class="text-purple-700 font-medium">Your Message</label>
                  <textarea id="message" name="message" v-model="formData.message" required
                    class="bg-white border border-purple-200 text-gray-800 placeholder:text-gray-500 focus:bg-white focus:border-purple-400 transition-all duration-300 rounded-xl min-h-28 md:min-h-32 resize-none pt-2 md:pt-3 pl-3 md:pl-4 text-sm md:text-base"
                    placeholder="Tell us how we can help you..."></textarea>
                </div>

                <!-- Privacy -->
                <div class="bg-purple-50 border border-purple-100 rounded-xl p-3 md:p-4 mt-4 md:mt-6">
                  <p class="text-xs md:text-sm text-purple-700 leading-relaxed">
                    By submitting this form, you agree to our processing of your personal data in
                    accordance with our Privacy Policy.
                    We respect your privacy and will only use your information to respond to your
                    inquiry.
                    Your data will not be shared with third parties without your explicit consent.
                  </p>
                </div>

                <!-- Submit Button -->
                <div class="pt-2 md:pt-4">
                  <button type="submit"
                    class="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-0">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ArrowLeft, ArrowUp } from 'lucide-vue-next'

// const { toast } = useToast()

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
})

const handleSubmit = () => {
    console.log('Form submitted:', formData.value)
    toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. We'll get back to you soon."
    })

    formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
}
</script>
