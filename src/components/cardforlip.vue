<template>
  <div class="hover:mt-[-10px] transition-all">
    <div
      class="bg-white rounded-t-[10px] pb-[10px] relative"
      
    >
      <div class="rounded-[10px] pb-[10px] bg-white">
        <router-link
          :to="`/lipbutter/${id}`"
          class="flex flex-wrap justify-between pb-[20px]"
        >
          <div
            class="w-[280px] h-full bg-white rounded-[10px] pb-[10px] relative"
          >
            <div class="img w-full h-[250px] rounded-t-[10px]">
              <img :src="img" alt="" class="h-full rounded-t-[10px]" />
            </div>
            <div class="txt-card w-full">
              <p
                class="justify-center flex text-gray-700 font-bold text-[18px]"
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  width: 100%;
                "
              >
                <span>{{ name }}</span>
              </p>
              <p
                class="justify-center flex text-gray-400 font-bold text-[15px]"
              >
                {{ prize }}$
              </p>
              <div class="icon-star justify-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <title>star-3</title>
                  <g fill="#fff200">
                    <path
                      d="M31.947,12.294a1.066,1.066,0,0,0-.86-.727l-9.764-1.419L16.957,1.3a1.111,1.111,0,0,0-1.914,0l-4.366,8.846L.913,11.567a1.067,1.067,0,0,0-.591,1.82l7.066,6.886L5.721,30a1.066,1.066,0,0,0,1.547,1.124L16,26.531l8.733,4.591A1.066,1.066,0,0,0,26.28,30l-1.667-9.725,7.066-6.886A1.066,1.066,0,0,0,31.947,12.294Z"
                      fill="#fff200"
                    ></path>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <title>star-3</title>
                  <g fill="#fff200">
                    <path
                      d="M31.947,12.294a1.066,1.066,0,0,0-.86-.727l-9.764-1.419L16.957,1.3a1.111,1.111,0,0,0-1.914,0l-4.366,8.846L.913,11.567a1.067,1.067,0,0,0-.591,1.82l7.066,6.886L5.721,30a1.066,1.066,0,0,0,1.547,1.124L16,26.531l8.733,4.591A1.066,1.066,0,0,0,26.28,30l-1.667-9.725,7.066-6.886A1.066,1.066,0,0,0,31.947,12.294Z"
                      fill="#fff200"
                    ></path>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <title>star-3</title>
                  <g fill="#fff200">
                    <path
                      d="M31.947,12.294a1.066,1.066,0,0,0-.86-.727l-9.764-1.419L16.957,1.3a1.111,1.111,0,0,0-1.914,0l-4.366,8.846L.913,11.567a1.067,1.067,0,0,0-.591,1.82l7.066,6.886L5.721,30a1.066,1.066,0,0,0,1.547,1.124L16,26.531l8.733,4.591A1.066,1.066,0,0,0,26.28,30l-1.667-9.725,7.066-6.886A1.066,1.066,0,0,0,31.947,12.294Z"
                      fill="#fff200"
                    ></path>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <title>star-3</title>
                  <g fill="#dedede">
                    <path
                      d="M31.947,12.294a1.066,1.066,0,0,0-.86-.727l-9.764-1.419L16.957,1.3a1.111,1.111,0,0,0-1.914,0l-4.366,8.846L.913,11.567a1.067,1.067,0,0,0-.591,1.82l7.066,6.886L5.721,30a1.066,1.066,0,0,0,1.547,1.124L16,26.531l8.733,4.591A1.066,1.066,0,0,0,26.28,30l-1.667-9.725,7.066-6.886A1.066,1.066,0,0,0,31.947,12.294Z"
                      fill="#dedede"
                    ></path>
                  </g>
                </svg>
                <p class="ms-[10px]">4.3(13)</p>
              </div>
            </div>
          </div>
          <div
            v-if="index <= 3"
            class="absolute z-40 ms-[60%] mt-[1%] border py-[2px] px-[10px] rounded-[5px] bg-purple-600 border-purple-600 text-white"
          >
            <p>Best Seller</p>
          </div>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "prize", "img", "index", "id"],
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    const key = `count-${this.name}`; // or use ID if you have one
    const savedCount = localStorage.getItem(key);
    if (savedCount !== null) {
      this.count = JSON.parse(savedCount);
    }
    const id = this.$route.params.id;
    console.log(id);
  },
  methods: {
    increase() {
      this.count++;
      const key = `count-${this.name}`;
      localStorage.setItem(key, JSON.stringify(this.count));
    },
    decrease() {
      if (this.count > 0) {
        this.count--;
        const key = `count-${this.name}`;
        localStorage.setItem(key, JSON.stringify(this.count));
      }
    },
  },
};
</script>
