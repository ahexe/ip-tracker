<script setup lang="ts">

</script>

<template>
  <div relative>
    <!-- Map -->
    <Map />

    <!-- Search Bar -->
    <SearchBar />

    <!-- Result Window -->
    <ResultWindow />

    <!-- Find My IP Icon -->
    <MyIP />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
