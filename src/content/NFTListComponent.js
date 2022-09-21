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
        <div className='nft-list-item' key={index}>
            <img className='nft-list-item-img'  src={ipfsToHttp(metadata.image)} />
            <h4 className='nft-list-item-name'> {metadata.name} </h4>
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