<template>
  <div class="q-gutter-md flex flex-start">
    <div class="q-gutter-md" style="flex:auto">
      <p class="text-h4">Who's coming?</p>
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
        <q-select
          outlined
          v-model="country"
          :options="['Hong Kong', 'Canada']"
          label="Country*"
          :rules="[val => val && val.length > 0 || 'Please select country']"
        />

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
import { mapState } from "vuex";
import { validateEmail } from "../../utils/helper";
import { SET_CONTACT_INFO } from "../../store/modules/mutation-types";

export default {
  name: "Details",
  computed: {
    ...mapState("enquiry", ["details"]),
    firstName: {
      get: function() {
        return this.details.firstName;
      },
      set: function(val) {
        this.setData("firstName", val);
      }
    },
    lastName: {
      get: function() {
        return this.details.lastName;
      },
      set: function(val) {
        this.setData("lastName", val);
      }
    },
    email: {
      get: function() {
        return this.details.email;
      },
      set: function(val) {
        this.setData("email", val);
      }
    },
    country: {
      get: function() {
        return this.details.country;
      },
      set: function(val) {
        this.setData("country", val);
      }
    },
    phone: {
      get: function() {
        return this.details.phone;
      },
      set: function(val) {
        this.setData("phone", val);
      }
    },
    additionalInfo: {
      get: function() {
        return this.details.additionalInfo;
      },
      set: function(val) {
        this.setData("additionalInfo", val);
      }
    }
  },
  methods: {
    setData(field, value) {
      this.$store.commit(`enquiry/${SET_CONTACT_INFO}`, {
        field,
        value
      });
    },
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
