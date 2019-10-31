<template>
  <div class="q-pa-md">
    <Report />
    <div class="q-gutter-md">
      <p>Who's coming?</p>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" ref="createForm">
        <q-input
          filled
          v-model="firstName"
          label="First name *"
          placeholder="First name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please input first name']"
        />
        <q-input
          filled
          v-model="lastName"
          label="Last name *"
          placeholder="Last name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please input last name']"
        />
        <q-input
          filled
          v-model="email"
          label="Email *"
          placeholder="Email"
          type="email"
          lazy-rules
          :rules="[
            val => val && isValidEmail(val) || 'Please input valid email',
            val => val && val.length > 0 || 'Please input email'
          ]"
        />
        <!-- Show limited countries for now. -->
        <q-select outlined v-model="country" :options="['Hong Kong', 'Canada']" label="Outlined" />

        <q-input
          filled
          v-model="phone"
          label="Phone *"
          placeholder="Phone"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please input phone number']"
        />
        <q-input
          filled
          v-model="additionalInfo"
          type="textarea"
          label="Special requests"
          placeholder="Anything you'd like to let us know?"
          lazy-rules
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>
<script>
import Report from "./Report";
import { validateEmail } from "../../utils/helper";

export default {
  name: "Details",
  components: {
    Report
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      phone: "",
      additionalInfo: ""
    };
  },
  methods: {
    onSubmit() {
      this.$refs.createForm.validate().then(success => {
        if (success) {
          this.$emit("next");
        }
      });
    },
    onReset() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.country = "";
      this.phone = "";
      this.additionalInfo = "";
    },
    isValidEmail(val) {
      return validateEmail(val);
    }
  }
};
</script>
