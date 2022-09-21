import './App.css';
import BottomBarComponent from './bottombar/BottomBarComponent';
import ContentComponent from './content/ContentComponent';
import TopBarComponent from './topbar/TopBarComponent';
import WalletComponent from "./wallet_page/WalletComponent";
import React, { useEffect } from 'react';

import { Store } from './Store.js'


 
function App() {
  useEffect(() => {
    Store.registerAccountChange()
  }, []);
  return (
    <div className="App">
        <WalletComponent />
        <TopBarComponent />
        <ContentComponent />
        <BottomBarComponent />
    </div>
  );
}

export default App;