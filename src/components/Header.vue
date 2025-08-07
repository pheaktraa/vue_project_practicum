<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container-fluid m-auto px-0">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-2 px-[10px]">
          <div class="text-center">
            <button
              class="text-white font-medium rounded-lg text-sm py-2.5"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="w-[35px] h-[30px] p-[5px] bg-gray-200 flex lg:hidden rounded-[5px]"
              >
                <title>menu-8</title>
                <g fill="#212121" stroke-linejoin="miter" stroke-linecap="butt">
                  <line
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                    fill="none"
                    stroke="#212121"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></line>
                  <line
                    x1="2"
                    y1="5"
                    x2="22"
                    y2="5"
                    fill="none"
                    stroke="#212121"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></line>
                  <line
                    x1="2"
                    y1="19"
                    x2="22"
                    y2="19"
                    fill="none"
                    stroke="#212121"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                  ></line>
                </g>
              </svg>
            </button>
          </div>
          <div
            class="w-[35px] h-[35px] sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full flex items-center justify-center"
          >
            <span class="text-white font-bold text-sm">C</span>
          </div>
          <div>
            <h1 class="text-lg font-bold text-gray-900">
              Celeste Skincare
            </h1>
            <p class="text-[9px] sm:text-[10px] text-purple-600">
              Glow Naturally, Shine Elegantly
            </p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center ms-[-20px]">
          <a
            href="#"
            class="text-gray-700 hover:text-purple-600 lg:text-[11px] xl:text-[14px] transition-colors font-bold ml-[15px]"
          >
            Home
          </a>
          <Lip></Lip>
          <Face></Face>
          <Body></Body>
          <Skinconcern></Skinconcern>
          <a
            v-for="item in navigationItems2"
            :key="item"
            href="#"
            class="text-gray-700 hover:text-purple-600 lg:text-[11px] xl:text-[14px] transition-colors font-bold ml-[15px]"
          >
            {{ item }}
          </a>
        </nav>

        <!-- User Actions -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            class="me-[10px]"
          >
            <title>zoom-3</title>
            <g fill="#8f3bc8">
              <path
                d="M30.414,27.586,22.77,19.942a12.038,12.038,0,1,0-2.828,2.828l7.644,7.644a2,2,0,0,0,2.828-2.828ZM3,13A10,10,0,1,1,13,23,10.011,10.011,0,0,1,3,13Z"
                fill="#8f3bc8"
              ></path>
            </g>
          </svg>
          <cart></cart>
          <button
            class="text-purple-600 hover:text-purple-700 text-[11px] xl:text-sm px-3 py-1 rounded hidden lg:flex"
          >
            Sign Up
          </button>
          <router-link to="/home">
            <button
              class="bg-purple-600 hover:bg-purple-700 text-white text-[10px] xl:text-sm px-6 py-1 hidden lg:flex rounded-full"
            >
              Log In
            </button>
          </router-link>
          <button class="ml-[-20px] sm:ml-0 sm:p-2">
            <ShoppingBag class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <Menu class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Overlay background -->
      <div id="drawer-overlay" class="fixed"></div>
      <!-- drawer component -->
      <div
        id="drawer-navigation"
        class="fixed top-0 left-0 h-screen overflow-y-auto transition-transform -translate-x-full inset-0 bg-black/50 z-40"
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div class="bg-white w-64 h-full relative">
          <div
            class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            <div
              id="drawer-navigation-label"
              class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 flex p-[14px] border-b border-gray-300"
            >
              <div
                class="w-[35px] h-[35px] sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold text-sm">C</span>
              </div>
            </div>
            <button
              type="button"
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              class="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-00 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-200"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
            <div class="py-4 overflow-y-auto">
              <ul class="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100 group"
                  >
                    <span class="ms-3 text-gray-700">Home</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-100"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <span
                      class="flex-1 ms-3 text-gray-700 text-left rtl:text-right whitespace-nowrap"
                      >Lips</span
                    >
                    <svg
                      class="w-3 h-3 text-gray-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul id="dropdown-example" class="hidden py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Lip Butter</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Lip Oils</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Lip Care</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-100"
                    aria-controls="dropdown-example2"
                    data-collapse-toggle="dropdown-example2"
                  >
                    <span
                      class="flex-1 ms-3 text-gray-700 text-left rtl:text-right whitespace-nowrap"
                      >Face</span
                    >
                    <svg
                      class="w-3 h-3 text-gray-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul id="dropdown-example2" class="hidden py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Cleansers</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Toner</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Serums</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Moisturizer</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Exfollators & Masks</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Eye Care</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-100"
                    aria-controls="dropdown-example3"
                    data-collapse-toggle="dropdown-example3"
                  >
                    <span
                      class="flex-1 ms-3 text-gray-700 text-left rtl:text-right whitespace-nowrap"
                      >Body</span
                    >
                    <svg
                      class="w-3 h-3 text-gray-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul id="dropdown-example3" class="hidden py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Body Wash & Scrub</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Body Lotion & Oils</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Body Glow</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-100"
                    aria-controls="dropdown-example4"
                    data-collapse-toggle="dropdown-example4"
                  >
                    <span
                      class="flex-1 ms-3 text-gray-700 text-left rtl:text-right whitespace-nowrap"
                      >Skin Concerns</span
                    >
                    <svg
                      class="w-3 h-3 text-gray-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul id="dropdown-example4" class="hidden py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Dryness</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Dullness</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-100"
                        >Pores & Excess Oil</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-100 group"
                  >
                    <svg
                      class="shrink-0 w-5 h-5 text-gray-500 transition duration-75"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                      />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-100 group"
                  >
                    <svg
                      class="shrink-0 w-5 h-5 text-gray-500 transition duration-75"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
                      />
                      <path
                        d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
                      />
                      <path
                        d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
                      />
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="inset-0 bg-black/50 fixed" ></div> -->
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import { Menu, ShoppingBag } from "lucide-vue-next"; // You must install lucide-vue-next
import Lip from "../pages/Dropdown/Lip.vue";
import Face from "../pages/Dropdown/Face.vue";
import Body from "../pages/Dropdown/Body.vue";
import Skinconcern from "../pages/Dropdown/Skinconcern.vue";
import cart from "../pages/Cart/index.vue";

const isMobileMenuOpen = ref(false);

const navigationItems = [
  "Bestsellers",
  "New Arrivals",
  "lips",
  "Face",
  "Body",
  "Skin Concerns",
];

export default {
  data() {
    return {
      navigationItems2: ["Contact Us", "About Us"],
    };
  },
  components: {
    Lip,
    Face,
    Body,
    Skinconcern,
    cart,
  },
};
</script>
