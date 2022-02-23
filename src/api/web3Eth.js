import store from "@/store";
import ABI_LC from "@/jsons/abi-LC-ERC20.js";
import ABI_NFT from "@/jsons/abi-721-NFT.js";
import ABI_LB from "@/jsons/LB_abi.js";
import ABI_USDT from "@/jsons/LB_abi.js";
import {
    NftAddress,
    UsdtAddress,
    LbAddress,
    LcAddress
} from "@/jsons/contractAddress.js"

// console.log("web3Eth--",store);
const getWeb3Provider = () => store.getters.web3Provider;
export const contractLC = () => {
    const web3Provider = getWeb3Provider();
    return new web3Provider.eth.Contract(ABI_LC, LcAddress)
};
export const contractLB = () => {
    const web3Provider = getWeb3Provider();
    return new web3Provider.eth.Contract(ABI_LB, LbAddress)
};
export const contractNFT = () => {
    const web3Provider = getWeb3Provider();
    return new web3Provider.eth.Contract(ABI_NFT, NftAddress)
};
export const contractUSDT = () => {
    const web3Provider = getWeb3Provider();
    return new web3Provider.eth.Contract(ABI_USDT, UsdtAddress)
};

export function getAccounts() {
    const web3Provider = getWeb3Provider();
    return web3Provider.eth.getAccounts()
}