import Web3 from 'web3';

// MetaMaskのproviderを使用してWeb3インスタンスを作成します。
const web3 = new Web3((window as any).ethereum);

export default async function getAccountInfo() {
    // ユーザーからMetaMaskへのアクセス許可を要求
    await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);

    return {
        address: accounts[0],
        balance: web3.utils.fromWei(balance, 'ether') + ' ETH'
    };
}

// この行は、特定の操作をトリガーにして関数を呼び出す場合には不要です。
// getAccountInfo().then(console.log);
