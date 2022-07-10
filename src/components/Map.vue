<!-- Leaflet won't support typescript yet! -->
<script setup>
import leaflet from 'leaflet'

const mymap = ref()
// can't use this before mounting!
onMounted(() => {
  mymap.value = leaflet.map('map').setView([35.5, 51.4215], 10)
  leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(mymap.value)
})
</script>

<template>
  <!-- give it all screen -->
  <div h="100vh">
    <div id="map" h="full" z-1 />
  </div>
</template>

