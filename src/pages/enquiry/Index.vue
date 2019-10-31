<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
      <q-step :name="1" title="Activities" icon="insert_emoticon" :done="done1">
        <Activities />
        <q-stepper-navigation>
          <q-btn
            @click="() => { done1 = true; step = 2 }"
            color="primary"
            label="Continue"
            :disable="getDivers === 0"
          />
          <p v-if="validateDiverPackages">{{ validateDiverPackages }}</p>
          <p v-if="validateNonDiverPackages">{{ validateNonDiverPackages }}</p>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="Details" icon="receipt" :done="done2">
        <Details @next="() => { done2 = true; step = 3 }" />
      </q-step>

      <q-step :name="3" title="Review" icon="spellcheck" :done="done3">
        <Review />
        <q-stepper-navigation>
          <q-btn color="primary" @click="allDone" label="Send enquiry" />
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

export default {
  name: "Enquiry",
  components: {
    Activities,
    Details,
    Review
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
    validateDiverPackages() {
      if (this.getDivers === 0) {
        return "At least one diver package should be selected";
      }
      if (this.diverCount < this.getDivers) {
        return "More diver packages are selected than guests";
      } else if (this.diverCount > this.getDivers) {
        return "Less diver packages are selected than guests";
      }
      return "";
    },
    validateNonDiverPackages() {
      if (this.nonDiverCount < this.getNonDivers) {
        return "More non-diver packages are selected than guests";
      } else if (this.nonDiverCount > this.getNonDivers) {
        return "Less non-diver packages are selected than guests";
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