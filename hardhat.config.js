require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const infuraId = 'e0f314e0a3ee4adfafe9845355e37bed'
const privateKey = '8648d368c81948bca5e14f872b161bfbd7f1cf02516d71b3372a7c24d5e7b25d'

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    // matic: {
    //   // Infura
    //   // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [process.env.privateKey]
    // }
  
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

