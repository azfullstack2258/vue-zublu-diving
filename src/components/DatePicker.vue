<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-input
      class="bg-white"
      filled
      v-model="formattedDate"
      mask="date"
      :rules="['date']"
      style="padding:0"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date" @input="onChange" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
<script>
import moment from "moment";

export default {
  props: {
    formatString: {
      type: String,
      default: "YYYY/MM/DD"
    },
    value: String
  },
  data() {
    return {
      date: this.value
    };
  },
  computed: {
    formattedDate: {
      get: function() {
        return moment(this.date).format(this.formatString);
      },
      set: function(val) {
        this.date = new Date(val);
        this.$emit("change", val);
      }
    }
  },
  methods: {
    onChange() {
      this.$emit("change", this.date);
      this.$refs.qDateProxy.hide();
    }
  }
};
</script>