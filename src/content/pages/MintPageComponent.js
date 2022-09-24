import { useEffect, useState } from 'react';
import { Store } from '../../Store';
import { getMintInfo, mint } from '../../utils/contractUtils';

const MintPageComponent = () => {
    const [totalSupply, setTotalSupply] = useState(0);
    const [maxSupply, setMaxTotalSupply] = useState(0);

    useEffect(() => {
        updataMintInfo();
    }, []);

    const updataMintInfo = () => {
        getMintInfo()
            .then((info) => {
                setTotalSupply(info[0]);
                setMaxTotalSupply(info[1]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const mintClick = () => {
        if (Store.currentAccount.get() === "") {
            window.alert("请先连接钱包");
            return;
        }
        mint()
        .then(() => {
            //mint成功后更新mint信息
            updataMintInfo();
            window.alert("mint成功");
        }).catch();
    }

    return (
        <div id='mint' className='mintpage'>
            <div className='mint-info'>当前mint进度 {"" + totalSupply} / {"" + maxSupply}</div>
            <div className='mt-16 font-coiny uppercase inline-flex items-center px-6 oy-2 text-sm sm:text-2xl md:text-3xl font-medium text-center rounded text-rose-500 hover:bg-rose-600 hover:text-white' onClick={mintClick}>一键mint</div>
        </div>
    );
}

export default MintPageComponent;