import { createApp } from 'vue';
import VueOnsen from 'vue-onsenui';
import * as components from 'vue-onsenui/esm/components';
import Web3 from 'web3';
import App from './App.vue';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

let web3: Web3 | undefined;

async function initWeb3(): Promise<Web3 | undefined> {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (error) {
      console.error("User denied account access");
    }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
  }
  return web3;
}

if (VueOnsen.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

initWeb3().then((web3Instance) => {
  const app = createApp(App);
  app.config.globalProperties.$web3 = web3Instance;

  // Register all vue-onsenui components
  Object.values(components).forEach(component =>
      app.component(component.name, component));

  app.use(VueOnsen);
  app.mount('#app');

  app.config.errorHandler = (err, vm, info) => {
    console.error(err.toString());
    return false;
  }
});
