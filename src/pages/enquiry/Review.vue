<template>
  <div class="q-gutter-md flex flex-start">
    <div class="q-gutter-md flex-auto">
      <p class="text-h4">Let's finalise your trip</p>
      <p class="text-h5">
        <strong>Your enquiry</strong>
      </p>
      <p class="text-h6">{{ guestCount }}</p>
      <p class="text-h6">{{ `On ${date} `}}</p>
      <template v-for="(pack, id) in packages">
        <div v-if="pack.guests > 0" :key="id">
          <span class="text-h6">{{ getPackageString(pack) }}</span>
        </div>
      </template>
      <q-separator />
      <p class="text-h5">
        <strong>Total (USD): ${{ totalPrice }}</strong>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Pluralize from "pluralize";

export default {
  name: "Review",
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
