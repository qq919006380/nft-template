import MintPageComponent from './MintPageComponent'
import "./pages.css"
import Parallax from 'parallax-js'
function MainPageComponent() {
    setTimeout(() => {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
        console.log(parallaxInstance)
    }, 0);
    return (
        <div>
            <div className='h-screen flex w-full'>
                <div className=' py-5 m-auto container'>
                    <div className=' '>
                        <div className=' inline-block max-w-2xl text-3xl text-left'>
                            <h1 className=' text-5xl font-bold'>The Scott NFT Collection</h1>
                            <div>The Scort Art studio is a private collection of NFTs unique digital collectibles. Simply dummy text of the printing and typesetting industry quidam interesset his et essent possim iriure.</div>
                            <a href='#mint' className='inline-block mt-8 px-12 py-2 rounded bg-sky-600  text-gray-300 font-bold'>Mint</a>
                        </div>
                        <div className='inline-block ml-72'>
                            <div id="scene" className=' ' data-relative-input="true" style={{ width: '425px' }}>
                                <div className='layer1' data-depth="0.6">
                                    <img className=' rounded-2xl shadow-lg' src={require('../../assets/item-1.jpg')} />
                                </div>
                                <div className='layer2' data-depth="0.3" >
                                    <img className='rounded-2xl shadow-lg' src={require('../../assets/item-2.jpg')} />
                                </div>
                                <div className='layer3' data-depth="0.4"  >
                                    <img className='rounded-2xl shadow-lg' src={require('../../assets/item-3.jpg')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-screen flex w-full'>
                <div className='py-5 m-auto container'>
                    <MintPageComponent />
                </div>
            </div>

        </div>


    );
}
export default MainPageComponent;