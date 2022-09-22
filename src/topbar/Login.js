import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import { providerOptions } from "../utils/providerOptions";
import { Store } from '../Store';
import { truncateAddress } from '../utils';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';


const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions,
});




export default function App() {

  // //组件内部定义入口按钮展示文案
  const [currentAccount, setCurrentAccount] = useState(Store.currentAccount.get());
  const handleMenuClick = ({ key }) => {
    console.log(key)
    if (key == 2) {
      handleDisconnect()
    }
  };
  useEffect(() => {
    //使用mobx监听钱包状态的变化
    Store.currentAccount.observe_((newAccount) => {
      setCurrentAccount(newAccount.newValue);
    });
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);
  const connectWallet = async () => {
    console.log('connectWallet')
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      if (accounts) setCurrentAccount(accounts[0]);
      //注册监听，比如disconnect，accountsChanged，chainChanged
      registerEthListener(provider);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDisconnect = async () => {
    console.log('disconnect')
    // 刷新状态
    setCurrentAccount();
   
    // 清除登录缓存
    await web3Modal.clearCachedProvider();
  };
  const handleAccountsChanged = () => {
    console.log('handleAccountsChanged')
  }
  const handleChainChanged = () => {
    console.log('handleChainChanged')
  }
  //可以根据自己的需要些具体的内容
  function registerEthListener(web3ModalProvider) {
    web3ModalProvider
      .on("disconnect", async (error) => {
        handleDisconnect()
      })
      .on("accountsChanged", (accounts) => {
        handleAccountsChanged()

      })
      .on("chainChanged", (chainId) => {
        handleChainChanged()

      });
  }

  // 点击登陆模块
  let LoginTemplate = () => {
    return <div onClick={connectWallet}>连接钱包</div>
  }

  // 已登录模块
  let ConnectedTemplate = () => {
    const menu = (
      <Menu
        onClick={handleMenuClick}
        items={[
          {

            label: (
              <a href="/list">
                我的NFT
              </a>
            ),
            key: '1',
          },
          {
            label: '退出登陆',
            key: '2',
          },
        ]}
      />
    );
    return (<Dropdown trigger={['click']} overlay={menu}   >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <span className=" align-middle">{truncateAddress(currentAccount)}</span>
          <span ><DownOutlined /></span>
        </Space>
      </a>
    </Dropdown>)
  }
  let template = ''
  if (currentAccount) {
    template = ConnectedTemplate()
  } else {
    template = LoginTemplate()
  }
  return (
    <div className=" font-bold cursor-pointer hover:opacity-90">
      {template}
    </div>

  )
}