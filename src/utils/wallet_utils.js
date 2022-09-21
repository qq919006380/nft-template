//判断钱包是否安装
export const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
};

//请求连接钱包
export const metamaskConnect = async () => {
    try {
        const { ethereum } = window;
        return await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        console.error(error);
    }
};
//获取当前已经连接的钱包地址
export const getConnectAccount = async () => {
    const { ethereum } = window;
    const account = await ethereum.request({ method: 'eth_accounts' });
    console.log("getConnectAccount" + account);
    return account;
}