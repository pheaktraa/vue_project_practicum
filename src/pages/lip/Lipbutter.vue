<template>
  <section>
    <div>
      <img src="../../img/lipbutter/banner.webp" alt="" />
    </div>
    <div class="container py-[20px]">
      <div class="flex justify-between m-[20px]">
        <p class="font-bold">
          {{ countproduct }} <span class="ms-[5px]">Products</span>
        </p>
        <p class="font-bold">\Lipbutter</p>
      </div>
      <div class="flex flex-wrap justify-center gap-[20px] mt-[100px]">
        <div
          v-for="(item, index) in lipbutterRepository"
          :key="item.id"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <Cardforlip
            :name="item.name"
            :img="item.api_featured_image"
            :prize="item.price"
            :id="item.id"
            :index="index"
          />
          <div class="bg-white pb-[10px] rounded-b-[10px]">
            <div class="flex justify-center">
              <div
                class="w-[95%] h-[30px] border border-gray-400 rounded-[10px] flex justify-between"
              >
                <button class="px-[10px]" @click="decrease(item.id)">-</button>
                <p>{{ counts[item.id] || 0 }}</p>
                <button class="px-[10px]" @click="increase(item.id)">+</button>
              </div>
            </div>
            <div class="flex justify-center mt-[5px]">
              <div
                class="w-[95%] h-[30px] border rounded-[10px] border-purple-600 bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                <Button
                  class="flex justify-center w-full items-center h-full text-[15px]"
                  @click="addToCart(item)"
                >
                 ADD TO CART
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from "pinia";
import AOS from "aos";
import lipbutter from "../../../store/lipbutter";
import Cardforlip from "../../components/cardforlip.vue";
import cartStore from "../../../store/cart";

export default {
  components: {
    Cardforlip,
  },
  setup() {
    const cart = cartStore();
    cart.loadCart(); // ✅ Load persisted cart immediately
    return { cart };
  },
  data() {
    return {
      counts: {},
    };
  },
  async mounted() {
    await this.fetchRepository();
    AOS.init();

    // ✅ Load quantity counters
    const savedCounts = localStorage.getItem("lipbutter-counts");
    if (savedCounts) {
      try {
        this.counts = JSON.parse(savedCounts);
      } catch (e) {
        console.error("Failed to parse saved counts:", e);
      }
    }
  },
  computed: {
    ...mapState(lipbutter, {
      lipbutterRepository: "repository",
    }),
    countproduct() {
      return Array.isArray(this.lipbutterRepository)
        ? this.lipbutterRepository.length
        : 0;
    },
  },
  methods: {
    ...mapActions(lipbutter, ["fetchRepository"]),

    increase(id) {
      if (!this.counts[id]) {
        this.counts[id] = 0;
      }
      this.counts[id]++;
      this.saveCounts();
    },

    decrease(id) {
      if (this.counts[id] && this.counts[id] > 0) {
        this.counts[id]--;
        this.saveCounts();
      }
    },

    saveCounts() {
      localStorage.setItem("lipbutter-counts", JSON.stringify(this.counts));
    },

    addToCart(product) {
      const quantity = this.counts[product.id] || 1;
      this.cart.addToCart(product, quantity);
      this.cart.saveCart(); // ✅ Persist cart
    },
  },
};
</script>
