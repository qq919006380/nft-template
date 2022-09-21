
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletLink from "walletlink";
export const providerOptions = {
    coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
            appName: "My Awesome App", // Required
            infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
            rpc: "", // Optional if `infuraId` is provided; otherwise it's required
            chainId: 1, // Optional. It defaults to 1 if not provided
            darkMode: false // Optional. Use dark theme, defaults to false
        }
    },
    walletlink: {
        package: WalletLink, // Required
        options: {
            appName: "My Awesome App", // Required
            infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required unless you provide a JSON RPC url; see `rpc` below
            rpc: {
                1: "https://eth-mainnet.alchemyapi.io/v2/",
                56: "https://bsc-dataseed.binance.org/",
                137: "https://rpc-mainnet.maticvigil.com",
                421611: "your localhost"
              },
            chainId: 1, // Optional. It defaults to 1 if not provided
            appLogoUrl: null, // Optional. Application logo image URL. favicon is used if unspecified
            darkMode: false, // Optional. Use dark theme, defaults to false
        }
    },
    walletconnect: {
        package: WalletConnect, // required
        options: {
            infuraId: '27e484dcd9e3efcfd25a83a78777cdf1' // required
        }
    }
};
