import { useEffect, useState } from "react";
import { providers } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { providerOptions } from "../utils/providerOptions";
console.log(providerOptions)
// const providerOptions = {
//     walletconnect: {
//         package: WalletConnect,
//         options: {
//             infuraId: '',//以太坊连接必填
//             // rpc: {
//             //   56: 'https://bsc-dataseed1.binance.org',
//             // },
//             // network: 56,
//         },
//     },
// };
const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions,
});

const connectWallet = async () => {
  console.log(2);
  try {
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
     
  } catch (error) {
    console.log(0);
  }
};
export default function App() {
  return (
    <div onClick={connectWallet}>连接钱包xx</div>
  )
}