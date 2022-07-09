<script setup lang="ts">
import leaflet from 'leaflet'
import { onMounted } from 'vue'

const mymap = ref()

onMounted(() => {
  mymap.value = leaflet.map('map').setView([51.505, -0.09], 13)
  leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(mymap.value)
})
</script>

<template>
  <div>
    Hello World
    <div id="map" h="80vh" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
