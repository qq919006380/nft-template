import './content.css';
import MintPageComponent from './MintPageComponent'
function MainPageComponent() {
    return (
        <div className='mainpage'>
            <MintPageComponent/>
            <h1 className='overview-title'>
                项目介绍
            </h1>
            <p className='overview-text'>
                白皮书内容
            </p>
            <a href='/list'>我的NFT</a>
        </div>

    );
}
export default MainPageComponent;