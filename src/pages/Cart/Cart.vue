<template>
  <div
    class="hs-dropdown relative inline-flex [--strategy:absolute] [--flip:false]"
  >
    <!-- Toggle Button -->
    <button
      id="hs-dropdown-toggle"
      type="button"
      class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-controls="hs-dropdown-menu"
    >
      <!-- Cart Icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        class="relative"
      >
        <g fill="#8e39c7">
          <path
            d="M1,6v17c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V6H1z M12,16c-3.3,0-6-2.7-6-6
            c0-0.6,0.4-1,1-1s1,0.4,1,1c0,2.2,1.8,4,4,4s4-1.8,4-4c0-0.6,0.4-1,1-1s1,0.4,1,1C18,13.3,15.3,16,12,16z"
          />
          <path
            d="M22.4,4l-3.7-3.7C18.5,0.1,18.3,0,18,0H6C5.7,0,5.5,0.1,5.3,0.3L1.6,4H22.4z"
          />
        </g>
      </svg>
      <!-- Total quantity bubble -->
      <p
        class="w-[20px] h-[20px] border rounded-[50%] absolute text-white text-[15px] font-bold top-[-2%] end-[10%] bg-red-500 text-center"
      >
        {{ cart.items.length }}
      </p>
    </button>

    <!-- Dropdown Menu -->
    <div
      id="hs-dropdown-menu"
      class="hs-dropdown-menu absolute left-1/3 -translate-x-1/2 z-50 mt-2 hidden w-screen max-w-sm border border-gray-300 bg-white px-4 py-8 sm:px-6 lg:px-8 opacity-0 transition-[opacity,margin] duration hs-dropdown-open:opacity-100"
      role="menu"
      aria-labelledby="hs-dropdown-toggle"
      @click.stop
    >
      <!-- Close Button -->
      <button
        class="absolute right-4 top-4 text-gray-600 hover:scale-110"
        @click="closeDropdown"
      >
        <span class="sr-only">Close cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Cart Content -->
      <div class="mt-4 space-y-6">
        <ul class="space-y-4">
          <li v-if="cart.items.length > 0">
            <div
              v-for="(item, index) in cart.items"
              :key="index"
              class="flex justify-between items-center border-b py-2"
            >
            <div class="w-[50px]">
              <img :src="item.product.api_featured_image" alt="">
            </div>
              <div>
                <p>{{ item.product.name }}</p>
                <p class="text-sm text-gray-500">
                  Price: ${{ (item.product.price * item.quantity).toFixed(2) }}
                </p>
              </div>
              <div class="flex items-center gap-2">
                <button class="px-2 border rounded" @click="removeOne(item)">
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button class="px-2 border rounded" @click="addOne(item)">
                  +
                </button>
              </div>
            </div>
          </li>
          <li v-else>
            <p>Your cart is empty.</p>
          </li>
        </ul>

        <div class="space-y-4 text-center">
          <a
            href="#"
            class="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart ({{ cart.items.length }})
          </a>

          <a
            href="#"
            class="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-white transition hover:bg-gray-600"
          >
            Checkout
          </a>

          <a
            href="#"
            class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import lipbutter from "../../../store/lipbutter";
import cartStore from "../../../store/cart";

export default {
  setup() {
    const cart = cartStore();
    return { cart };
  },
  async mounted() {
    await this.fetchRepository();
    window.HSStaticMethods?.autoInit();
    this.cart.loadCart();
  },
  methods: {
    closeDropdown() {
      document.getElementById("hs-dropdown-toggle")?.click();
    },
    addOne(item) {
      this.cart.addToCart(item.product, 1);
    },
    removeOne(item) {
      if (item.quantity > 1) {
        this.cart.addToCart(item.product, -1);
      } else {
        this.cart.removeFromCart(item.product.id);
      }
    },
    async fetchRepository() {
      // Load product list if needed
      if (!this.lipbutterRepository || this.lipbutterRepository.length === 0) {
        await this.$store?.lipbutter?.fetchRepository?.();
      }
    },
  },
  computed: {
    ...mapState(lipbutter, {
      lipbutterRepository: "repository",
    }),
    totalPrice() {
      return this.cart.items
        .reduce((sum, item) => {
          return sum + item.product.price * item.quantity;
        }, 0)
        .toFixed(2); // Optional: 2 decimal places
    },
  },
};
</script>
