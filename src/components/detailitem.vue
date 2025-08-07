<template>
  <section class="my-[40px]">
    <div
      class="container py-[100px] flex justify-between bg-white px-[20px] rounded-[10px]"
    >
      <div class="w-[450px] h-[450px] rounded-[10px] border border-gray-300">
        <img
          :src="product?.api_featured_image"
          alt=""
          class="h-full rounded-[10px]"
        />
      </div>
      <div class="w-[750px] h-[450px] p-[20px]">
        <p class="text-gray-700 font-bold text-[20px]">{{ product?.name }}</p>
        <p class="text-gray-400 font-bold text-[15px]">{{ product?.price }}$</p>
        <p class="mt-[20px]">Details</p>
        <div class="break-words w-[650px]">
          <p class="mt-[20px]">{{ product?.description }}</p>
        </div>
        <div class="mt-[20px]">
          <div
            class="w-[200px] h-[30px] border border-gray-400 rounded-[10px] flex justify-between"
          >
            <button class="px-[10px]" @click="decrease">-</button>
            <p>{{ count }}</p>
            <button class="px-[10px]" @click="increase">+</button>
          </div>
        </div>
        <div class="flex gap-[20px]">
          <div
            class="w-[300px] mt-[20px] h-[30px] border rounded-[10px] border-purple-600 bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            <button
              class="w-full items-center h-full text-[15px]"
              @click="addToCart(product)"
            >
              ADD TO CART
            </button>
          </div>
          <div
            class="w-[300px] mt-[20px] h-[30px] border rounded-[10px] border-purple-600 bg-purple-700 text-white hover:bg-purple-600 transition"
          >
            <button class="w-full items-center h-full text-[15px]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "pinia";
import detailcard from "../../store/detailcard";
import cartStore from "../../store/cart";

export default {
  data() {
    return {
      count: 0,
      product: null,
      cart: null, // store cart here from setup()
    };
  },
  computed: {
    ...mapState(detailcard, {
      repository: "repository",
    }),
  },
  async mounted() {
    const productId = this.$route.params.id;

    // Optional: fetch if repository is empty
    if (this.repository.length === 0) {
      await this.$pinia._s.get("detailcard")?.fetchAll?.();
    }

    this.product = this.repository.find(
      (product) => String(product.id) === productId
    );

    if (this.product) {
      const key = `count-${this.product.id}`;
      const savedCount = localStorage.getItem(key);
      if (savedCount !== null) {
        this.count = JSON.parse(savedCount);
      }
    } else {
      console.warn("Product not found for ID:", productId);
    }
  },
  created() {
    // Use created() to set up cart early
    this.cart = cartStore();
    this.cart.loadCart();
  },
  methods: {
    increase() {
      if (!this.product) return;
      this.count++;
      localStorage.setItem(
        `count-${this.product.id}`,
        JSON.stringify(this.count)
      );
    },
    decrease() {
      if (!this.product || this.count <= 0) return;
      this.count--;
      localStorage.setItem(
        `count-${this.product.id}`,
        JSON.stringify(this.count)
      );
    },
    addToCart(product) {
      const quantity = this.count || 1; // fix: using correct count value
      this.cart.addToCart(product, quantity);
      this.cart.saveCart();
    },
  },
};
</script>
