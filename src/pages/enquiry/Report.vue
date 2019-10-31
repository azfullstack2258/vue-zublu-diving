<template>
  <div>
    <p>Dive resort - Bunaken</p>
    <p class="text-h2">Two fish</p>
    <q-separator />
    <p>{{ `On ${date} `}}</p>
    <p>{{ guestCount }}</p>
    <q-separator />
    <p class="text-h4">Total (USD)</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Pluralize from "pluralize";

export default {
  name: "Report",
  computed: {
    ...mapState("resort", ["date", "diverCount", "nonDiverCount"]),
    guestCount() {
      return Pluralize("guest", this.diverCount + this.nonDiverCount, true);
    }
  }
};
</script>