<template>
  <div>
    <p>Dive resort - Bunaken</p>
    <p class="text-h2">Two fish</p>
    <q-separator />
    <p>{{ `On ${date} `}}</p>
    <p>{{ guestCount }}</p>
    <q-separator />
    <template v-for="(pkg, id) in packages">
      <div v-if="pkg.guests > 0" :key="id">
        <span>{{ pkg.name }} package</span>
        <span>x{{ pkg.guests }}</span>
        <span>${{ pkg.price }}</span>
      </div>
    </template>
    <div>
      <span class="text-h4">Total (USD)</span>
      <span class="text-h4">{{totalPrice}}</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Pluralize from "pluralize";

export default {
  name: "Report",
  computed: {
    ...mapState("resort", ["date", "diverCount", "nonDiverCount"]),
    ...mapState("enquiry", ["packages"]),
    ...mapGetters("enquiry", ["totalPrice"]),
    guestCount() {
      return Pluralize("guest", this.diverCount + this.nonDiverCount, true);
    }
  }
};
</script>