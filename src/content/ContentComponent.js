import MainPageComponent from './pages/MainPageComponent'
import NFTListComponent from './pages/NFTListComponent'


import MintPageComponent from './pages/MintPageComponent';
import { useEffect, useState } from 'react';

const ContentComponent = () => {
    const [route, setRoute] = useState("");

    useEffect(() => {
      setRoute(window.location.pathname);
    });
    return (
        <div  >
            {(route != "/mint" && route != "/list") && <MainPageComponent />}
            {(route == "/mint") && <MintPageComponent />}
            {(route == "/list") && <NFTListComponent />}
        </div>
    );
}
export default ContentComponent;