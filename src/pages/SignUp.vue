<template>
  <!-- Back button is so out of place, should be remove? -->

  <!-- <button type="button" class=" text-xl p-5 text-center inline-flex items-center gap-2">
    <svg class=" w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    <p class="font-bold pb-1">Back</p>
  </button> -->

  <!-- my-18 if use back button -->
  <div class="flex flex-col items-center justify-center my-18 "> 
    <form class="w-[550px] bg-white shadow-2xl rounded-2xl p-12">
      <div class="mx-8 space-y-4">
        <!-- Head -->
        <div class="text-center text-4xl font-bold">Create A New Account</div>
        <div class="text-center font-semibold">Welcome to Celeste Skincare</div>

        <!-- Form -->
        <div class="mb-5 mt-5">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
          <input type="username" id="username" class="bg-slate-100 border border-gray-100 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none hover:ring-1 hover:ring-violet-400" placeholder="Username" required />
        </div>

        <div class="mb-5 mt-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
          <input type="email" id="email" class="bg-slate-100 border border-gray-100 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none hover:ring-1 hover:ring-violet-400" placeholder="Email" required />
        </div>

        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type="password" id="password" class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none hover:ring-1 hover:ring-violet-400" placeholder="Password" required />
        </div>

        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
          <input type="password" id="confirmPassword" class="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none hover:ring-1 hover:ring-violet-400" placeholder="Re-enter your password" required />
        </div>

        <!-- Terms and Conditions -->
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 hover:ring-2 hover:ring-violet-300" required />
          </div>
          <label for="remember" class="ms-2 text-sm font-sm text-gray-900">I have read and agree to the</label>
          <a href="#" class="ms-1 text-sm text-[#8677BC] underline">Terms & Conditions</a>
        </div>

        <div class="flex justify-center my-6">
          <button type="submit" class="text-white bg-[#8677BC] hover:bg-[#7060AA] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Sign Up</button>
        </div>

        <!-- Sign up with social -->
        <div class="flex justify-center">
          <span class="text-sm text-grey-900">_________________ Or Sign-Up with _________________</span> 
        </div>
        
        <div class="flex justify-center gap-2">
          <a href="#" class="text-blue-700 my-2">
            <button type="button" class="border-[#8677BC] text-gray-900 hover:bg-violet-100 font-medium text-sm text-center inline-flex items-center border rounded-xl px-10 py-2.5 hover:ring-1 hover:ring-violet-200">
              <img src="/src/assets/google.png" alt="google logo" class="w-4 h-4 me-2">
              Google
            </button>
          </a>
          
          <a href="#" class="text-blue-700 my-2">
            <button type="button" class="border-[#8677BC] text-gray-900 hover:bg-violet-100 font-medium text-sm text-center inline-flex items-center border rounded-xl px-10 py-2.5 hover:ring-1 hover:ring-violet-200">
              <img src="/src/assets/facebook.png" alt="facebook logo" class="w-5 h-5 me-2">
              Facebook
            </button>
          </a>
        </div>

        <!-- Switch to log in -->
        <div class="flex justify-center gap-4">
          <span class="text-sm text-grey-900">Already have an account? 
          </span> 
          <a href="/login" class="text-sm text-[#8677BC] hover:underline">Log In</a>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    name: 'SignUp',
    components: {
      Header,
    },
  };


</script>