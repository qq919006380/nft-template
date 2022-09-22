// import { Store } from '../Store';
// import './wallet-page.css';
// import { useEffect, useState } from 'react';
// import { isMetaMaskInstalled, metamaskConnect } from '../utils/wallet_utils';

// const WalletComponent = () => {
//     const text = isMetaMaskInstalled() ? "MetaMask" : "请先安装 MetaMask";
//     return (
//         <div className='wallet-page-bg' >
//             <div className='wallet-page-panel' onClick={(e) => { metaMask_click(e) }}> {text} </div>
//         </div>
//     );
// };

 

// const metaMask_click = async (e) => {
//     e.stopPropagation();
//     if (isMetaMaskInstalled()) {
//         metamaskConnect();
//     }
//     console.log("metaMask_click");
// }

// export default WalletComponent;