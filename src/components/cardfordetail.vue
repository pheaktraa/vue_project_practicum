<template>
  <div>
    <Detailitem />
  </div>
</template>

<script>
import lipbutter from "../../store/lipbutter";
import Detailitem from "./detailitem.vue";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Detailitem,
  },
  async mounted() {
    await this.fetchRepository();
  },
  computed: {
    ...mapState(lipbutter, {
      lipbutterRepository: "repository",
    }),
    countproduct() {
      try {
        return this.lipbutterRepository.length > 0
          ? this.lipbutterRepository.length - 1
          : 0;
      } catch (error) {
        console.log(error);
      }
    },
  },
  methods: {
    ...mapActions(lipbutter, ["fetchRepository"]),
  },
};
</script>