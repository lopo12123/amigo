<script setup lang="ts">
import {ref} from "vue";

const countryCode = ref('rnd')
const getBingImage = () => {
  fetch(`https://peapix.com/bing/feed?country=cn`)
      .then(r => r.json())
      .then((resp) => {
        console.log(resp)
      })
      .catch(code => `error code: ${code}`)
}
</script>

<template>
  <p>
    entrance page <br>
    <button @click="getBingImage">get image</button>
  </p>
</template>

<style scoped>

</style>