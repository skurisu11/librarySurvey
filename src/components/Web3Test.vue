<template>
  <div>
    <button @click="getAccount">Get Account</button>
    <div>{{ account }}</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import Web3 from 'web3';

export default defineComponent({
  name: 'Web3Test',
  setup() {
    const account = ref('');

    const getAccount = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
          // ユーザーからの許可を取得
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          account.value = accounts[0];
        } catch (error) {
          console.error('User denied account access or other error occurred:', error);
        }
      } else {
        console.error('Ethereum object doesn\'t exist! Maybe MetaMask is not installed?');
      }
    };

    return { account, getAccount };
  }
});
</script>
