<template>
  <q-page class="flex flex-center">
    <div class="full-width" style="height:calc(100vh - 100px);">
      <div class="flex flex-center justify-center bg-grey-3" style="height:300px;">
        <p class="text-h3">Two Fish Resort</p>
      </div>
      <div class="col flex flex-center bg-grey-7" style="color:white;height:100px;">
        <strong>Dates</strong>
        <DatePicker v-model="date" @change="val => onChange('date', val)" />
        <strong>Guests</strong>
        <q-btn-dropdown
          offset-menu
          class="bg-white"
          no-caps
          icon="arrow_down"
          :label="guestsLabel"
          style="margin-left: 20px;min-width:250px;color:black;"
        >
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
        <q-btn
          color="primary"
          :label="$t('Enquiry')"
          @click="goToEnquiry"
          style="margin-left: 20px;"
        />
      </div>
      <div class="flex flex-center justify-center" style="height:calc(100% - 400px);">
        <p class="text-h5">Content</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
import Pluralize from "pluralize";
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
      const diverStr =
        (this.diverCount && Pluralize("diver", this.diverCount, true)) || "";
      const nonDiverStr =
        (this.nonDiverCount &&
          Pluralize("non-diver", this.nonDiverCount, true)) ||
        "";
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
    },
    notifyError(err) {
      this.$q.notify({
        icon: "warning",
        message: err,
        color: "negative",
        html: true
      });
    },
    goToEnquiry() {
      // Validation
      if (!this.date) {
        this.notifyError(this.$t("message.error.no_date"));
        return;
      }
      if (this.diverCount === 0) {
        this.notifyError(this.$t("message.error.no_diver"));
      }

      // Good to go to Enquiry!
      this.$router.push("/enquiry");
    }
  }
};
</script>
