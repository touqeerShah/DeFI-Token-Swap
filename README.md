# DeFI-Token-Swap

In this Project we are going to swap token based on DEFI

## Tool and Technolgy

1. NextJS for web
2. Alchemy for get Data of the User
3. Metamask to connect with user wallet
4. 0x which help as to know the Current rate of the token at that time and also work as Proxy to find liquidity Provider with differen uniswap and

## Set NextJS Project

1- Install Dependencies:
cd my-app
npm i @nextui-org/react web3 web3modal ethers alchemy-sdk sf-font
npm i --save-dev @types/react
npm i --save-dev @types/qs

2- Add ERC20 Interface
3- Create Alchemy Key and import into `.env` file
4- create Tokens.js file inside api folder which help as to load the list of all the token which are available for swap and the details

```
# here you can download all the details of this token json
https://tokens.coingecko.com/uniswap/all.json
```

5- Add new page in page folder `defiswap.js` and import into `_app.js`

6- Following are the function which we need to create on our platform comment in code explain each function functionality

```
  async function connect() {}
  async function closeHandler() {}
  async function listToTokens() {}
  async function displayBalance() {}
  function selectFrom(token) {}
  function selectTo(token) {}
  async function listFromTokens() {}
  const fromHandler = (side) => {};

```

7-Add following values to conect to alchemy to get user token details

```
 const config = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY,
    network: Network.ETH_RINKEBY,
  };

  const alchemy = new Alchemy(config);

  var zeroxapi = "https://rinkeby.api.0x.org/";
```

## Learn 0x

In short it help us to get our token and find best offer on all DEFI interface like uniswap and other to help us get best swap offer,It is work like proxey
https://www.0x.org/
