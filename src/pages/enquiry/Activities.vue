<template>
  <div class="q-gutter-md flex-start flex">
    <div class="q-gutter-md">
      <p class="text-h4">What will you do?</p>
      <p class="text-h5" style="margin-bottom:0">{{ getDivers }}/{{diverCount}} Divers</p>
      <div class="flex q-gutter-md flex-wrap no-margin">
        <Package
          v-for="(pkg, id) in diverPackages"
          :key="id+'diver'"
          :data="pkg"
          @changeGuest="onChangeGuests"
        />
      </div>
      <p
        class="text-h5"
        style="margin-bottom:0"
      >{{ getNonDivers }}/{{nonDiverCount}} {{nonDiverCount !== 1 ? "non-divers" : 'non-diver'}}</p>
      <Package
        v-for="(pkg, id) in nonDiverPackages"
        :key="id+'non-diver'"
        :data="pkg"
        @changeGuest="onChangeGuests"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Package from "../../components/Package";
import { SET_PACKAGE_GUEST_COUNT } from "../../store/modules/mutation-types";

export default {
  name: "Activities",
  components: {
    Package
  },
  computed: {
    ...mapState("resort", ["diverCount", "nonDiverCount"]),
    ...mapState("enquiry", ["packages"]),
    ...mapGetters("enquiry", [
      "getDivers",
      "getNonDivers",
      "diverPackages",
      "nonDiverPackages"
    ])
  },
  methods: {
    onChangeGuests({ name, count }) {
      this.$store.commit(`enquiry/${SET_PACKAGE_GUEST_COUNT}`, { name, count });
    }
  }
};
</script>
