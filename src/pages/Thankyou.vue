<template>
  <div
    class="q-pa-md flex items-center justify-center"
    style="flex-direction: column; height: calc(100vh - 100px);"
  >
    <p class="text-h3">We received your enquiry!</p>
    <p>One of our travel experts will contact you in the next few hours to finalise your booking</p>
    <q-btn flat label="Back to resort" @click="$router.push('/')" />
  </div>
</template>
<script>
export default {
  name: "ThankYou"
};
</script>
