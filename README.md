# Ethereum IdentityStore

## Intro

This project was submitted as part of [ConsenSys Academy Ethereum Developer Program 2019](https://consensys.net/academy/ondemand/) and [Africa Blockchain Developer Program](https://afriblockchain.org/developer/).

## What does the project do?

It's a proof-of-concept for storing identities on the ethereum blockchain.

# Getting started

## Setup the local environment

- Install Node.js: `sudo apt install nodejs`
- Install npm, the Node.js package manager: `sudo apt install npm`
- Install Ganache CLI: `npm install -g ganache-cli`
- Install MetaMask chrome extension: https://metamask.io

Clone the git repository and change to its directory and initialize npm with the following commands:
```
git clone https://github.com/WaelYousfi/EthIdentityStore.git
cd EthIdentityStore && npm init -y
```

Ensure the following node packages are installed by running the following commands:

- Truffle: `npm install -g truffle`
- lite-server: `npm install lite-server`
- truffle-hdwallet-provider: `npm install truffle-hdwallet-provider`
- openzeppelin-solidity: `npm install openzeppelin-solidity`

If you are testing the contracts locally start your test RPC client on port 8545, then compile, migrate and test the contracts with:
```
truffle compile
truffle migrate
truffle test
```
## Running the web interface

The frontend interface is run with lite-server for local testing purposes. Use the following command from within the EthIdentityStore directory to run:

`npm run start`

A browser window should pop up automatically after the command is run pointing to http://localhost:3000, otherwise manually type this address in your preferred browser. Metamask is required to send transactions.

## Remix deployment

If you'd like to play around with the contract, head on over to https://remix.ethereum.org/ and paste the code in, ensure you have 0.1 ETH in the value when you register.

## We are live on Ropsten!

Deploy the contract with `truffle migrate --network ropsten` after configuring the correct `mnemonic` and `API key` within `truffle-config.js`
If you'd like to deploy the contract by yourself on the ropsten test network. This is not required to play on ropsten. Currently the EthIdentityStore contract is deployed at `0xBd86bA1d85A708518C445CA3bf5E8d64050fe87f` [here](https://ropsten.etherscan.io/address/0xBd86bA1d85A708518C445CA3bf5E8d64050fe87f)

## How to deploy on Ropsten

### How to Get an infura key

To get an infura ropsten api key, please head to `https://infura.io/register` then signup, then generate a key for ropsten network.

### How to get ropsten ether

To get 1 ETH head to `https://faucet.ropsten.io` and enter your testnet account address.

### Final step

open `truffle-config.js` file then update `mnemonic` var with your mnemonic wallet, and add your Infura API key after `https://ropsten.infura.io/v3/`. Then run `truffle migrate --network ropsten`

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/YyCcKJeGTWA/0.jpg)](https://www.youtube.com/watch?v=YyCcKJeGTWA)
