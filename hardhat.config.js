require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const ALCHEMY_API = process.env.ALCHEMY_API;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const ETHERSCAN_API = process.env.ETHERSCAN_API;

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: ALCHEMY_API,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  }
};