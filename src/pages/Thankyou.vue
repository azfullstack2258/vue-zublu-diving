<template>
  <div class="q-pa-md">
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
