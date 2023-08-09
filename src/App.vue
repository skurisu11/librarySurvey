<template>
  <div id="app">
    <button @click="getAccount">Get Account</button>
    <div>Account: {{ account }}</div>
    <div>Balance: {{ balance }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Web3 from "web3";

export default defineComponent({
  data() {
    return {
      account: "",
      balance: "0 MATIC",
    };
  },
  methods: {
    async getAccount() {
      if (this.$web3) {
        const accounts: string[] = await this.$web3.eth.getAccounts();
        this.account = accounts[0];
        const weiBalance: string = await this.$web3.eth.getBalance(this.account);
        this.balance = this.$web3.utils.fromWei(weiBalance, "ether") + " MATIC";
      }
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
