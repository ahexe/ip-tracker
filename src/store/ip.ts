import { acceptHMRUpdate, defineStore } from 'pinia'

export const useIpStore = defineStore('ip', () => {
  // Current IP of own user
  const IP = ref('')
  const currentIP = computed(() => IP.value)

  // Regex expression for validating IPv4
  const regexIPv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/
  // Regex expression for validating IPv6
  const regex1IPv6 = /((([0-9a-fA-F]){1,4})\:){7}/
  // IP validation situation (in first place it is empty so it's valid!)
  const validIP = ref(true)

  // Current IP that user entered
  const enteredIP = ref('')
  // function to fill enteredIP (with validation)
  function storeIP(ip: string) {
    if (regexIPv4.test(ip) || regex1IPv6.test(ip)) {
      enteredIP.value = ip
      if (!validIP.value)
        validIP.value = true
    }
    else if (validIP.value) {
      validIP.value = false
    }
  }
  // share ip validation situation to other components (for show error or styling)
  const ipValidation = computed(() => validIP.value)

  return {
    currentIP,
    storeIP,
    ipValidation,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useIpStore, import.meta.hot))
