<script setup lang="ts">
import leaflet from 'leaflet'

const mymap = ref()

onMounted(() => {
  mymap.value = leaflet.map('map').setView([0, 0], 3)
  leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(mymap.value)
})
</script>

<template>
  <div>
    <div id="map" h="full" z-1 />
  </div>
</template>

