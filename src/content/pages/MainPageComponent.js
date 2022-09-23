import MintPageComponent from './MintPageComponent'
function MainPageComponent() {
    return (
        <div>
            <div className='h-screen flex'>
                <div className='container py-5 m-auto'>
                    <div className='flex'>
                        <div className=' w-1/2'>
                            <h1>The Scott NFT Collection</h1>
                            <div>The Scort Art studio is a private collection of NFTs unique digital collectibles. Simply dummy text of the printing and typesetting industry quidam interesset his et essent possim iriure.</div>
                            <div>Mint</div>
                        </div>
                        <div className=' w-1/2'>
                            我是图片
                        </div>
                    </div>
                    <a href='/list'>我的NFT</a>
                </div>
            </div>
            <MintPageComponent />
        </div>


    );
}
export default MainPageComponent;