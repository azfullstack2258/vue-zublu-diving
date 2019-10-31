<template>
  <q-card style="width: 300px;">
    <q-card-section>
      <p class="text-h5">{{ data.name }}</p>
      <p class="text-h6">{{ data.content }}</p>
      <p disabled>Include equipment</p>
      <p class="text-h6">{{ `$${data.price}/guest`}}</p>
      <p disabled>Includes transport</p>
      <br />
      <div class="flex flex-center justify-center">
        <q-btn flat label="-" :disable="data.guests === 0" @click="decreaseGuest" />
        &nbsp;&nbsp;{{ data.guests }}&nbsp;&nbsp;
        <q-btn flat label="+" @click="increaseGuest" />
        <strong>&nbsp;&nbsp;Guests</strong>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "Package",
  props: {
    data: Object
  },
  methods: {
    increaseGuest() {
      this.$emit("changeGuest", {
        name: this.data.name,
        count: this.data.guests + 1
      });
    },
    decreaseGuest() {
      this.$emit("changeGuest", {
        name: this.data.name,
        count: this.data.guests - 1
      });
    }
  }
};
</script>