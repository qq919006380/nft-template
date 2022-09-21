import './content.css';
import MainPageComponent from './MainPageComponent'
import NFTListComponent from './NFTListComponent'


import MintPageComponent from './MintPageComponent';
import { useEffect, useState } from 'react';

const ContentComponent = () => {
    const [route, setRoute] = useState("");

    useEffect(() => {
      setRoute(window.location.pathname);
    });
    return (
        <div className='topbar'>
            {(route != "/mint" && route != "/list") && <MainPageComponent />}
            {(route == "/mint") && <MintPageComponent />}
            {(route == "/list") && <NFTListComponent />}
        </div>
    );
}
export default ContentComponent;