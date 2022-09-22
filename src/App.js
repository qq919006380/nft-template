import './App.css';
import BottomBarComponent from './bottombar/BottomBarComponent';
import ContentComponent from './content/ContentComponent';
import TopBarComponent from './topbar/TopBarComponent';
import React, { useEffect } from 'react';

import { Store } from './Store.js'


 
function App() {
  useEffect(() => {
    Store.registerAccountChange()
  }, []);
  return (
    <div className="App">
        <TopBarComponent />
        <ContentComponent />
        <BottomBarComponent />
    </div>
  );
}

export default App;