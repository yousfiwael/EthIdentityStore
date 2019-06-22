var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = ""; //enter you Infura API key here
var mnemonic = ""; //put your mnemonic for the account that will deploy the contract to ropsten here

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new  HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infura_apikey);
      },
      network_id:3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
