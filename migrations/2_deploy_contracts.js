var EthIdentityStore = artifacts.require("EthIdentityStore");

module.exports = function(deployer) {
  deployer.deploy(EthIdentityStore);
};