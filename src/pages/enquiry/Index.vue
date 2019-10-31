<template>
  <div class="q-pa-md q-gutter-md flex items-start no-margin">
    <Report />
    <q-stepper style="flex:auto" v-model="step" header-nav ref="stepper" color="primary" animated>
      <q-step :name="1" title="Activities" icon="insert_emoticon" :done="done1">
        <Activities />
        <q-stepper-navigation
          class="q-gutter-md flex items-center justify-start"
          style="margin-left:16px;"
        >
          <q-btn
            @click="() => { done1 = true; step = 2 }"
            color="primary"
            label="Continue"
            :disable="getDivers === 0"
            class="no-margin"
          />
          <div style="margin-top:0">
            <p class="no-margin" v-if="validateDiverPackages" disabled>{{ validateDiverPackages }}</p>
            <p
              class="no-margin"
              v-if="validateNonDiverPackages"
              disabled
            >{{ validateNonDiverPackages }}</p>
          </div>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="Details" icon="receipt" :done="done2">
        <Details @next="() => { done2 = true; step = 3 }" />
      </q-step>

      <q-step :name="3" title="Review" icon="spellcheck" :done="done3">
        <Review />
        <q-stepper-navigation>
          <p class="text-warning" v-if="validateWizard">{{ validateWizard }}</p>
          <q-btn
            color="primary"
            @click="allDone"
            label="Send enquiry"
            :disabled="validateWizard!==''"
          ></q-btn>
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Activities from "./Activities";
import Details from "./Details";
import Review from "./Review";
import Report from "./Report";

export default {
  name: "Enquiry",
  components: {
    Activities,
    Details,
    Review,
    Report
  },
  data() {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false
    };
  },
  computed: {
    ...mapState("resort", ["diverCount", "nonDiverCount"]),
    ...mapGetters("enquiry", ["getDivers", "getNonDivers"]),
    validateWizard() {
      if (!this.done1) {
        return "Please complete Activities form";
      }
      if (!this.done2) {
        return "Please complete Details form.";
      }
      return "";
    },
    validateDiverPackages() {
      if (this.getDivers === 0) {
        return this.$t("message.error.no_diver_packages");
      }
      if (this.diverCount < this.getDivers) {
        return this.$t("message.error.more_diver_packages_selected");
      } else if (this.diverCount > this.getDivers) {
        return this.$t("message.error.less_diver_packages_selected");
      }
      return "";
    },
    validateNonDiverPackages() {
      if (this.getNonDivers === 0) return "";
      if (this.nonDiverCount < this.getNonDivers) {
        return this.$t("message.error.more_non_diver_packages_selected");
      } else if (this.nonDiverCount > this.getNonDivers) {
        return this.$t("message.error.less_non_diver_packages_selected");
      }
      return "";
    }
  },
  methods: {
    allDone() {
      this.done3 = true;
      this.$router.push("/thankyou");
    }
  }
};
</script>