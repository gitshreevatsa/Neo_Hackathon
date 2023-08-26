const { ethers } = require("ethers");

/**
 * Create Providers
 */
const MUMBAI_80001 = new ethers.JsonRpcProvider(
  // process.env.MUMBAI_80001,
  "https://rpc.ankr.com/polygon_mumbai",
  80001
);

const GOERLIETH = new ethers.JsonRpcProvider(
  "https://rpc.ankr.com/eth_goerli",
  5
);

const QuickNode = new ethers.WebSocketProvider(
  "wss://falling-shy-meadow.matic-testnet.quiknode.pro/80ce701062d4c8c428650af540582218dedf9cae/"
);


/**
 * Export
 */
module.exports = {
  MUMBAI_80001,
  GOERLIETH,
  QuickNode
};