<template>
  <div class="q-pa-md flex-center">
    <Report />
    <div class="q-gutter-md">
      <p>What will you do?</p>
      <p>{{ getDivers }}/{{diverCount}}</p>
      <Package
        v-for="(pkg, id) in diverPackages"
        :key="id+'diver'"
        :data="pkg"
        @changeGuest="onChangeGuests"
      />
      <p>{{ getNonDivers }}/{{nonDiverCount}}</p>
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
import Report from "./Report";
import Package from "../../components/Package";
import { SET_PACKAGE_GUEST_COUNT } from "../../store/modules/mutation-types";

export default {
  name: "Activities",
  components: {
    Report,
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
