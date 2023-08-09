import { createApp } from "vue";
import App from "./App.vue";
import Web3 from "web3";

let web3;

async function initWeb3() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error("User denied account access:", error);
      throw error;
    }
  } else {
    console.warn("Non-Ethereum browser detected. Consider installing MetaMask!");
    throw new Error("No Ethereum provider detected");
  }
  return web3;
}

initWeb3()
    .then((web3Instance) => {
      const app = createApp(App);
      // Add the web3 instance to our app
      app.config.globalProperties.$web3 = web3Instance;
      app.mount("#app");
    })
    .catch((error) => {
      console.error("Initialization error:", error);
      // Additional error handling can be done here if needed.
    });
