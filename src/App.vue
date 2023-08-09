<template>
  <div>
    <button @click="getWeb3Info">Get Account Info</button>
    <div v-if="accountInfo">
      Address: {{ accountInfo.address }}<br>
      Balance: {{ accountInfo.balance }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue';

interface AccountInfo {
  address: string;
  balance: string;
}

// ここでimportする際、型を持つとより安全です。
import getAccountInfo from './web3Sample';

export default {
  name: 'App',
  setup() {
    // accountInfo の型を Ref<AccountInfo | null> として指定します。
    const accountInfo: Ref<AccountInfo | null> = ref(null);

    async function getWeb3Info() {
      accountInfo.value = await getAccountInfo();
    }

    return {
      accountInfo,
      getWeb3Info
    };
  }
}
</script>
