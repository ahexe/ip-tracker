<script setup lang="ts">
</script>

<template>
  <!-- Side Bar -->
  <div
    absolute
    top-0
    bottom-0
    right-0
    left-0
    mb-14
    z-2
    max-h-50
    mt-auto
    bg-stone-200
    bg-teal-700
  >
    <!-- Info Container Box -->
    <div
      absolute
      top-0
      bottom-0
      left-0
      right-0
      w="87%"
      h="90%"
      m-auto
      bg-stone-200
      rounded-2
      grid
      text="4"
    >
      <div grid content-center border-b-1 border-teal-700 text-center>
        <div>IP</div>
        <div>{{ '999.999.999.999' }}</div>
      </div>
      <div grid content-center border-b-1 border-teal-700 text-center>
        <div>Lo</div>
        <div>{{ 'Iran, Fars, Shiraz' }}</div>
      </div>
      <div grid content-center text-center>
        More Info
      </div>
    </div>
    <!-- Side Bar Hide And show Button -->
    <button
      rounded-t-2
      bg-teal-700
      absolute
      top-0
      bottom-0
      left-0
      right-0
      w="10"
      h="8"
      mx-auto
      mt="-7"
    >
      <!-- Button Icon -->
      <div
        i-carbon-down-to-bottom
        m-auto
        text-6
        text-zinc-900
      />
    </button>
  </div>
</template>
