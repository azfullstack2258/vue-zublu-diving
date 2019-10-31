<template>
  <div class="q-pa-md">
    <Report />
    <div class="q-gutter-md">
      <p>Let's finalise your trip</p>
      <p>Your enquiry</p>
      <p>{{ guestCount }}</p>
      <p>{{ `On ${date} `}}</p>
      <template v-for="(pack, id) in packages">
        <div v-if="pack.guests > 0" :key="id">
          <span>{{ getPackageString(pack) }}</span>
        </div>
      </template>
      <q-separator />
      <p class="text-h4">Total (USD): ${{ totalPrice }}</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Pluralize from "pluralize";
import Report from "./Report";

export default {
  name: "Review",
  components: {
    Report
  },
  computed: {
    ...mapState("resort", ["date", "diverCount", "nonDiverCount"]),
    ...mapState("enquiry", ["packages"]),
    ...mapGetters("enquiry", ["totalPrice"]),
    guestCount() {
      return Pluralize("guest", this.diverCount + this.nonDiverCount, true);
    }
  },
  methods: {
    getPackageString(pack) {
      return (
        pack.name &&
        Pluralize(`${pack.name.toLowerCase()} package`, pack.guests, true) +
          ` (${pack.content}/guest)`
      );
    }
  }
};
</script>
