<template>
  <section>
    <div>
      <img
        src="../../img/lipoil/Kay-Beauty-Lip-Oils-Banner.jpg"
        class="w-full"
        alt="Lipoil Banner"
      />
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
          v-for="(item, index) in lipoilRepository"
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
                <button
                  class="flex justify-center w-full items-center h-full text-[15px]"
                  @click="addToCart(item)"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import Cardforlip from "../../components/cardforlip.vue";
import cartStore from "../../../store/cart";
import useLipoilStore from "../../../store/lipoils";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    Cardforlip,
  },

  data() {
    return {
      counts: {},
      cart: cartStore(),
      lipoil: useLipoilStore(),
    };
  },

  async mounted() {
    await this.fetchRepository();
    AOS.init();
    this.cart.loadCart();

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
    countproduct() {
      return Array.isArray(this.lipoilRepository)
        ? this.lipoilRepository.length
        : 0;
    },
    ...mapState(useLipoilStore, {
      lipoilRepository: "repository",
    }),
  },

  methods: {
    ...mapActions(useLipoilStore, ["fetchRepository"]),

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
      this.cart.saveCart();
    },
  },
};
</script>
