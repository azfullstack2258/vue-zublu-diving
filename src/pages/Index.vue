<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col-3">Two Fish Resort</div>
      <div class="col">
        Dates
        <DatePicker v-model="date" @change="val => onChange('date', val)" />Guests
        <q-btn-dropdown offset-menu no-caps icon="arrow_down" :label="guestsLabel">
          <q-list style="min-width: 100px">
            <q-item class="flex items-center justify-between">
              {{ $t("Divers") }}
              <div>
                <q-btn
                  flat
                  label="-"
                  :disable="diverCount === 0"
                  @click="onChange('diverCount', diverCount - 1)"
                />
                {{ diverCount }}
                <q-btn flat label="+" @click="onChange('diverCount', diverCount + 1)" />
              </div>
            </q-item>
            <q-item class="flex items-center justify-between">
              {{ $t("Non-divers") }}
              <div>
                <q-btn
                  flat
                  label="-"
                  :disable="nonDiverCount === 0"
                  @click="onChange('nonDiverCount', nonDiverCount - 1)"
                />
                {{ nonDiverCount }}
                <q-btn flat label="+" @click="onChange('nonDiverCount', nonDiverCount + 1)" />
              </div>
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
import { SET_DATA } from "../store/modules/mutation-types";

export default {
  name: "PageIndex",
  components: {
    DatePicker
  },
  computed: {
    ...mapState("resort", ["diverCount", "nonDiverCount", "date"]),
    guestsLabel() {
      const diverStr = (this.diverCount && `${this.diverCount} divers`) || "";
      const nonDiverStr =
        (this.nonDiverCount && `${this.nonDiverCount} non-divers`) || "";
      if (diverStr && nonDiverStr) {
        return [diverStr, nonDiverStr].join(", ");
      } else {
        return diverStr || nonDiverStr;
      }
    }
  },
  methods: {
    onChange(key, value) {
      this.$store.commit(`resort/${SET_DATA}`, { key, value });
    }
  }
};
</script>
