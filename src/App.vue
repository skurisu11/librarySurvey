<template>
  <div id="app">
    <button @click="getAccount">Get Account</button>
    <div>Account: {{ account }}</div>
    <div>Balance: {{ balance }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      balance: "0 MATIC",
    };
  },
  methods: {
    async getAccount() {
      try {
        const accounts = await this.$web3.eth.getAccounts();
        this.account = accounts[0];
        const weiBalance = await this.$web3.eth.getBalance(this.account);
        this.balance = this.$web3.utils.fromWei(weiBalance, "ether") + " MATIC";
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    },
  },
};
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
