<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col-3">Two Fish Resort</div>
      <div class="col">
        Dates
        <DatePicker />Guests
        <q-btn-dropdown glossy no-caps icon="arrow_down" :label="`${diverCount} divers, `">
          <q-list style="min-width: 100px">
            <q-item class="flex items-center justify-between">
              {{ $t('Divers') }}
              <q-btn flat icon="add" />
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="col-4">Content</div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
import DatePicker from "../components/DatePicker";

export default {
  name: "PageIndex",
  components: {
    DatePicker
  },
  computed: {
    ...mapState("resort", ["diverCount", "nonDiverCount"]),
    guestsLabel() {}
  }
};
</script>
