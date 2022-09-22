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

const connectWallet = async () => {
  console.log('connectWallet')
  try {
    // await web3Modal.clearCachedProvider();
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
  } catch (error) {
    console.error(error);
  }
};
export default function App() {

  // //组件内部定义入口按钮展示文案
  const [currentAccount, setText] = useState(Store.currentAccount.get());

  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  useEffect(() => {
    //使用mobx监听钱包状态的变化
    Store.currentAccount.observe_((newAccount) => {
      setText(newAccount.newValue);
    });
  }, []);
  // 登陆
  let LoginTemplate = () => {
    return <div onClick={connectWallet}>连接钱包</div>
  }
  // 已连接钱包
  let ConnectedTemplate = () => {
    const menu = (
      <Menu
        onClick={handleMenuClick}
        items={[
          {
            label: 'Clicking me will not close the menu.',
            key: '1',
          },
          {
            label: 'Clicking me will not close the menu also.',
            key: '2',
          },
          {
            label: '退出登陆',
            key: '3',
          },
        ]}
      />
    );
    // <div onClick={connectWallet}>{truncateAddress(currentAccount)}</div>
    return (<Dropdown overlay={menu} onOpenChange={handleOpenChange} open={open}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
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