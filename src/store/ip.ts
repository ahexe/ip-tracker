import { acceptHMRUpdate, defineStore } from 'pinia'

export const useIpStore = defineStore('ip', () => {
  const IP = ref('')
  const currentIP = computed(() => IP.value)

  // Regex expression for validating IPv4
  const regexIPv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/
  // Regex expression for validating IPv6
  const regex1IPv6 = /((([0-9a-fA-F]){1,4})\:){7}/

  const enteredIP = ref('')
  function storeIP(ip: string) {
    if (regexIPv4.test(ip) || regex1IPv6.test(ip))
      enteredIP.value = ip
    else
      console.warn('invalid ip address')
  }

  //   const usedNames = computed(() => Array.from(previousNames.value))
  //   const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  //   function setNewName(name: string) {
  //     if (savedName.value)
  //       previousNames.value.add(savedName.value)

  //     savedName.value = name
  //   }

  return {
    currentIP,
    storeIP,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useIpStore, import.meta.hot))
