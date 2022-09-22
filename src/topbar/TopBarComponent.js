import {Store} from '../Store';
import './topbar.css';
import {useState,useEffect } from 'react';
import MainFeatureTabsComponent from './MainFeatureTabsComponent'
 const ToolbarComponent = () => {
     //组件内部定义入口按钮展示文案
    const [text, setText] = useState(Store.currentAccount.get() === "" ? "连接钱包" : Store.currentAccount.get());
    useEffect(() => {
        //使用mobx监听钱包状态的变化
        Store.currentAccount.observe_((newAccount) => {
            if (newAccount.newValue === "") {
                setText("连接钱包");
            } else {
                setText(newAccount.newValue);
            }
        });   
    }, []);  
    
    return (
        <div className='toolbar'>
            <MainFeatureTabsComponent/>
            
            <div className='connect-wallet' > 
                <h2 className='connect-wallet-text' 
                    onClick={() => { onclick_wallet() }}> {text} </h2>
             </div>
        </div>
    );
}

const onclick_wallet = () => {
    if (Store.currentAccount.get() === "") {
        Store.wallet_is_show.set(true);
    }
}
export default ToolbarComponent;