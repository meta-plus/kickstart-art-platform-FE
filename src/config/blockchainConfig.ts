import { providers } from "ethers";

export const blockchainConfig = {
    name:"Ganache chain",
    rpcURL:"http://192.168.96.185:7545",
    // rpcURL:"http://localhost:7545",
    chainID: 1337,
    gasPrice:120,
}

export const web3Provider = new providers.JsonRpcProvider(blockchainConfig.rpcURL,blockchainConfig.chainID);