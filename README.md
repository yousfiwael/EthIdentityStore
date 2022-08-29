# Ethereum IdentityStore

## About

It's a PoC for storing digital identities on the Ethereum blockchain network.

This project was submitted as part of [ConsenSys Academy Ethereum Developer Program 2019](https://courses.consensys.net/courses/blockchain-developer-bootcamp-registration-2020).

## Getting Started

### Setting up the Local Environment

- Install Node.js: `sudo apt install nodejs`
- Install npm, the Node.js package manager: `sudo apt install npm`
- Install Ganache CLI: `npm install -g ganache-cli`
- Download MetaMask chrome extension: https://metamask.io

Clone the git repository and change to its directory and initialize npm with the following commands:
```
git clone https://github.com/yousfiwael/EthIdentityStore.git
cd EthIdentityStore && npm init -y
```

Ensure the following node packages are installed by running the following commands:

- Truffle: `npm install -g truffle`
- lite-server: `npm install lite-server`
- truffle-hdwallet-provider: `npm install truffle-hdwallet-provider`
- OpenZeppelin Contracts: `npm install @openzeppelin/contracts`

If you are testing the contracts locally, start your test RPC client on port 8545 then compile, migrate, and test the contracts with:
```
truffle compile
truffle migrate
truffle test
```
## Running the Web Interface

The frontend interface is running with `lite-server` for local testing purposes. Use the following command from within the EthIdentityStore directory for running:

`npm run start`

A browser window should pop-up automatically after the command is run pointing to http://localhost:3000, otherwise manually type this address in your preferred browser. MetaMask is required to send transactions.

## Remix Deployment

If you'd like to play around with the contract, head on over to https://remix.ethereum.org/ and paste the code in, ensure you have 0.1 ETH in the value when you register.

## We are live on Ropsten Testnet!

Deploy the contract with `truffle migrate --network ropsten` after configuring the correct `mnemonic` and `API key` within `truffle-config.js`
if you'd like to deploy the contract by yourself on the ropsten testnet.

This is not required to play on ropsten. Currently the EthIdentityStore contract is deployed at `0xBd86bA1d85A708518C445CA3bf5E8d64050fe87f` [here](https://ropsten.etherscan.io/address/0xBd86bA1d85A708518C445CA3bf5E8d64050fe87f)

## How to deploy on Ropsten Testnet

### How to Get an Infura API Key

To get an Infura Ropsten API Key, please head to `https://infura.io/register` then signup, then generate a key for ropsten network.

### How to get Ropsten Ether

To get 1 ETH head to `https://faucet.ropsten.io` and enter your wallet account address.

### Final Step

Open `truffle-config.js` file then update `mnemonic` variable with your wallet mnemonic, and add your Infura API Key after `https://ropsten.infura.io/v3/`. Then run `truffle migrate --network ropsten`
