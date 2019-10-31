<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
      <q-step :name="1" title="Activities" icon="insert_emoticon" :done="done1">
        <Activities />
        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="Details" icon="receipt" :done="done2">
        <Details />
        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Review" icon="spellcheck" :done="done3">
        <Review />
        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Send enquiry" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>
<script>
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

  methods: {}
};
</script>