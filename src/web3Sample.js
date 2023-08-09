"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
// MetaMaskのproviderを使用してWeb3インスタンスを作成します。
const web3 = new web3_1.default(window.ethereum);
function getAccountInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        // ユーザーからMetaMaskへのアクセス許可を要求
        yield window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = yield web3.eth.getAccounts();
        const balance = yield web3.eth.getBalance(accounts[0]);
        return {
            address: accounts[0],
            balance: web3.utils.fromWei(balance, 'ether') + ' ETH'
        };
    });
}
getAccountInfo().then(console.log);
