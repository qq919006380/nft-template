import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import { providerOptions } from "../utils/providerOptions";
const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions,
});

const connectWallet = async () => {
  try {
    // await web3Modal.clearCachedProvider();
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
    

  } catch (error) {
    console.error(error);
  }
};
export default function App() {
  return (
    <div className=" font-bold cursor-pointer hover:opacity-90" onClick={connectWallet}>连接钱包</div>
  )
}