<script setup lang="ts">
const infoWindow = ref('close')
const infoWindowHeight = ref(0)
const toggleInfoWindow = () => {
  if (infoWindow.value === 'close')
    infoWindow.value = 'open'
  else
    infoWindow.value = 'close'
}
watchEffect(() => {
  if (infoWindow.value === 'open')
    infoWindowHeight.value = 50

  else
    infoWindowHeight.value = 0
})
</script>

<template>
  <!-- Side Bar -->
  <div
    :max-h="infoWindowHeight"
    transition="all"
    duration="200"
    animate-bounce-in-down
    absolute
    top-0
    bottom-0
    right-0
    left-0
    mb-14
    z-2
    mt-auto
    bg-stone-200
    bg-teal-700
    sm="mb-18 rounded-t-2 mx-auto"
    sm:w="60%"
    md:w="50%"
    lg:w="40%"
    xl:w="35%"
    class="2xl:w-35%"
  >
    <!-- Info Container Box -->
    <div
      v-show="infoWindow === 'open'"
      grid
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
      text="4"
      shadow-inner
      sm:w="95%"
      md:w="96%"
      lg:w="89%"
      xl:w="94%"
    >
      <div
        grid
        content-center
        border-b-1
        border-teal-700
        text-center
      >
        <div>IP Address</div>
        <div>{{ '999.999.999.999' }}</div>
      </div>
      <div
        grid
        content-center
        border-b-1
        border-teal-700
        text-center
      >
        <div>Location</div>
        <div>{{ 'Iran, Fars, Shiraz' }}</div>
      </div>
      <div
        grid
        content-center
        text-center
      >
        <button
          flex
          mx-auto
          my-auto
          active="animate-shake-x"
        >
          More Info
          <div
            my-auto
            i-carbon-chevron-right
          />
        </button>
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
      @click="toggleInfoWindow()"
    >
      <!-- Button Icon -->
      <div
        v-if="infoWindow === 'open'"
        i-carbon-down-to-bottom
        m-auto
        text-6
        text-stone-200
        hover:text="6.5"
        active:text="7"
        transition="all"
        duration="50"
      />
      <div
        v-else
        i-carbon-up-to-top
        m-auto
        text-6
        text-stone-200
        hover:text="6.5"
        active:text="7"
        transition="all"
        duration="50"
      />
    </button>
  </div>
</template>
