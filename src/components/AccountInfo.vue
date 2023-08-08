<template>
  <div>
    <p style="text-align: center">
      <v-ons-button @click="getAccount">Get Account</v-ons-button>
    </p>
    <div style="text-align: center">
      <p>Address: {{ address }}</p>
      <p>Balance: {{ balance }} Ether</p>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data() {
    return {
      address: '',
      balance: ''
    };
  },
  methods: {
    async getAccount() {
      let web3;

      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          const balanceInWei = await web3.eth.getBalance(account);
          const etherBalance = web3.utils.fromWei(balanceInWei, 'ether');

          this.address = account;
          this.balance = etherBalance;
        } catch (error) {
          console.error("User denied account access");
        }
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    }
  }
};
</script>
