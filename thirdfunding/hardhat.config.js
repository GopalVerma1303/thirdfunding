/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config({ path: './.env' });
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [`0x${process.env.NEXT_PUBLIC_PRIVATE_KEY}`]
    }
  }
};
