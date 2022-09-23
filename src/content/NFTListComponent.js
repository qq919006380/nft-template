import './content.css';
import { getMetaDataList, ipfsToHttp } from "../utils/contractUtils";
import { useEffect, useState } from 'react';

function NFTListComponent() {
    const [metadatalist, setMetadataList] = useState([]);
    console.log(metadatalist)
    useEffect(() => {
        //获取NFT的MetaMata列表
        getMetaDataList()
            .then((arr) => {                
                setMetadataList(arr);
            })
            .catch((err) => {
                console.error("err is" + err);
            });
    }, []);

    const items = metadatalist.map((metadata, index) => 
        <div   key={index}>
            <img className=' w-52'  src={ipfsToHttp(metadata.image)} />
            <h4  > {metadata.name} </h4>
        </div>
    );
    console.log("items is" + items);

    return (
        <div className='nft-list'>
            {items}
        </div>

    );
}
export default NFTListComponent;