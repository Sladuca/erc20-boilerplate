require('dotenv').config()
require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://polygon-rpc.com/",
      accounts: [process.env.PRIVATE_KEY]
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    },
    rinkeby: {
      url: "https://rinkeby-light.eth.linkpool.io/",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}