<template>
  <q-card class="q-pa-md" style="min-width: 400px;margin-left:0;margin-top:90px;">
    <p>Dive resort - Bunaken</p>
    <p class="text-h6">Two fish</p>
    <q-separator style="margin-bottom:20px;" />
    <p>{{ `On ${date} `}}</p>
    <p>{{ guestCount }}</p>
    <q-separator style="margin-bottom:20px;" />
    <template v-for="(pkg, id) in packages">
      <div class="flex justify-between" v-if="pkg.guests > 0" :key="id" style="margin-bottom:20px;">
        <span>{{ pkg.name }} package</span>
        <span>x{{ pkg.guests }}</span>
        <span>${{ pkg.price }}</span>
      </div>
    </template>
    <q-separator style="margin-bottom:20px;" />
    <div class="flex justify-between">
      <span class="text-h6">Total (USD)</span>
      <span class="text-h6">${{totalPrice}}</span>
    </div>
  </q-card>
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